import { studentAttendanceHistory, monthlyAttendance } from '../../data/attendance';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const StudentAttendance = () => {
    const present = studentAttendanceHistory.filter(d => d.status === 'Present').length;
    const total = studentAttendanceHistory.length;

    return (
        <>
            <div className="page-header">
                <h2>Attendance History</h2>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'var(--sage)', fontWeight: 600 }}>
                    {Math.round((present / total) * 100)}% Overall
                </span>
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card-header"><div className="card-title">Monthly Trend</div></div>
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={monthlyAttendance}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }} />
                                <YAxis domain={[80, 100]} tick={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }} tickFormatter={v => `${v}%`} />
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
                                <div style={{ fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', flex: 1 }}>{d.date}</div>
                                <span className={`status-chip ${d.status.toLowerCase()}`}>{d.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentAttendance;
