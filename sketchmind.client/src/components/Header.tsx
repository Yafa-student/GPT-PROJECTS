import type  { Drawing } from '../types';

interface HeaderProps {
    gallery: Drawing[];
    selectedId: string;
    currentSvg: string;
    isLoading: boolean;
    canUndo: boolean;
    canRedo: boolean;
    onSelectChange: (id: string) => void;
    onSave: () => void;
    onNew: () => void;
    onUndo: () => void;
    onRedo: () => void;
    onClear: () => void;
    onSendEmail: (email: string) => void;
}

const btn = (bg: string): React.CSSProperties => ({
    padding: '6px 14px',
    borderRadius: '6px',
    border: 'none',
    background: bg,
    color: 'white',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600'
});

export default function Header({
    gallery, selectedId, currentSvg, isLoading,
    canUndo, canRedo,
    onSelectChange, onSave, onNew, onUndo, onRedo, onClear, onSendEmail
}: HeaderProps) {
    return (
        <div style={{
            padding: '8px 12px',
            background: '#f1f3f4',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid #ddd',
            direction: 'ltr'
        }}>
            <select
                value={selectedId}
                onChange={(e) => onSelectChange(e.target.value)}
                style={{
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    background: 'white',
                    fontSize: '13px',
                    minWidth: '130px'
                }}
            >
                <option value="">Drawing #10</option>
                {gallery.map((drawing) => (
                    <option key={drawing.id} value={drawing.id.toString()}>
                        {drawing.name || `Drawing #${drawing.id}`}
                    </option>
                ))}
            </select>

            <button onClick={onNew} style={btn('#3b82f6')}>+ New Drawing</button>
            <button
                onClick={() => {
                    const email = window.prompt("לאיזו כתובת מייל לשלוח את הציור?");
                    if (!email) return;
                    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                    if (!isValid) { alert("כתובת המייל אינה תקינה."); return; }
                    onSendEmail(email);
                }}
                style={btn('#22c55e')}
            >
                Send
            </button>
            <button onClick={onUndo} disabled={!canUndo} style={{ ...btn('#f59e0b'), opacity: canUndo ? 1 : 0.5, cursor: canUndo ? 'pointer' : 'not-allowed' }}>Undo</button>
            <button onClick={onRedo} disabled={!canRedo} style={{ ...btn('#06b6d4'), opacity: canRedo ? 1 : 0.5, cursor: canRedo ? 'pointer' : 'not-allowed' }}>Redo</button>
            <button onClick={onClear} disabled={!currentSvg} style={{ ...btn('#ef4444'), opacity: currentSvg ? 1 : 0.5, cursor: currentSvg ? 'pointer' : 'not-allowed' }}>Clear</button>
            <button onClick={onSave} disabled={!currentSvg || isLoading} style={{ ...btn('#a855f7'), opacity: (currentSvg && !isLoading) ? 1 : 0.5, cursor: (currentSvg && !isLoading) ? 'pointer' : 'not-allowed' }}>
                {isLoading ? 'שומר...' : 'Save'}
            </button>
        </div>
    );
}
