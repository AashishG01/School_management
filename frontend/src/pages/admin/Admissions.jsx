import { admissions } from '../../data/students';

const Admissions = () => {
    return (
        <>
            <div className="page-header">
                <h2>Admission Requests</h2>
                <button className="btn btn-primary">➕ New Admission</button>
            </div>

            <div className="stats-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="stat-card gold">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">📝</span>
                    <div className="stat-value">5</div>
                    <div className="stat-label">Total Requests</div>
                </div>
                <div className="stat-card sage">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">✅</span>
                    <div className="stat-value">2</div>
                    <div className="stat-label">Approved</div>
                </div>
                <div className="stat-card slate">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">⏳</span>
                    <div className="stat-value">2</div>
                    <div className="stat-label">Pending</div>
                </div>
                <div className="stat-card rust">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">❌</span>
                    <div className="stat-value">1</div>
                    <div className="stat-label">Rejected</div>
                </div>
            </div>

            <div className="card">
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Parent</th>
                                <th>Date</th>
                                <th>Documents</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admissions.map(a => (
                                <tr key={a.id}>
                                    <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{a.id}</td>
                                    <td style={{ fontWeight: 600 }}>{a.studentName}</td>
                                    <td>{a.class}{a.section}</td>
                                    <td style={{ fontSize: '12px' }}>{a.parentName}</td>
                                    <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{a.date}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                            {a.documents.map((d, i) => (
                                                <span key={i} style={{ fontSize: '9px', padding: '2px 6px', borderRadius: '999px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'DM Mono', monospace" }}>
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-chip ${a.status}`}>
                                            {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                                        </span>
                                    </td>
                                    <td>
                                        {a.status === 'pending' && (
                                            <div style={{ display: 'flex', gap: '6px' }}>
                                                <button className="btn btn-primary" style={{ padding: '4px 10px', fontSize: '11px' }}>✓</button>
                                                <button className="btn btn-secondary" style={{ padding: '4px 10px', fontSize: '11px' }}>✕</button>
                                            </div>
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

export default Admissions;
