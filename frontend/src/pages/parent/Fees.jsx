import { parentFeeStatus } from '../../data/fees';
import { feeStructure } from '../../data/fees';

const ParentFees = () => {
    return (
        <>
            <div className="child-hero" style={{ padding: '20px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div className="child-hero-name" style={{ fontSize: '20px' }}>Aryan Patel — Fee Status</div>
                        <div className="child-hero-meta">Class 9A · Academic Year 2025-26</div>
                    </div>
                    <div>
                        <div className="child-stat-val">₹16,300</div>
                        <div className="child-stat-lbl">Total Paid</div>
                    </div>
                </div>
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card-header"><div className="card-title">Payment History</div></div>
                    <div className="card-body">
                        {parentFeeStatus.map((f, i) => (
                            <div className="student-row" key={i}>
                                <div className="student-info">
                                    <div className="student-name">{f.name}</div>
                                    <div className="student-meta">{f.amount}</div>
                                </div>
                                <span className={`status-chip ${f.status}`}>
                                    {f.status.charAt(0).toUpperCase() + f.status.slice(1)}
                                </span>
                            </div>
                        ))}
                        <div style={{ marginTop: '16px' }}>
                            <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                                💳 Pay Pending Fees
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header"><div className="card-title">Fee Structure</div></div>
                    <div className="card-body">
                        {feeStructure.map((f, i) => (
                            <div className="fee-row" key={i}>
                                <div className="fee-row-top">
                                    <span className="fee-name">{f.type}</span>
                                    <span className="fee-amount">₹{f.perTerm.toLocaleString()}/term</span>
                                </div>
                            </div>
                        ))}
                        <div style={{ marginTop: '8px', paddingTop: '12px', borderTop: '2px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 700 }}>Total per Term</span>
                            <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>₹{feeStructure.reduce((s, f) => s + f.perTerm, 0).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParentFees;
