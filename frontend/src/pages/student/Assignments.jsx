import { useState } from 'react';
import { assignments as initialAssignments } from '../../data/assignments';
import { useToast } from '../../components/ui/Toast';

const StudentAssignments = () => {
    const toast = useToast();
    const [assignmentList, setAssignmentList] = useState(
        initialAssignments.filter(a => a.class === '9A').map(a => ({
            ...a,
            submitted: a.status === 'completed',
        }))
    );

    const handleSubmit = (id) => {
        setAssignmentList(prev => prev.map(a => a.id === id ? { ...a, submitted: true } : a));
        const asg = assignmentList.find(a => a.id === id);
        toast(`"${asg?.title}" submitted successfully!`, 'success');
    };

    const pendingCount = assignmentList.filter(a => !a.submitted).length;
    const completedCount = assignmentList.filter(a => a.submitted).length;

    return (
        <>
            <div className="page-header">
                <h2>My Assignments</h2>
            </div>

            <div className="stats-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div className="stat-card gold" style={{ padding: '16px 20px' }}><div className="stat-value" style={{ fontSize: '24px' }}>{assignmentList.length}</div><div className="stat-label">Total</div></div>
                <div className="stat-card rust" style={{ padding: '16px 20px' }}><div className="stat-value" style={{ fontSize: '24px' }}>{pendingCount}</div><div className="stat-label">Pending</div></div>
                <div className="stat-card sage" style={{ padding: '16px 20px' }}><div className="stat-value" style={{ fontSize: '24px' }}>{completedCount}</div><div className="stat-label">Submitted</div></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {assignmentList.map(a => (
                    <div className="card" key={a.id} style={{ borderLeft: `4px solid ${a.submitted ? 'var(--sage)' : 'var(--rust)'}` }}>
                        <div className="card-body" style={{ padding: '20px 24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{a.title}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{a.subject} · {a.teacher}</div>
                                </div>
                                <span className={`status-chip ${a.submitted ? 'paid' : 'due'}`}>
                                    {a.submitted ? 'Submitted' : 'Pending'}
                                </span>
                            </div>
                            <p style={{ fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '14px' }}>
                                {a.description}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)' }}>
                                    📅 Deadline: {a.deadline}
                                </span>
                                {!a.submitted && (
                                    <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }} onClick={() => handleSubmit(a.id)}>
                                        📤 Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default StudentAssignments;
