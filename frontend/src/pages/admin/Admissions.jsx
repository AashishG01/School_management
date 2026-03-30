import { useState } from 'react';
import { admissions as initialAdmissions } from '../../data/students';
import { useToast } from '../../components/ui/Toast';

const Admissions = () => {
    const toast = useToast();
    const [admissionList, setAdmissionList] = useState(initialAdmissions);

    const handleApprove = (id) => {
        setAdmissionList(prev => prev.map(a => a.id === id ? { ...a, status: 'approved' } : a));
        const adm = admissionList.find(a => a.id === id);
        toast(`Admission approved for ${adm?.studentName}`, 'success');
    };

    const handleReject = (id) => {
        setAdmissionList(prev => prev.map(a => a.id === id ? { ...a, status: 'rejected' } : a));
        const adm = admissionList.find(a => a.id === id);
        toast(`Admission rejected for ${adm?.studentName}`, 'error');
    };

    const approved = admissionList.filter(a => a.status === 'approved').length;
    const pending = admissionList.filter(a => a.status === 'pending').length;
    const rejected = admissionList.filter(a => a.status === 'rejected').length;

    return (
        <>
            <div className="page-header">
                <h2>Admission Requests</h2>
                <button className="btn btn-primary">➕ New Admission</button>
            </div>

            <div className="stats-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="stat-card gold"><div className="stat-accent"></div><span className="stat-icon">📝</span>
                    <div className="stat-value">{admissionList.length}</div><div className="stat-label">Total Requests</div></div>
                <div className="stat-card sage"><div className="stat-accent"></div><span className="stat-icon">✅</span>
                    <div className="stat-value">{approved}</div><div className="stat-label">Approved</div></div>
                <div className="stat-card slate"><div className="stat-accent"></div><span className="stat-icon">⏳</span>
                    <div className="stat-value">{pending}</div><div className="stat-label">Pending</div></div>
                <div className="stat-card rust"><div className="stat-accent"></div><span className="stat-icon">❌</span>
                    <div className="stat-value">{rejected}</div><div className="stat-label">Rejected</div></div>
            </div>

            <div className="card">
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr><th>ID</th><th>Student Name</th><th>Class</th><th>Parent</th><th>Date</th><th>Documents</th><th>Status</th><th>Actions</th></tr>
                        </thead>
                        <tbody>
                            {admissionList.map(a => (
                                <tr key={a.id}>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{a.id}</td>
                                    <td style={{ fontWeight: 600 }}>{a.studentName}</td>
                                    <td>{a.class}{a.section}</td>
                                    <td style={{ fontSize: '12px' }}>{a.parentName}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{a.date}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                            {a.documents.map((d, i) => (
                                                <span key={i} style={{ fontSize: '9px', padding: '2px 6px', borderRadius: '999px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'JetBrains Mono', monospace" }}>{d}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td><span className={`status-chip ${a.status}`}>{a.status.charAt(0).toUpperCase() + a.status.slice(1)}</span></td>
                                    <td>
                                        {a.status === 'pending' ? (
                                            <div style={{ display: 'flex', gap: '6px' }}>
                                                <button className="btn btn-primary" style={{ padding: '4px 10px', fontSize: '11px' }} onClick={(e) => { e.stopPropagation(); handleApprove(a.id); }}>✓ Approve</button>
                                                <button className="btn btn-secondary" style={{ padding: '4px 10px', fontSize: '11px' }} onClick={(e) => { e.stopPropagation(); handleReject(a.id); }}>✕ Reject</button>
                                            </div>
                                        ) : (
                                            <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>—</span>
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
