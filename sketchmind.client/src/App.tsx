import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import type { Drawing, Message } from './types';
import Header from './components/Header';
import ChatSidebar from './components/ChatSidebar';
import Canvas from './components/Canvas';

const API_BASE_URL = '/api/drawings';

function App() {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [redoStack, setRedoStack] = useState<string[]>([]);
    const [gallery, setGallery] = useState<Drawing[]>([]);
    const [selectedId, setSelectedId] = useState<string>('');
    
    // ניהול זהות משתמש - נשמר בדפדפן
    const [userId] = useState(() => {
        const savedId = localStorage.getItem('sketchmind_user_id');
        if (savedId) return savedId;
        
        const newId = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('sketchmind_user_id', newId);
        return newId;
    });

    const currentSvg = history.length > 0 ? history[history.length - 1] : '';

    // טעינת גלריה מסוננת לפי המשתמש הנוכחי
    const fetchGallery = useCallback(async () => {
        try {
            // שולחים את ה-userId כ-Query Parameter
            const response = await axios.get(`${API_BASE_URL}?userId=${userId}`);
            setGallery(response.data);
        } catch (error) {
            console.error("נכשל בטעינת הגלריה", error);
        }
    }, [userId]);

    useEffect(() => {
        fetchGallery();
    }, [fetchGallery]);

    const handleGenerate = async () => {
        if (!prompt.trim() || isLoading) return;

        const userMessage = prompt;
        setMessages(prev => [...prev, { text: userMessage, type: 'user' }]);
        setPrompt('');
        setIsLoading(true);

        try {
            const response = await axios.post(`${API_BASE_URL}/generate`, {
                name: userMessage,
                htmlContent: currentSvg
            });

            if (response.data && response.data.htmlContent) {
                setHistory(prev => [...prev, response.data.htmlContent]);
                setRedoStack([]);
                setMessages(prev => [...prev, { text: "ציירתי לך! מה דעתך?", type: 'bot' }]);
            }
        } catch (error: any) {
            console.error("Error generating drawing:", error);
            setMessages(prev => [...prev, { text: "שגיאה ביצירת הציור.", type: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        if (!currentSvg || isLoading) return;

        setIsLoading(true);
        try {
            // שליחת הציור יחד עם ה-userId כדי לשמור אותו ב-DB תחת המשתמש הנכון
            await axios.post(API_BASE_URL, {
                name: `ציור ${new Date().toLocaleTimeString()}`,
                htmlContent: currentSvg,
                userId: userId // חשוב מאוד!
            });
            setMessages(prev => [...prev, { text: "הציור נשמר בהצלחה בגלריה! 💾", type: 'bot' }]);
            fetchGallery();
        } catch (error) {
            console.error("Save failed:", error);
            alert("לא הצלחתי לשמור את הציור.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendEmail = async (email: string) => {
        try {
            await axios.post(`${API_BASE_URL}/send-email`, {
                email: email,
                htmlContent: currentSvg,
                name: "My SketchMind Drawing"
            });
            alert("המייל בדרך אליך! 🚀");
        } catch (error) {
            console.error("Email failed", error);
            alert("אופס, השליחה נכשלה.");
        }
    };

    // ... שאר הפונקציות (Undo, Redo, Clear, New, SelectChange) נשארות כפי שהיו ...
    const handleUndo = () => {
        if (history.length > 0) {
            setRedoStack(prev => [history[history.length - 1], ...prev]);
            setHistory(prev => prev.slice(0, -1));
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            setHistory(prev => [...prev, redoStack[0]]);
            setRedoStack(prev => prev.slice(1));
        }
    };

    const handleClear = () => {
        if (!currentSvg) return;
        setHistory(prev => [...prev, '']);
        setRedoStack([]);
    };

    const handleNew = () => {
        setHistory([]);
        setMessages([]);
        setSelectedId('');
    };

    const handleSelectChange = (id: string) => {
        setSelectedId(id);
        const drawing = gallery.find(d => d.id.toString() === id);
        if (drawing) {
            setHistory([drawing.htmlContent]);
            setMessages([{ text: `טענתי את: ${drawing.name}`, type: 'bot' }]);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header
                gallery={gallery}
                selectedId={selectedId}
                currentSvg={currentSvg}
                isLoading={isLoading}
                canUndo={history.length > 0}
                canRedo={redoStack.length > 0}
                onSelectChange={handleSelectChange}
                onSave={handleSave}
                onNew={handleNew}
                onUndo={handleUndo}
                onRedo={handleRedo}
                onClear={handleClear}
                onSendEmail={handleSendEmail}
            />
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <ChatSidebar
                    messages={messages}
                    prompt={prompt}
                    isLoading={isLoading}
                    onPromptChange={setPrompt}
                    onSend={handleGenerate}
                />
                <Canvas svgContent={currentSvg} />
            </div>
            {/* טיפ: הצגת ה-ID בתחתית בשביל הבדיקה שלך */}
            <div style={{ fontSize: '10px', color: '#ccc', position: 'fixed', bottom: 5, right: 5 }}>
                User ID: {userId}
            </div>
        </div>
    );
}

export default App;