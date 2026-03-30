import { studentResults } from '../../data/exams';

const Results = () => {
    const totalObtained = studentResults.reduce((a, s) => a + s.obtained, 0);
    const totalMax = studentResults.reduce((a, s) => a + s.maxMarks, 0);
    const percentage = Math.round((totalObtained / totalMax) * 100);

    return (
        <>
            <div className="child-hero" style={{ padding: '20px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div className="child-hero-name" style={{ fontSize: '20px' }}>Aryan Patel — Results</div>
                        <div className="child-hero-meta">Unit Test 2 · March 2026</div>
                    </div>
                    <div>
                        <div className="child-stat-val">{percentage}%</div>
                        <div className="child-stat-lbl">Overall</div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header"><div className="card-title">Subject-wise Performance</div></div>
                <div className="card-body">
                    {studentResults.map((s, i) => (
                        <div className="subject-grade-row" key={i}>
                            <div className="subject-color" style={{ background: s.color }}></div>
                            <div className="subject-name-wrap">
                                <div className="subject-name">{s.subject}</div>
                                <div className="subject-teacher">{s.teacher}</div>
                            </div>
                            <div style={{ textAlign: 'right', marginRight: '16px' }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>{s.obtained}/{s.maxMarks}</div>
                            </div>
                            <div>
                                <div className="grade-badge" style={{ color: s.color }}>{s.grade}</div>
                                <div className="grade-percent">{Math.round((s.obtained / s.maxMarks) * 100)}%</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ padding: '16px 24px', borderTop: '2px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: '14px' }}>Total</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{totalObtained}/{totalMax} ({percentage}%)</span>
                </div>
            </div>
        </>
    );
};

export default Results;
