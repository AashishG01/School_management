import { studentSchedule } from '../../data/timetable';
import { studentResults } from '../../data/exams';

const StudentDashboard = () => {
    return (
        <>
            <div className="stats-row-3">
                <div className="stat-card rust">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">📝</span>
                    <div className="stat-value">3</div>
                    <div className="stat-label">Pending Tasks</div>
                    <div className="stat-delta" style={{ color: 'var(--muted)' }}>Due this week</div>
                </div>
                <div className="stat-card sage">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">✅</span>
                    <div className="stat-value">91%</div>
                    <div className="stat-label">Attendance</div>
                    <div className="stat-delta delta-up">↑ This term</div>
                </div>
                <div className="stat-card gold">
                    <div className="stat-accent"></div>
                    <span className="stat-icon">🏆</span>
                    <div className="stat-value">Rank 8</div>
                    <div className="stat-label">In Class</div>
                    <div className="stat-delta delta-up">↑ 3 spots</div>
                </div>
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Today's Classes</div>
                        <span className="card-action">Full timetable →</span>
                    </div>
                    <div className="card-body">
                        {studentSchedule.map((s, i) => (
                            <div className="schedule-item" key={i}>
                                <div className="schedule-time">{s.time}</div>
                                <div className="schedule-bar" style={{ background: s.color }}></div>
                                <div className="schedule-content">
                                    <div className="schedule-subject">{s.subject}</div>
                                    <div className="schedule-meta">{s.teacher}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="card" style={{ marginBottom: '20px' }}>
                        <div className="card-header">
                            <div className="card-title">My Grades</div>
                            <span className="card-action">Full report →</span>
                        </div>
                        <div className="card-body">
                            {studentResults.slice(0, 4).map((s, i) => (
                                <div className="subject-grade-row" key={i}>
                                    <div className="subject-color" style={{ background: s.color }}></div>
                                    <div className="subject-name-wrap">
                                        <div className="subject-name">{s.subject}</div>
                                        <div className="subject-teacher">{s.teacher}</div>
                                    </div>
                                    <div>
                                        <div className="grade-badge" style={{ color: s.color }}>{s.grade}</div>
                                        <div className="grade-percent">{Math.round((s.obtained / s.maxMarks) * 100)}%</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header"><div className="card-title">Pending Assignments</div></div>
                        <div className="card-body">
                            {[
                                { title: 'Math Chapter 5 Exercise', due: 'Due Mar 30' },
                                { title: 'Science Lab Report', due: 'Due Apr 2' },
                                { title: 'History Essay — WW2', due: 'Due Apr 5' },
                            ].map((a, i) => (
                                <div className="student-row" key={i}>
                                    <div className="student-info">
                                        <div className="student-name">{a.title}</div>
                                        <div className="student-meta">{a.due}</div>
                                    </div>
                                    <span className="status-chip due">Due</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;
