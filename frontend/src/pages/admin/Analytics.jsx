import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { monthlyRevenue } from '../../data/fees';
import { monthlyAttendance } from '../../data/attendance';

const enrollmentTrend = [
    { year: '2021', students: 980 },
    { year: '2022', students: 1050 },
    { year: '2023', students: 1120 },
    { year: '2024', students: 1180 },
    { year: '2025', students: 1210 },
    { year: '2026', students: 1247 },
];

const genderDistribution = [
    { name: 'Boys', value: 672, color: '#3d5a73' },
    { name: 'Girls', value: 575, color: '#c9a84c' },
];

const classDistribution = [
    { class: 'Class 3', students: 62 },
    { class: 'Class 5', students: 99 },
    { class: 'Class 6', students: 70 },
    { class: 'Class 7', students: 74 },
    { class: 'Class 8', students: 114 },
    { class: 'Class 9', students: 110 },
    { class: 'Class 10', students: 71 },
];

const Analytics = () => {
    return (
        <>
            <div className="stats-row">
                <div className="stat-card gold">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">📈</span>
                    <div className="stat-value">1,247</div>
                    <div className="stat-label">Total Enrollment</div>
                    <div className="stat-delta delta-up">↑ 5.4% YoY</div>
                </div>
                <div className="stat-card sage">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">✅</span>
                    <div className="stat-value">91.4%</div>
                    <div className="stat-label">Avg Attendance</div>
                    <div className="stat-delta delta-up">↑ vs last year</div>
                </div>
                <div className="stat-card slate">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">🏆</span>
                    <div className="stat-value">78.5%</div>
                    <div className="stat-label">Pass Rate</div>
                </div>
                <div className="stat-card rust">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">💰</span>
                    <div className="stat-value">₹48.2L</div>
                    <div className="stat-label">Annual Revenue</div>
                    <div className="stat-delta delta-up">↑ ₹4.8L vs last year</div>
                </div>
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card-header"><div className="card-title">Enrollment Trend</div></div>
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={220}>
                            <LineChart data={enrollmentTrend}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }} />
                                <YAxis tick={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="students" stroke="var(--gold)" strokeWidth={2} dot={{ fill: 'var(--gold)', r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header"><div className="card-title">Monthly Revenue</div></div>
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
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card-header"><div className="card-title">Attendance Trend</div></div>
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={220}>
                            <LineChart data={monthlyAttendance}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }} />
                                <YAxis domain={[80, 100]} tick={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }} tickFormatter={v => `${v}%`} />
                                <Tooltip formatter={v => [`${v}%`, 'Rate']} />
                                <Line type="monotone" dataKey="rate" stroke="var(--sage)" strokeWidth={2} dot={{ fill: 'var(--sage)', r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header"><div className="card-title">Students by Class</div></div>
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={classDistribution}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="class" tick={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }} />
                                <YAxis tick={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }} />
                                <Tooltip />
                                <Bar dataKey="students" fill="var(--slate)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card-header"><div className="card-title">Gender Distribution</div></div>
                    <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie data={genderDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                                    {genderDistribution.map((entry, index) => (
                                        <Cell key={index} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header"><div className="card-title">Performance Summary</div></div>
                    <div className="card-body">
                        {[
                            { label: 'Above 90%', count: 187, pct: 15, color: 'var(--sage)' },
                            { label: '75% - 90%', count: 524, pct: 42, color: 'var(--gold)' },
                            { label: '60% - 75%', count: 387, pct: 31, color: 'var(--slate)' },
                            { label: 'Below 60%', count: 149, pct: 12, color: 'var(--rust)' },
                        ].map((item, i) => (
                            <div className="fee-row" key={i}>
                                <div className="fee-row-top">
                                    <span className="fee-name">{item.label}</span>
                                    <span className="fee-amount">{item.count} students ({item.pct}%)</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${item.pct}%`, background: item.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytics;
