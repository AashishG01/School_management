import { useState } from 'react';
import { useToast } from '../../components/ui/Toast';

const StudentGrades = () => {
    const toast = useToast();
    const [isRevising, setIsRevising] = useState(false);

    const startRevision = () => {
        setIsRevising(true);
        setTimeout(() => {
            setIsRevising(false);
            toast('Targeted Revision Quiz unlocked for Algebra!', 'success');
        }, 2000);
    };

    const subjects = [
        { name: 'Mathematics', score: 85, grade: 'A', weakTopics: ['Algebra: Polynomials', 'Trigonometry'], color: '#4a7c59' },
        { name: 'Science', score: 92, grade: 'A+', weakTopics: [], color: '#3d5a73' },
        { name: 'English', score: 78, grade: 'B+', weakTopics: ['Grammar: Active/Passive Voice'], color: '#c9a84c' },
        { name: 'Social Studies', score: 88, grade: 'A', weakTopics: ['Mughal Empire Timeline'], color: '#c4522a' },
    ];

    return (
        <>
            <div className="page-header">
                <h2>My Grades & Performance</h2>
            </div>

            <div className="grid-2">
                {/* GPA Overview */}
                <div className="card">
                    <div className="card-header"><div className="card-title">Term 1 Overview</div></div>
                    <div className="card-body" style={{ textAlign: 'center', padding: '40px 20px' }}>
                        <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 20px' }}>
                            <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--border)" strokeWidth="3" />
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--sage)" strokeWidth="3" strokeDasharray="85.75, 100" />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '36px', fontWeight: 900, color: 'var(--ink)' }}>85.7%</div>
                                <div style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>Overall GPA</div>
                            </div>
                        </div>
                        <div className="status-chip paid" style={{ fontSize: '13px', padding: '6px 16px' }}>Excellent Standing</div>
                    </div>
                </div>

                {/* AI Weak Topic Detector */}
                <div className="card" style={{ border: '2px solid var(--gold)' }}>
                    <div className="card-header" style={{ background: 'rgba(201, 168, 76, 0.05)', borderBottom: '1px solid var(--border)' }}>
                        <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '18px' }}>🧠</span> AI Insight: Revision Mode
                        </div>
                    </div>
                    <div className="card-body">
                        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                            Our AI has analyzed your recent quiz scores and homework submissions. We noticed you struggle a bit with the following topics. Let's fix that!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ border: '1px solid var(--rust)', background: 'rgba(196, 82, 42, 0.05)', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--rust)', marginBottom: '2px' }}>Mathematics: Algebra</div>
                                    <div style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)' }}>Average score: 55%</div>
                                </div>
                                <span className="status-chip rejected">Critical Weakness</span>
                            </div>

                            <div style={{ border: '1px solid var(--border)', background: 'var(--cream)', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '2px' }}>English: Active/Passive Voice</div>
                                    <div style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)' }}>Average score: 72%</div>
                                </div>
                                <span className="status-chip pending">Needs Practice</span>
                            </div>
                        </div>

                        <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={startRevision} disabled={isRevising}>
                            {isRevising ? 'Generating targeted quiz...' : '✨ Start Personal Revision Quiz'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header"><div className="card-title">Detailed Subject Performance</div></div>
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead><tr><th>Subject</th><th>Score</th><th>Grade</th><th>Performance Bar</th><th>Suggested Revision</th></tr></thead>
                        <tbody>
                            {subjects.map((s, i) => (
                                <tr key={i}>
                                    <td style={{ fontWeight: 600, fontSize: '13.5px' }}>{s.name}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}>{s.score}%</td>
                                    <td><span style={{ fontSize: '16px', fontWeight: 800, color: s.color }}>{s.grade}</span></td>
                                    <td style={{ width: '30%' }}>
                                        <div className="progress-bar" style={{ width: '100%' }}>
                                            <div className="progress-fill" style={{ width: `${s.score}%`, background: s.color }}></div>
                                        </div>
                                    </td>
                                    <td>
                                        {s.weakTopics.length > 0 ? (
                                            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                                {s.weakTopics.map((wt, j) => (
                                                    <span key={j} style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '4px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'JetBrains Mono', monospace" }}>{wt}</span>
                                                ))}
                                            </div>
                                        ) : (
                                            <span style={{ fontSize: '12px', color: 'var(--sage)' }}>On track! 🌟</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default StudentGrades;
