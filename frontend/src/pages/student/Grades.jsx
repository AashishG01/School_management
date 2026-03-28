import { studentResults } from '../../data/exams';

const StudentGrades = () => {
    const totalObtained = studentResults.reduce((a, s) => a + s.obtained, 0);
    const totalMax = studentResults.reduce((a, s) => a + s.maxMarks, 0);

    return (
        <>
            <div className="page-header"><h2>My Grades — Unit Test 2</h2></div>

            <div className="card">
                <div className="card-header">
                    <div className="card-title">Subject Performance</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px', color: 'var(--muted)' }}>
                        Overall: {Math.round((totalObtained / totalMax) * 100)}%
                    </div>
                </div>
                <div className="card-body">
                    {studentResults.map((s, i) => (
                        <div className="subject-grade-row" key={i}>
                            <div className="subject-color" style={{ background: s.color }}></div>
                            <div className="subject-name-wrap">
                                <div className="subject-name">{s.subject}</div>
                                <div className="subject-teacher">{s.teacher}</div>
                            </div>
                            <div style={{ flex: 0.5 }}>
                                <div className="progress-bar" style={{ width: '80px' }}>
                                    <div className="progress-fill" style={{ width: `${Math.round((s.obtained / s.maxMarks) * 100)}%`, background: s.color }}></div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right', marginRight: '8px' }}>
                                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px' }}>{s.obtained}/{s.maxMarks}</div>
                            </div>
                            <div>
                                <div className="grade-badge" style={{ color: s.color }}>{s.grade}</div>
                                <div className="grade-percent">{Math.round((s.obtained / s.maxMarks) * 100)}%</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ padding: '16px 24px', borderTop: '2px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700 }}>Total</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>{totalObtained}/{totalMax} ({Math.round((totalObtained / totalMax) * 100)}%)</span>
                </div>
            </div>
        </>
    );
};

export default StudentGrades;
