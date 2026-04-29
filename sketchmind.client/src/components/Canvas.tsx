import { memo } from 'react';

interface CanvasProps {
    svgContent: string;
    isLoading?: boolean;
}

const spinnerStyle = `
    @keyframes spin-outer {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    @keyframes spin-inner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
    }
    @keyframes pulse-dot {
        0%, 100% { transform: scale(1); opacity: 1; }
        50%       { transform: scale(1.4); opacity: 0.6; }
    }
    .ring-outer {
        width: 72px; height: 72px;
        border-radius: 50%;
        border: 5px solid transparent;
        border-top-color: #3b82f6;
        border-right-color: #60a5fa;
        animation: spin-outer 1s linear infinite;
    }
    .ring-inner {
        position: absolute;
        width: 48px; height: 48px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-bottom-color: #f59e0b;
        border-left-color: #fbbf24;
        animation: spin-inner 0.75s linear infinite;
    }
    .center-dot {
        position: absolute;
        width: 10px; height: 10px;
        border-radius: 50%;
        background: #3b82f6;
        animation: pulse-dot 1s ease-in-out infinite;
    }
`;

const Canvas = memo(function Canvas({ svgContent, isLoading }: CanvasProps) {
    return (
        <div style={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            background: '#f1f3f4', 
            padding: '20px', 
            overflow: 'auto',
            borderLeft: '1px solid #ddd',
            direction: 'ltr',
            position: 'relative'
        }}>
            <style>{spinnerStyle}</style>

            {isLoading && (
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    zIndex: 10
                }}>
                    <div style={{ position: 'relative', width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="ring-outer" />
                        <div className="ring-inner" />
                        <div className="center-dot" />
                    </div>
                    <span style={{ color: '#6b7280', fontSize: '14px', fontWeight: 500 }}>Gemini מצייר... 🎨</span>
                </div>
            )}

            <div style={{ opacity: isLoading ? 0.2 : 1, transition: 'opacity 0.3s', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {svgContent ? (
                    <div
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            maxWidth: '800px', 
                            maxHeight: '800px', 
                            background: 'white',
                            border: '1px solid #e5e7eb', 
                            borderRadius: '8px', 
                            padding: '20px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                        }}
                        dangerouslySetInnerHTML={{ __html: svgContent }}
                    />
                ) : (
                    <div style={{ color: '#9ca3af', fontSize: '1rem', textAlign: 'center' }}>הציור שלך יופיע כאן...</div>
                )}
            </div>
        </div>
    );
});

export default Canvas;
