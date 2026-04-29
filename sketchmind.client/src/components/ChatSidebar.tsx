import type { Message } from '../types';

interface ChatSidebarProps {
    messages: Message[];
    prompt: string;
    isLoading: boolean;
    onPromptChange: (value: string) => void;
    onSend: () => void;
}

export default function ChatSidebar({ messages, prompt, isLoading, onPromptChange, onSend }: ChatSidebarProps) {
    return (
        <div style={{
            width: '320px',
            borderRight: '1px solid #ddd',
            display: 'flex',
            flexDirection: 'column',
            background: '#f9f9f9'
        }}>
            <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid #ddd',
                fontWeight: '600',
                fontSize: '14px',
                color: '#333',
                direction: 'rtl'
            }}>
                💬 הצ'אט שלך עם הבוט
            </div>

            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                direction: 'rtl'
            }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start'
                    }}>
                        <div style={{
                            maxWidth: '80%',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            background: msg.type === 'user' ? '#d4edda' : '#ffffff',
                            color: '#333',
                            fontSize: '13px',
                            lineHeight: '1.5',
                            border: msg.type === 'bot' ? '1px solid #ddd' : 'none',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}>
                            {msg.type === 'bot' && <span style={{ marginLeft: '4px' }}>🤖</span>}
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ padding: '8px 12px', borderRadius: '12px', background: '#fff', border: '1px solid #ddd', fontSize: '13px', color: '#888' }}>
                            🤖 מצייר...
                        </div>
                    </div>
                )}
            </div>

            <div style={{
                padding: '10px',
                background: 'white',
                borderTop: '1px solid #ddd',
                display: 'flex',
                gap: '8px',
                direction: 'rtl'
            }}>
                <input
                    style={{
                        flex: 1,
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '13px',
                        outline: 'none',
                        direction: 'rtl'
                    }}
                    value={prompt}
                    onChange={(e) => onPromptChange(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onSend()}
                    placeholder="כתוב הודעה..."
                />
                <button
                    onClick={onSend}
                    disabled={isLoading}
                    style={{
                        padding: '10px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        background: '#22c55e',
                        color: 'white',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        opacity: isLoading ? 0.6 : 1,
                        whiteSpace: 'nowrap'
                    }}
                >
                    שלח
                </button>
            </div>
        </div>
    );
}
