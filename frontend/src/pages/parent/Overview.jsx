import { studentAttendanceHistory } from '../../data/attendance';
import { parentFeeStatus } from '../../data/fees';
import { announcements, announcementTypeColors } from '../../data/announcements';

const ParentOverview = () => {
    return (
        <>
            {/* Child Hero */}
            <div className="child-hero">
                <div className="child-hero-name">Aryan Patel</div>
                <div className="child-hero-meta">Class 9A · Roll No. 24 · Sec A</div>
                <div className="child-hero-stats">
                    <div>
                        <div className="child-stat-val">91%</div>
                        <div className="child-stat-lbl">Attendance</div>
                    </div>
                    <div>
                        <div className="child-stat-val">78%</div>
                        <div className="child-stat-lbl">Avg Score</div>
                    </div>
                    <div>
                        <div className="child-stat-val">Rank 8</div>
                        <div className="child-stat-lbl">In Class</div>
                    </div>
                </div>
            </div>

            <div className="grid-2">
                {/* Attendance */}
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Recent Attendance</div>
                        <span className="card-action">History →</span>
                    </div>
                    <div className="card-body">
                        {studentAttendanceHistory.map((d, i) => (
                            <div className="student-row" key={i}>
                                <div style={{ fontSize: '13px', fontFamily: "'DM Mono', monospace", color: 'var(--muted)', flex: 1 }}>{d.date}</div>
                                <span className={`status-chip ${d.status.toLowerCase()}`}>{d.status}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    {/* Fee Status */}
                    <div className="card" style={{ marginBottom: '20px' }}>
                        <div className="card-header"><div className="card-title">Fee Status</div></div>
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
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="card">
                        <div className="card-header"><div className="card-title">Announcements</div></div>
                        <div className="card-body">
                            {announcements.slice(0, 3).map((a) => (
                                <div className="announce-item" key={a.id}>
                                    <div className="announce-top">
                                        <div className="announce-dot" style={{ background: announcementTypeColors[a.type] }}></div>
                                        <div>
                                            <div className="announce-title">{a.title}</div>
                                            <div className="announce-time">{a.date}</div>
                                        </div>
                                    </div>
                                    <div className="announce-body">{a.body}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParentOverview;
