import { students } from '../../data/students';

const TeacherClasses = () => {
    const myClasses = [
        { cls: '9A', subject: 'Mathematics', role: 'Class Teacher', students: students.filter(s => s.class === '9' && s.section === 'A') },
        { cls: '10B', subject: 'Mathematics', role: 'Subject Teacher', students: students.filter(s => s.class === '10' && s.section === 'B') },
        { cls: '8C', subject: 'Algebra', role: 'Subject Teacher', students: students.filter(s => s.class === '8' && s.section === 'C') },
        { cls: '7A', subject: 'Mathematics', role: 'Subject Teacher', students: students.filter(s => s.class === '7' && s.section === 'A') },
    ];

    return (
        <>
            <div className="page-header"><h2>My Classes</h2></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                {myClasses.map((c, i) => (
                    <div className="card" key={i}>
                        <div className="card-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div className="class-card-badge">{c.cls}</div>
                                <div>
                                    <div className="card-title">Class {c.cls}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                                        {c.subject} · {c.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                                <div style={{ flex: 1, textAlign: 'center', padding: '12px', background: 'var(--paper)', borderRadius: '10px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--sage)' }}>
                                        {c.students.length || '38'}
                                    </div>
                                    <div style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Students</div>
                                </div>
                                <div style={{ flex: 1, textAlign: 'center', padding: '12px', background: 'var(--paper)', borderRadius: '10px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--slate)' }}>
                                        {c.students.length > 0 ? Math.round(c.students.reduce((a, s) => a + s.attendance, 0) / c.students.length) : 89}%
                                    </div>
                                    <div style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Attendance</div>
                                </div>
                                <div style={{ flex: 1, textAlign: 'center', padding: '12px', background: 'var(--paper)', borderRadius: '10px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--gold)' }}>
                                        {c.students.length > 0 ? Math.round(c.students.reduce((a, s) => a + s.avgScore, 0) / c.students.length) : 76}%
                                    </div>
                                    <div style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Score</div>
                                </div>
                            </div>
                            {c.students.slice(0, 4).map((s, j) => (
                                <div className="student-row" key={j}>
                                    <div className="student-ava">{s.name[0]}</div>
                                    <div className="student-info">
                                        <div className="student-name">{s.name}</div>
                                        <div className="student-meta">Roll #{s.rollNo} · {s.attendance}%</div>
                                    </div>
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: s.avgScore >= 80 ? 'var(--sage)' : 'var(--muted)' }}>
                                        {s.avgScore}%
                                    </span>
                                </div>
                            ))}
                            {c.students.length > 4 && (
                                <div style={{ textAlign: 'center', padding: '8px', fontSize: '12px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                                    +{c.students.length - 4} more students
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TeacherClasses;
