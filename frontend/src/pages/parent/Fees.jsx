import { useState } from 'react';
import { parentFeeStatus as initialFees } from '../../data/fees';
import { useToast } from '../../components/ui/Toast';

const ParentFees = () => {
    const toast = useToast();
    const [feeStatus, setFeeStatus] = useState(initialFees);
    const [showPayModal, setShowPayModal] = useState(null);

    const pendingFees = feeStatus.filter(f => f.status === 'due' || f.status === 'pending');
    const paidFees = feeStatus.filter(f => f.status === 'paid');

    const handlePay = (feeName) => {
        setFeeStatus(prev => prev.map(f => f.name === feeName ? { ...f, status: 'paid' } : f));
        setShowPayModal(null);
        toast(`Payment successful for ${feeName}!`, 'success');
    };

    const paymentHistory = [
        { date: '2026-03-01', amount: '₹12,000', method: 'Online (UPI)', receipt: 'RCP-2026-101', fee: 'Tuition Fee — Term 2' },
        { date: '2026-02-15', amount: '₹3,500', method: 'Bank Transfer', receipt: 'RCP-2026-089', fee: 'Transport Fee' },
        { date: '2026-01-10', amount: '₹12,000', method: 'Online (UPI)', receipt: 'RCP-2026-045', fee: 'Tuition Fee — Term 1' },
    ];

    return (
        <>
            <div className="page-header">
                <h2>Fee Status & Payments</h2>
            </div>

            <div className="stats-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div className="stat-card sage"><div className="stat-accent"></div><span className="stat-icon">✅</span>
                    <div className="stat-value">{paidFees.length}</div><div className="stat-label">Paid</div></div>
                <div className="stat-card rust"><div className="stat-accent"></div><span className="stat-icon">⚠️</span>
                    <div className="stat-value">{pendingFees.length}</div><div className="stat-label">Pending</div></div>
                <div className="stat-card gold"><div className="stat-accent"></div><span className="stat-icon">💰</span>
                    <div className="stat-value">{feeStatus.length}</div><div className="stat-label">Total Items</div></div>
            </div>

            <div className="card" style={{ marginBottom: '24px' }}>
                <div className="card-header"><div className="card-title">Current Fee Status</div></div>
                <div className="card-body">
                    {feeStatus.map((f, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: i < feeStatus.length - 1 ? '1px solid var(--border)' : 'none' }}>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '13.5px' }}>{f.name}</div>
                                <div style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)' }}>{f.amount}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span className={`status-chip ${f.status}`}>{f.status === 'paid' ? 'Paid' : f.status === 'due' ? 'Due' : 'Pending'}</span>
                                {(f.status === 'due' || f.status === 'pending') && (
                                    <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }} onClick={() => setShowPayModal(f)}>
                                        💳 Pay Now
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card">
                <div className="card-header"><div className="card-title">Payment History</div></div>
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead><tr><th>Date</th><th>Fee</th><th>Amount</th><th>Method</th><th>Receipt</th></tr></thead>
                        <tbody>
                            {paymentHistory.map((p, i) => (
                                <tr key={i}>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{p.date}</td>
                                    <td style={{ fontWeight: 600 }}>{p.fee}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace" }}>{p.amount}</td>
                                    <td style={{ fontSize: '12px' }}>{p.method}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--sage)', cursor: 'pointer' }}>{p.receipt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Payment Modal */}
            {showPayModal && (
                <div className="modal-overlay" onClick={() => setShowPayModal(null)}>
                    <div className="modal" style={{ maxWidth: '420px' }} onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className="modal-title">Confirm Payment</div>
                            <button className="modal-close" onClick={() => setShowPayModal(null)}>✕</button>
                        </div>
                        <div className="modal-body">
                            <div className="payment-modal-hero">
                                <div className="payment-amount">{showPayModal.amount}</div>
                                <div className="payment-label">{showPayModal.name}</div>
                            </div>
                            <div className="form-group"><label className="form-label">Payment Method</label>
                                <select className="form-input">
                                    <option>UPI — Pay via PhonePe/GooglePay</option>
                                    <option>Credit/Debit Card</option>
                                    <option>Net Banking</option>
                                </select>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }} onClick={() => handlePay(showPayModal.name)}>
                                ✓ Confirm & Pay {showPayModal.amount}
                            </button>
                            <p style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'center', marginTop: '12px' }}>
                                🔒 Secure payment powered by Razorpay
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ParentFees;
