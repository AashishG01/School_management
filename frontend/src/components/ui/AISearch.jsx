import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AISearch = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        if (!isOpen) {
            setQuery('');
            setResults(null);
        }
    }, [isOpen]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsSearching(true);
        setResults(null);

        // Simulate AI processing time
        setTimeout(() => {
            setIsSearching(false);

            const q = query.toLowerCase();
            // Simple mock logic mapping intent to results
            if (q.includes('fee') || q.includes('receipt') || q.includes('bill')) {
                setResults({
                    intent: 'Search Fee Records',
                    confidence: '98%',
                    items: [
                        { title: 'Aryan Patel — Tuition Term 1', type: 'Receipt', path: '/admin/fees' },
                        { title: 'Pending Dues Report', type: 'Report', path: '/admin/fees' }
                    ]
                });
            } else if (q.includes('schedule') || q.includes('timetable') || q.includes('period')) {
                setResults({
                    intent: 'View Timetable',
                    confidence: '95%',
                    items: [
                        { title: 'Class 9A Weekly Timetable', type: 'Schedule', path: '/admin/timetable' },
                        { title: 'Mr. Mehta Schedule', type: 'Staff Schedule', path: '/admin/teachers' }
                    ]
                });
            } else if (q.includes('student') || q.includes('admission')) {
                setResults({
                    intent: 'Manage Students',
                    confidence: '90%',
                    items: [
                        { title: 'New Admissions Queue', type: 'Action', path: '/admin/admissions' },
                        { title: 'Student Directory', type: 'Directory', path: '/admin/students' }
                    ]
                });
            } else {
                setResults({
                    intent: 'General Search',
                    confidence: '70%',
                    items: [
                        { title: `Global search results for "${query}"`, type: 'System', path: '/admin' }
                    ]
                });
            }
        }, 800);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose} style={{ alignItems: 'flex-start', paddingTop: '10vh' }}>
            <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px', borderRadius: '16px', overflow: 'hidden' }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '20px', marginRight: '16px' }}>✨</span>
                    <input
                        ref={inputRef}
                        className="form-input"
                        style={{ border: 'none', padding: 0, fontSize: '18px', background: 'transparent', flex: 1 }}
                        placeholder="Type anything... (e.g. 'find fee receipt for aryan')"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', background: 'var(--paper)', padding: '4px 8px', borderRadius: '6px' }}>
                        Enter ↵
                    </button>
                </form>

                <div style={{ padding: '24px', minHeight: '200px' }}>
                    {isSearching ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', color: 'var(--muted)', gap: '12px' }}>
                            <div className="ai-spinner" style={{ width: '20px', height: '20px', border: '3px solid var(--border)', borderTopColor: 'var(--gold)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}>AI is analyzing intent...</span>
                        </div>
                    ) : results ? (
                        <div>
                            <div style={{ fontSize: '11px', color: 'var(--sage)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Intent Matches: {results.intent}</span>
                                <span>Confidence: {results.confidence}</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {results.items.map((item, i) => (
                                    <div key={i} className="action-btn" onClick={() => { onClose(); navigate(item.path); }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px' }}>
                                        <div style={{ fontWeight: 600, fontSize: '14px' }}>{item.title}</div>
                                        <span className="status-chip paid">{item.type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', color: 'var(--muted)', paddingTop: '40px' }}>
                            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔍</div>
                            <p style={{ fontSize: '14px', marginBottom: '8px' }}>No menus. No clicking around.</p>
                            <p style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>Just tell the AI what you want to do.</p>

                            <div style={{ marginTop: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <span className="status-chip pending" style={{ cursor: 'pointer' }} onClick={() => setQuery('show pending fee for class 9')}>"show pending fee for class 9"</span>
                                <span className="status-chip pending" style={{ cursor: 'pointer' }} onClick={() => setQuery('schedule for science lab')}>"schedule for science lab"</span>
                                <span className="status-chip pending" style={{ cursor: 'pointer' }} onClick={() => setQuery('admit new student')}>"admit new student"</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </div>
    );
};

export default AISearch;
