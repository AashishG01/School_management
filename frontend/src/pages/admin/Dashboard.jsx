import { weeklyAttendance } from '../../data/attendance';
import { feeCollection } from '../../data/fees';
import { recentAdmissions } from '../../data/students';

const AdminDashboard = () => {
    return (
        <>
            {/* Stats Row */}
            <div className="stats-row">
                <div className="stat-card gold">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">🎓</span>
                    <div className="stat-value">1,247</div>
                    <div className="stat-label">Total Students</div>
                    <div className="stat-delta delta-up">↑ 34 this term</div>
                </div>
                <div className="stat-card sage">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">👩‍🏫</span>
                    <div className="stat-value">68</div>
                    <div className="stat-label">Active Teachers</div>
                    <div className="stat-delta delta-up">↑ 3 new hires</div>
                </div>
                <div className="stat-card slate">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">✅</span>
                    <div className="stat-value">91.4%</div>
                    <div className="stat-label">Today's Attendance</div>
                    <div className="stat-delta delta-down">↓ 2.1% vs yesterday</div>
                </div>
                <div className="stat-card rust">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">💰</span>
                    <div className="stat-value">₹8.2L</div>
                    <div className="stat-label">Fees Collected (Mar)</div>
                    <div className="stat-delta delta-up">↑ ₹1.1L vs Feb</div>
                </div>
            </div>

            {/* Attendance Chart + Quick Actions */}
            <div className="grid-3">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Attendance This Week</div>
                        <span className="card-action">Full report →</span>
                    </div>
                    <div className="card-body">
                        <div className="att-chart">
                            {weeklyAttendance.map((d) => (
                                <div className="att-bar-wrap" key={d.day}>
                                    <div className="att-bar present" style={{ height: `${d.present}%` }}></div>
                                    <div className="att-bar-label">{d.day}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--muted)' }}>
                                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--sage)', display: 'block' }}></span>
                                Present
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Quick Actions</div>
                    </div>
                    <div className="card-body">
                        <div className="actions-grid">
                            <div className="action-btn">
                                <span className="action-icon">➕</span>
                                <span className="action-label">Add Student</span>
                                <span className="action-desc">New enrollment</span>
                            </div>
                            <div className="action-btn">
                                <span className="action-icon">📣</span>
                                <span className="action-label">Broadcast</span>
                                <span className="action-desc">Send announcement</span>
                            </div>
                            <div className="action-btn">
                                <span className="action-icon">📄</span>
                                <span className="action-label">Report Cards</span>
                                <span className="action-desc">Generate all</span>
                            </div>
                            <div className="action-btn">
                                <span className="action-icon">💳</span>
                                <span className="action-label">Fee Reminder</span>
                                <span className="action-desc">Send overdue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Admissions + Fee Collection */}
            <div className="grid-2">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Recent Admissions</div>
                        <span className="card-action">View all →</span>
                    </div>
                    <div className="card-body">
                        {recentAdmissions.map((s, i) => (
                            <div className="student-row" key={i}>
                                <div className="student-ava">{s.name[0]}</div>
                                <div className="student-info">
                                    <div className="student-name">{s.name}</div>
                                    <div className="student-meta">{s.class} · {s.time}</div>
                                </div>
                                <span className={`status-chip ${s.status}`}>
                                    {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Fee Collection</div>
                        <span className="card-action">Full report →</span>
                    </div>
                    <div className="card-body">
                        {feeCollection.map((f, i) => (
                            <div className="fee-row" key={i}>
                                <div className="fee-row-top">
                                    <span className="fee-name">{f.type}</span>
                                    <span className="fee-amount">₹{(f.collected / 1000).toFixed(0)}K / ₹{(f.total / 1000).toFixed(0)}K</span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className={`progress-fill ${f.percent < 60 ? 'low' : f.percent < 80 ? 'partial' : ''}`}
                                        style={{ width: `${f.percent}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
