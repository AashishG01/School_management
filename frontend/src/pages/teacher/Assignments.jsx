import { useState } from 'react';
import { assignments } from '../../data/assignments';

const TeacherAssignments = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div className="page-header">
                <h2>Assignments</h2>
                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? '✕ Cancel' : '➕ New Assignment'}
                </button>
            </div>

            {showForm && (
                <div className="card" style={{ marginBottom: '24px' }}>
                    <div className="card-header"><div className="card-title">Create Assignment</div></div>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input className="form-input" placeholder="Assignment title" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <select className="form-input">
                                    <option>Mathematics</option><option>Algebra</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Class</label>
                                <select className="form-input">
                                    <option>9A</option><option>10B</option><option>8C</option><option>7A</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea className="form-input" rows={3} placeholder="Assignment instructions..." style={{ resize: 'vertical' }}></textarea>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Deadline</label>
                            <input className="form-input" type="date" />
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>📝 Create Assignment</button>
                    </div>
                </div>
            )}

            <div className="card">
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Subject</th>
                                <th>Class</th>
                                <th>Deadline</th>
                                <th>Submissions</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.filter(a => a.teacher === 'Mr. Mehta' || a.teacher === 'Ms. Singh' || a.teacher === 'Mrs. Rao' || a.teacher === 'Mr. D\'Costa' || a.teacher === 'Ms. Deshpande' || a.teacher === 'Mr. Menon' || a.teacher === 'Ms. Begum').map(a => (
                                <tr key={a.id}>
                                    <td>
                                        <div style={{ fontWeight: 600, fontSize: '13px' }}>{a.title}</div>
                                        <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{a.description.substring(0, 60)}...</div>
                                    </td>
                                    <td style={{ fontSize: '12px' }}>{a.subject}</td>
                                    <td>{a.class}</td>
                                    <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{a.deadline}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div className="progress-bar" style={{ width: '60px' }}>
                                                <div className="progress-fill" style={{ width: `${(a.submissions / a.total) * 100}%` }}></div>
                                            </div>
                                            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'var(--muted)' }}>
                                                {a.submissions}/{a.total}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-chip ${a.status === 'completed' ? 'paid' : a.status === 'active' ? 'pending' : 'due'}`}>
                                            {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                                        </span>
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

export default TeacherAssignments;
