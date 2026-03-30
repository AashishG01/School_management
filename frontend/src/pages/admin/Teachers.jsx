import { useState } from 'react';
import { teachers } from '../../data/teachers';

const Teachers = () => {
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    return (
        <>
            <div className="page-header">
                <h2>Teaching Staff</h2>
                <button className="btn btn-primary">➕ Add Teacher</button>
            </div>

            <div className="card">
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr><th>ID</th><th>Teacher</th><th>Subjects</th><th>Classes</th><th>Qualification</th><th>Class Teacher</th><th>Contact</th></tr>
                        </thead>
                        <tbody>
                            {teachers.map(t => (
                                <tr key={t.id} onClick={() => setSelectedTeacher(t)}>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{t.id}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(74,124,89,0.1)', display: 'grid', placeItems: 'center', fontSize: '14px', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--sage)', flexShrink: 0 }}>
                                                {t.name[0]}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '13px' }}>{t.name}</div>
                                                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                            {t.subjects.map((s, i) => (
                                                <span key={i} style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,124,89,0.08)', color: 'var(--sage)', fontFamily: "'JetBrains Mono', monospace" }}>{s}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)' }}>
                                        {t.classes.slice(0, 3).join(', ')}{t.classes.length > 3 ? ` +${t.classes.length - 3}` : ''}
                                    </td>
                                    <td style={{ fontSize: '11px', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.qualification}</td>
                                    <td>
                                        {t.classTeacher ? (<span className="status-chip paid">{t.classTeacher}</span>) : (<span style={{ fontSize: '12px', color: 'var(--muted)' }}>—</span>)}
                                    </td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)' }}>{t.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Teacher Profile Modal */}
            {selectedTeacher && (
                <div className="modal-overlay" onClick={() => setSelectedTeacher(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className="modal-title">Teacher Profile</div>
                            <button className="modal-close" onClick={() => setSelectedTeacher(null)}>✕</button>
                        </div>
                        <div className="modal-body">
                            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(74,124,89,0.1)', border: '2px solid var(--border)', display: 'grid', placeItems: 'center', fontSize: '24px', fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--sage)', margin: '0 auto 12px' }}>
                                    {selectedTeacher.name[0]}
                                </div>
                                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px' }}>{selectedTeacher.name}</h3>
                                <p style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                                    {selectedTeacher.id} · {selectedTeacher.email}
                                </p>
                            </div>
                            <div className="form-row">
                                <div className="form-group"><label className="form-label">Qualification</label><div className="form-input" style={{ background: 'var(--paper)' }}>{selectedTeacher.qualification}</div></div>
                                <div className="form-group"><label className="form-label">Joining Date</label><div className="form-input" style={{ background: 'var(--paper)' }}>{selectedTeacher.joiningDate}</div></div>
                            </div>
                            <div className="form-group"><label className="form-label">Phone</label><div className="form-input" style={{ background: 'var(--paper)' }}>{selectedTeacher.phone}</div></div>
                            <div className="form-group"><label className="form-label">Subjects</label>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {selectedTeacher.subjects.map((s, i) => (
                                        <span key={i} style={{ padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,124,89,0.08)', color: 'var(--sage)', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="form-group"><label className="form-label">Assigned Classes</label>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {selectedTeacher.classes.map((c, i) => (
                                        <span key={i} style={{ padding: '4px 12px', borderRadius: '999px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>{c}</span>
                                    ))}
                                </div>
                            </div>
                            {selectedTeacher.classTeacher && (
                                <div className="form-group"><label className="form-label">Class Teacher Of</label>
                                    <div className="form-input" style={{ background: 'var(--paper)', color: 'var(--sage)', fontWeight: 600 }}>Class {selectedTeacher.classTeacher}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Teachers;
