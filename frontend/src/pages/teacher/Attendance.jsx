import { useState } from 'react';
import { classAttendanceForMarking } from '../../data/attendance';

const Attendance = () => {
    const [selectedClass, setSelectedClass] = useState('9A');
    const [attendanceData, setAttendanceData] = useState(
        classAttendanceForMarking.map(s => ({ ...s, status: null }))
    );
    const [saved, setSaved] = useState(false);

    const markStudent = (rollNo, status) => {
        setAttendanceData(prev => prev.map(s =>
            s.rollNo === rollNo ? { ...s, status: s.status === status ? null : status } : s
        ));
        setSaved(false);
    };

    const markAll = (status) => {
        setAttendanceData(prev => prev.map(s => ({ ...s, status })));
        setSaved(false);
    };

    const markedCount = attendanceData.filter(s => s.status).length;
    const presentCount = attendanceData.filter(s => s.status === 'present').length;
    const absentCount = attendanceData.filter(s => s.status === 'absent').length;

    return (
        <>
            <div className="page-header">
                <h2>Mark Attendance</h2>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <select className="filter-select" value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
                        <option value="9A">Class 9A</option>
                        <option value="10B">Class 10B</option>
                        <option value="8C">Class 8C</option>
                        <option value="7A">Class 7A</option>
                    </select>
                    <span style={{ fontSize: '12px', fontFamily: "'DM Mono', monospace", color: 'var(--muted)' }}>
                        {new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="stats-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="stat-card sage" style={{ padding: '16px 20px' }}>
                    <div className="stat-value" style={{ fontSize: '24px' }}>{presentCount}</div>
                    <div className="stat-label">Present</div>
                </div>
                <div className="stat-card rust" style={{ padding: '16px 20px' }}>
                    <div className="stat-value" style={{ fontSize: '24px' }}>{absentCount}</div>
                    <div className="stat-label">Absent</div>
                </div>
                <div className="stat-card gold" style={{ padding: '16px 20px' }}>
                    <div className="stat-value" style={{ fontSize: '24px' }}>{attendanceData.filter(s => s.status === 'late').length}</div>
                    <div className="stat-label">Late</div>
                </div>
                <div className="stat-card slate" style={{ padding: '16px 20px' }}>
                    <div className="stat-value" style={{ fontSize: '24px' }}>{markedCount}/{attendanceData.length}</div>
                    <div className="stat-label">Marked</div>
                </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button className="btn btn-secondary" onClick={() => markAll('present')}>✅ Mark All Present</button>
                <button className="btn btn-secondary" onClick={() => markAll(null)}>🔄 Reset All</button>
                <div style={{ flex: 1 }}></div>
                <button
                    className="btn btn-primary"
                    onClick={() => setSaved(true)}
                    disabled={markedCount < attendanceData.length}
                    style={{ opacity: markedCount < attendanceData.length ? 0.5 : 1 }}
                >
                    {saved ? '✓ Saved!' : '💾 Save Attendance'}
                </button>
            </div>

            {/* Attendance Grid */}
            <div className="attendance-grid">
                {attendanceData.map(s => (
                    <div className={`attendance-student ${s.status ? `marked-${s.status}` : ''}`} key={s.rollNo}>
                        <div className="att-student-name">{s.name}</div>
                        <div className="att-student-roll">Roll #{s.rollNo}</div>
                        <div className="att-buttons">
                            <button
                                className={`att-btn ${s.status === 'present' ? 'active-present' : ''}`}
                                onClick={() => markStudent(s.rollNo, 'present')}
                            >P</button>
                            <button
                                className={`att-btn ${s.status === 'absent' ? 'active-absent' : ''}`}
                                onClick={() => markStudent(s.rollNo, 'absent')}
                            >A</button>
                            <button
                                className={`att-btn ${s.status === 'late' ? 'active-late' : ''}`}
                                onClick={() => markStudent(s.rollNo, 'late')}
                            >L</button>
                            <button
                                className={`att-btn ${s.status === 'excused' ? 'active-excused' : ''}`}
                                onClick={() => markStudent(s.rollNo, 'excused')}
                            >E</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Attendance;
