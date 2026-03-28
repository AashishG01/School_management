import { studentAttendanceHistory, monthlyAttendance } from '../../data/attendance';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const ParentAttendance = () => {
    const present = studentAttendanceHistory.filter(d => d.status === 'Present').length;
    const total = studentAttendanceHistory.length;

    return (
        <>
            <div className="child-hero" style={{ padding: '20px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div className="child-hero-name" style={{ fontSize: '20px' }}>Aryan Patel — Attendance</div>
                        <div className="child-hero-meta">Class 9A · Academic Year 2025-26</div>
                    </div>
                    <div className="child-stat-val">{Math.round((present / total) * 100)}%</div>
                </div>
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card-header"><div className="card-title">Monthly Trend</div></div>
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={monthlyAttendance}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }} />
                                <YAxis domain={[80, 100]} tick={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }} tickFormatter={v => `${v}%`} />
                                <Tooltip formatter={v => [`${v}%`, 'Rate']} />
                                <Bar dataKey="rate" fill="var(--sage)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header"><div className="card-title">Recent Days</div></div>
                    <div className="card-body">
                        {studentAttendanceHistory.map((d, i) => (
                            <div className="student-row" key={i}>
                                <div style={{ fontSize: '13px', fontFamily: "'DM Mono', monospace", color: 'var(--muted)', flex: 1 }}>{d.date}</div>
                                <span className={`status-chip ${d.status.toLowerCase()}`}>{d.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParentAttendance;
