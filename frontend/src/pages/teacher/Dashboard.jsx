import { teacherSchedule } from '../../data/timetable';

const TeacherDashboard = () => {
    return (
        <>
            <div className="stats-row-3">
                <div className="stat-card sage">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">🏫</span>
                    <div className="stat-value">4</div>
                    <div className="stat-label">Classes Today</div>
                    <div className="stat-delta" style={{ color: 'var(--muted)' }}>Next: 10:30 AM</div>
                </div>
                <div className="stat-card gold">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">✅</span>
                    <div className="stat-value">87%</div>
                    <div className="stat-label">Avg Attendance</div>
                    <div className="stat-delta delta-up">↑ My classes</div>
                </div>
                <div className="stat-card rust">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">📝</span>
                    <div className="stat-value">2</div>
                    <div className="stat-label">Assignments Due</div>
                    <div className="stat-delta" style={{ color: 'var(--muted)' }}>Needs grading</div>
                </div>
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Today's Schedule</div>
                        <span className="card-action">Full week →</span>
                    </div>
                    <div className="card-body">
                        {teacherSchedule.map((s, i) => (
                            <div className="schedule-item" key={i}>
                                <div className="schedule-time">{s.time}</div>
                                <div className="schedule-bar" style={{ background: s.color }}></div>
                                <div className="schedule-content">
                                    <div className="schedule-subject">{s.subject}</div>
                                    <div className="schedule-meta">{s.class} · {s.room}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="card" style={{ marginBottom: '20px' }}>
                        <div className="card-header">
                            <div className="card-title">My Classes</div>
                        </div>
                        <div className="card-body">
                            {[
                                { cls: '9A', info: 'Mathematics · 38 students', role: 'Class Teacher' },
                                { cls: '10B', info: 'Mathematics · 35 students', role: 'Subject Teacher' },
                                { cls: '8C', info: 'Algebra · 40 students', role: 'Subject Teacher' },
                            ].map((c, i) => (
                                <div className="class-card" key={i}>
                                    <div className="class-card-badge">{c.cls}</div>
                                    <div className="class-card-info">
                                        <div className="class-card-name">{c.info}</div>
                                        <div className="class-card-meta">{c.role}</div>
                                    </div>
                                    <span style={{ fontSize: '16px', color: 'var(--muted)' }}>›</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header"><div className="card-title">Pending Grades</div></div>
                        <div className="card-body">
                            {[
                                { title: 'Unit Test 2', cls: 'Class 9A', due: 'Due Mar 30' },
                                { title: 'Algebra HW', cls: 'Class 8C', due: 'Due Mar 28' },
                            ].map((g, i) => (
                                <div className="student-row" key={i}>
                                    <div style={{ flex: 1 }}>
                                        <div className="student-name">{g.title}</div>
                                        <div className="student-meta">{g.cls} · {g.due}</div>
                                    </div>
                                    <span className="status-chip late">Grade Now</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherDashboard;
