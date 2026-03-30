import { useState } from 'react';
import { payroll as initialPayroll } from '../../data/teachers';
import { useToast } from '../../components/ui/Toast';

const Payroll = () => {
    const toast = useToast();
    const [payrollData, setPayrollData] = useState(initialPayroll);
    const [selectedMonth, setSelectedMonth] = useState('March 2026');

    const totalNet = payrollData.reduce((a, p) => a + p.net, 0);
    const totalPaid = payrollData.filter(p => p.status === 'paid').reduce((a, p) => a + p.net, 0);
    const totalPending = payrollData.filter(p => p.status === 'pending').reduce((a, p) => a + p.net, 0);

    const handleProcessSalary = (teacherId) => {
        setPayrollData(prev => prev.map(p => p.teacherId === teacherId ? { ...p, status: 'paid' } : p));
        const teacher = payrollData.find(p => p.teacherId === teacherId);
        toast(`Salary of ₹${teacher?.net.toLocaleString()} processed for ${teacher?.name}`, 'success');
    };

    const handleProcessAll = () => {
        const pendingCount = payrollData.filter(p => p.status === 'pending').length;
        if (pendingCount === 0) {
            toast('All salaries already processed!', 'info');
            return;
        }
        setPayrollData(prev => prev.map(p => ({ ...p, status: 'paid' })));
        toast(`Processed ${pendingCount} pending salaries!`, 'success');
    };

    return (
        <>
            <div className="page-header">
                <h2>Staff Payroll</h2>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <select className="filter-select" value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
                        <option>March 2026</option><option>February 2026</option><option>January 2026</option>
                    </select>
                    <button className="btn btn-primary" onClick={handleProcessAll}>💰 Process All Pending</button>
                </div>
            </div>

            <div className="stats-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="stat-card gold"><div className="stat-accent"></div><span className="stat-icon">💰</span>
                    <div className="stat-value">₹{(totalNet / 100000).toFixed(1)}L</div><div className="stat-label">Total Payroll</div></div>
                <div className="stat-card sage"><div className="stat-accent"></div><span className="stat-icon">✅</span>
                    <div className="stat-value">₹{(totalPaid / 100000).toFixed(1)}L</div><div className="stat-label">Paid</div></div>
                <div className="stat-card rust"><div className="stat-accent"></div><span className="stat-icon">⏳</span>
                    <div className="stat-value">₹{(totalPending / 1000).toFixed(0)}K</div><div className="stat-label">Pending</div></div>
                <div className="stat-card slate"><div className="stat-accent"></div><span className="stat-icon">👩‍🏫</span>
                    <div className="stat-value">{payrollData.length}</div><div className="stat-label">Staff Members</div></div>
            </div>

            <div className="card">
                <div className="card-header">
                    <div className="card-title">Salary Breakdown — {selectedMonth}</div>
                </div>
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr><th>ID</th><th>Teacher</th><th>Basic</th><th>HRA</th><th>TA</th><th>Deductions</th><th>Net Salary</th><th>Status</th><th>Action</th></tr>
                        </thead>
                        <tbody>
                            {payrollData.map(p => (
                                <tr key={p.teacherId}>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{p.teacherId}</td>
                                    <td style={{ fontWeight: 600 }}>{p.name}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>₹{p.basic.toLocaleString()}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>₹{p.hra.toLocaleString()}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>₹{p.ta.toLocaleString()}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--rust)' }}>-₹{p.deductions.toLocaleString()}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>₹{p.net.toLocaleString()}</td>
                                    <td><span className={`status-chip ${p.status}`}>{p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span></td>
                                    <td>
                                        {p.status === 'pending' ? (
                                            <button className="btn btn-primary" style={{ padding: '4px 12px', fontSize: '11px' }} onClick={(e) => { e.stopPropagation(); handleProcessSalary(p.teacherId); }}>
                                                Process
                                            </button>
                                        ) : (
                                            <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>Processed ✓</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr style={{ fontWeight: 700 }}>
                                <td colSpan={6}>Total</td>
                                <td style={{ fontFamily: "'JetBrains Mono', monospace" }}>₹{totalNet.toLocaleString()}</td>
                                <td colSpan={2}></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Payroll;
