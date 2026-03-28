import { assignments } from '../../data/assignments';

const StudentAssignments = () => {
    const myAssignments = assignments.filter(a => a.class === '9A');

    return (
        <>
            <div className="page-header"><h2>My Assignments</h2></div>

            <div className="stats-row-3" style={{ marginBottom: '24px' }}>
                <div className="stat-card rust" style={{ padding: '16px 20px' }}>
                    <div className="stat-value" style={{ fontSize: '24px' }}>{myAssignments.filter(a => a.status === 'active').length}</div>
                    <div className="stat-label">Pending</div>
                </div>
                <div className="stat-card sage" style={{ padding: '16px 20px' }}>
                    <div className="stat-value" style={{ fontSize: '24px' }}>{myAssignments.filter(a => a.status === 'completed').length}</div>
                    <div className="stat-label">Completed</div>
                </div>
                <div className="stat-card gold" style={{ padding: '16px 20px' }}>
                    <div className="stat-value" style={{ fontSize: '24px' }}>{myAssignments.length}</div>
                    <div className="stat-label">Total</div>
                </div>
            </div>

            {myAssignments.map(a => (
                <div className="card" key={a.id} style={{ marginBottom: '16px' }}>
                    <div className="card-body" style={{ paddingTop: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                            <div>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>{a.title}</div>
                                <div style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: "'DM Mono', monospace" }}>
                                    {a.subject} · {a.teacher}
                                </div>
                            </div>
                            <span className={`status-chip ${a.status === 'completed' ? 'paid' : 'due'}`}>
                                {a.status === 'completed' ? 'Submitted' : 'Pending'}
                            </span>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '12px' }}>{a.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '11px', fontFamily: "'DM Mono', monospace", color: 'var(--muted)' }}>
                                Due: {a.deadline}
                            </span>
                            {a.status === 'active' && (
                                <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }}>
                                    📤 Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default StudentAssignments;
