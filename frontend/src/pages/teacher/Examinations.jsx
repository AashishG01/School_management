import { useState } from 'react';
import { exams, examSchedule, classMarks as initialMarks } from '../../data/exams';
import { useToast } from '../../components/ui/Toast';

const Examinations = () => {
    const toast = useToast();
    const [activeTab, setActiveTab] = useState('schedule');
    const [marksData, setMarksData] = useState(initialMarks);

    const updateMark = (rollNo, field, value) => {
        setMarksData(prev => prev.map(m => {
            if (m.rollNo !== rollNo) return m;
            const updated = { ...m, [field]: Number(value) || 0 };
            updated.total = updated.math + updated.science + updated.english + updated.hindi + updated.social + updated.cs;
            updated.percent = Math.round((updated.total / 560) * 100) + '%';
            const pct = parseInt(updated.percent);
            updated.grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B+' : pct >= 60 ? 'B' : pct >= 50 ? 'B-' : 'C';
            return updated;
        }));
    };

    const handleSaveMarks = () => {
        toast('Marks saved successfully for Class 9A — Mathematics', 'success');
    };

    return (
        <>
            <div className="tabs">
                <button className={`tab ${activeTab === 'schedule' ? 'active' : ''}`} onClick={() => setActiveTab('schedule')}>Exam Schedule</button>
                <button className={`tab ${activeTab === 'marks' ? 'active' : ''}`} onClick={() => setActiveTab('marks')}>Enter Marks</button>
            </div>

            {activeTab === 'schedule' && (
                <>
                    <div className="stats-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        <div className="stat-card sage" style={{ padding: '16px 20px' }}><div className="stat-value" style={{ fontSize: '24px' }}>2</div><div className="stat-label">Completed</div></div>
                        <div className="stat-card gold" style={{ padding: '16px 20px' }}><div className="stat-value" style={{ fontSize: '24px' }}>1</div><div className="stat-label">Ongoing</div></div>
                        <div className="stat-card slate" style={{ padding: '16px 20px' }}><div className="stat-value" style={{ fontSize: '24px' }}>1</div><div className="stat-label">Upcoming</div></div>
                    </div>

                    <div className="card">
                        <div className="data-table-wrap">
                            <table className="data-table">
                                <thead><tr><th>Exam</th><th>Type</th><th>Start</th><th>End</th><th>Classes</th><th>Status</th></tr></thead>
                                <tbody>
                                    {exams.map(e => (
                                        <tr key={e.id}>
                                            <td style={{ fontWeight: 600 }}>{e.name}</td>
                                            <td style={{ fontSize: '12px' }}>{e.type}</td>
                                            <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{e.startDate}</td>
                                            <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{e.endDate}</td>
                                            <td style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)' }}>{e.classes.slice(0, 3).join(', ')}{e.classes.length > 3 ? ` +${e.classes.length - 3}` : ''}</td>
                                            <td><span className={`status-chip ${e.status === 'completed' ? 'paid' : e.status === 'ongoing' ? 'pending' : 'excused'}`}>{e.status.charAt(0).toUpperCase() + e.status.slice(1)}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card" style={{ marginTop: '20px' }}>
                        <div className="card-header"><div className="card-title">Unit Test 2 — Schedule</div></div>
                        <div className="card-body">
                            {examSchedule.map((s, i) => (
                                <div className="schedule-item" key={i}>
                                    <div className="schedule-time" style={{ width: '120px' }}>{s.date}</div>
                                    <div className="schedule-bar" style={{ background: i % 2 === 0 ? 'var(--sage)' : 'var(--slate)' }}></div>
                                    <div className="schedule-content">
                                        <div className="schedule-subject">{s.subject}</div>
                                        <div className="schedule-meta">{s.time} · Max: {s.maxMarks}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'marks' && (
                <>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                        <select className="filter-select"><option>Unit Test 2</option><option>Unit Test 1</option></select>
                        <select className="filter-select"><option>Class 9A</option><option>Class 10B</option></select>
                        <select className="filter-select"><option>Mathematics</option><option>Science</option></select>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">Enter Marks — Mathematics (Class 9A)</div>
                            <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }} onClick={handleSaveMarks}>💾 Save Marks</button>
                        </div>
                        <div className="data-table-wrap">
                            <table className="data-table">
                                <thead><tr><th>Roll</th><th>Name</th><th>Maths</th><th>Science</th><th>English</th><th>Hindi</th><th>Social</th><th>CS</th><th>Total</th><th>%</th><th>Grade</th></tr></thead>
                                <tbody>
                                    {marksData.map(m => (
                                        <tr key={m.rollNo}>
                                            <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>{m.rollNo}</td>
                                            <td style={{ fontWeight: 600 }}>{m.name}</td>
                                            {['math', 'science', 'english', 'hindi', 'social', 'cs'].map(field => (
                                                <td key={field}>
                                                    <input style={{ width: '45px', padding: '4px', border: '1px solid var(--border)', borderRadius: '6px', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}
                                                        value={m[field]} onChange={e => updateMark(m.rollNo, field, e.target.value)} />
                                                </td>
                                            ))}
                                            <td style={{ fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{m.total}</td>
                                            <td style={{ fontFamily: "'JetBrains Mono', monospace", color: parseInt(m.percent) >= 80 ? 'var(--sage)' : 'var(--muted)' }}>{m.percent}</td>
                                            <td><span style={{ fontSize: '16px', fontWeight: 700, color: parseInt(m.percent) >= 80 ? 'var(--sage)' : parseInt(m.percent) >= 70 ? 'var(--slate)' : 'var(--rust)' }}>{m.grade}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Examinations;
