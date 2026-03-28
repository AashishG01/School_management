import { useState } from 'react';
import { feeCollection, feePayments, feeStructure, monthlyRevenue } from '../../data/fees';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Fees = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <>
            <div className="tabs">
                <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
                <button className={`tab ${activeTab === 'payments' ? 'active' : ''}`} onClick={() => setActiveTab('payments')}>Payments</button>
                <button className={`tab ${activeTab === 'structure' ? 'active' : ''}`} onClick={() => setActiveTab('structure')}>Fee Structure</button>
            </div>

            {activeTab === 'overview' && (
                <>
                    <div className="stats-row">
                        <div className="stat-card gold">
                            <div className="stat-accent"></div>
                            <span className="stat-icon">💰</span>
                            <div className="stat-value">₹8.2L</div>
                            <div className="stat-label">Total Collected</div>
                            <div className="stat-delta delta-up">↑ March 2026</div>
                        </div>
                        <div className="stat-card rust">
                            <div className="stat-accent"></div>
                            <span className="stat-icon">⏳</span>
                            <div className="stat-value">₹2.5L</div>
                            <div className="stat-label">Pending Dues</div>
                            <div className="stat-delta delta-down">32 students</div>
                        </div>
                        <div className="stat-card sage">
                            <div className="stat-accent"></div>
                            <span className="stat-icon">✅</span>
                            <div className="stat-value">78%</div>
                            <div className="stat-label">Collection Rate</div>
                        </div>
                        <div className="stat-card slate">
                            <div className="stat-accent"></div>
                            <span className="stat-icon">📊</span>
                            <div className="stat-value">₹10.5L</div>
                            <div className="stat-label">Total Expected</div>
                        </div>
                    </div>

                    <div className="grid-2">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">Monthly Revenue</div>
                            </div>
                            <div className="card-body">
                                <ResponsiveContainer width="100%" height={220}>
                                    <BarChart data={monthlyRevenue}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                        <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }} />
                                        <YAxis tick={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }} tickFormatter={v => `₹${(v / 1000).toFixed(0)}K`} />
                                        <Tooltip formatter={(v) => [`₹${v.toLocaleString()}`, 'Revenue']} />
                                        <Bar dataKey="revenue" fill="var(--sage)" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">Collection by Type</div>
                            </div>
                            <div className="card-body">
                                {feeCollection.map((f, i) => (
                                    <div className="fee-row" key={i}>
                                        <div className="fee-row-top">
                                            <span className="fee-name">{f.type}</span>
                                            <span className="fee-amount">₹{(f.collected / 1000).toFixed(0)}K / ₹{(f.total / 1000).toFixed(0)}K</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div className={`progress-fill ${f.percent < 60 ? 'low' : f.percent < 80 ? 'partial' : ''}`} style={{ width: `${f.percent}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'payments' && (
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Payment Records</div>
                    </div>
                    <div className="data-table-wrap">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Receipt</th>
                                    <th>Student</th>
                                    <th>Class</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Method</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feePayments.map(p => (
                                    <tr key={p.id}>
                                        <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{p.receipt || '—'}</td>
                                        <td style={{ fontWeight: 600 }}>{p.studentName}</td>
                                        <td>{p.class}</td>
                                        <td style={{ fontSize: '12px' }}>{p.type}</td>
                                        <td style={{ fontFamily: "'DM Mono', monospace" }}>₹{p.amount.toLocaleString()}</td>
                                        <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{p.date}</td>
                                        <td style={{ fontSize: '12px' }}>{p.method}</td>
                                        <td><span className={`status-chip ${p.status}`}>{p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'structure' && (
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Fee Structure (2025-26)</div>
                        <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: '12px' }}>Edit Structure</button>
                    </div>
                    <div className="data-table-wrap">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Fee Type</th>
                                    <th>Annual Amount</th>
                                    <th>Per Term</th>
                                    <th>Frequency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feeStructure.map((f, i) => (
                                    <tr key={i}>
                                        <td style={{ fontWeight: 600 }}>{f.type}</td>
                                        <td style={{ fontFamily: "'DM Mono', monospace" }}>₹{f.amount.toLocaleString()}</td>
                                        <td style={{ fontFamily: "'DM Mono', monospace" }}>₹{f.perTerm.toLocaleString()}</td>
                                        <td style={{ fontSize: '12px', color: 'var(--muted)' }}>{f.frequency}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr style={{ fontWeight: 700 }}>
                                    <td>Total</td>
                                    <td style={{ fontFamily: "'DM Mono', monospace" }}>₹{feeStructure.reduce((s, f) => s + f.amount, 0).toLocaleString()}</td>
                                    <td style={{ fontFamily: "'DM Mono', monospace" }}>₹{feeStructure.reduce((s, f) => s + f.perTerm, 0).toLocaleString()}</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default Fees;
