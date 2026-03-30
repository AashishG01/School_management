import { useState } from 'react';
import { students } from '../../data/students';
import { studentResults } from '../../data/exams';
import { useToast } from '../../components/ui/Toast';

const ReportCards = () => {
    const toast = useToast();
    const [selectedClass, setSelectedClass] = useState('9');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [generated, setGenerated] = useState(false);

    const classStudents = students.filter(s => s.class === selectedClass);

    const handleGenerate = () => {
        setGenerated(true);
        toast(`Report cards generated for ${classStudents.length} students in Class ${selectedClass}!`, 'success');
    };

    const handleDownload = (name) => {
        toast(`Downloading report card for ${name}...`, 'info');
    };

    const totalObtained = studentResults.reduce((a, s) => a + s.obtained, 0);
    const totalMax = studentResults.reduce((a, s) => a + s.maxMarks, 0);

    return (
        <>
            <div className="page-header">
                <h2>Report Cards</h2>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <select className="filter-select" value={selectedClass} onChange={e => { setSelectedClass(e.target.value); setGenerated(false); setSelectedStudent(null); }}>
                        <option value="3">Class 3</option><option value="5">Class 5</option><option value="6">Class 6</option>
                        <option value="7">Class 7</option><option value="8">Class 8</option><option value="9">Class 9</option><option value="10">Class 10</option>
                    </select>
                    <button className="btn btn-primary" onClick={handleGenerate}>📄 Generate All</button>
                </div>
            </div>

            <div className="grid-3r">
                {/* Student List */}
                <div className="card">
                    <div className="card-header"><div className="card-title">Class {selectedClass} — Students</div></div>
                    <div className="card-body">
                        {classStudents.length === 0 ? (
                            <p style={{ color: 'var(--muted)', fontSize: '13px' }}>No students found in Class {selectedClass}</p>
                        ) : (
                            classStudents.map(s => (
                                <div className="student-row" key={s.id} onClick={() => setSelectedStudent(s)} style={{ background: selectedStudent?.id === s.id ? 'var(--paper)' : '' }}>
                                    <div className="student-ava">{s.name[0]}</div>
                                    <div className="student-info">
                                        <div className="student-name">{s.name}</div>
                                        <div className="student-meta">Roll #{s.rollNo} · {s.avgScore}%</div>
                                    </div>
                                    {generated && <span className="status-chip paid">Ready</span>}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Report Card Preview */}
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Report Card Preview</div>
                        {selectedStudent && generated && (
                            <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: '12px' }} onClick={() => handleDownload(selectedStudent.name)}>
                                📥 Download PDF
                            </button>
                        )}
                    </div>
                    <div className="card-body">
                        {!selectedStudent ? (
                            <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--muted)' }}>
                                <div style={{ fontSize: '40px', marginBottom: '16px' }}>📄</div>
                                <p>Select a student to preview their report card</p>
                            </div>
                        ) : (
                            <div className="report-card-preview">
                                <div className="report-card-header">
                                    <div className="report-card-school">Acadex Academy</div>
                                    <div className="report-card-subtitle">Progress Report — Academic Year 2025-26</div>
                                </div>

                                <div className="form-row" style={{ marginBottom: '20px' }}>
                                    <div><label className="form-label">Student Name</label><div style={{ fontWeight: 600 }}>{selectedStudent.name}</div></div>
                                    <div><label className="form-label">Class & Section</label><div>{selectedStudent.class}{selectedStudent.section}</div></div>
                                </div>
                                <div className="form-row" style={{ marginBottom: '20px' }}>
                                    <div><label className="form-label">Roll Number</label><div style={{ fontFamily: "'JetBrains Mono', monospace" }}>{selectedStudent.rollNo}</div></div>
                                    <div><label className="form-label">Attendance</label><div style={{ fontFamily: "'JetBrains Mono', monospace", color: selectedStudent.attendance >= 90 ? 'var(--sage)' : 'var(--rust)' }}>{selectedStudent.attendance}%</div></div>
                                </div>

                                <label className="form-label" style={{ marginBottom: '12px' }}>Subject-wise Performance</label>
                                <table className="data-table" style={{ marginBottom: '20px' }}>
                                    <thead>
                                        <tr><th>Subject</th><th>Max Marks</th><th>Obtained</th><th>Grade</th></tr>
                                    </thead>
                                    <tbody>
                                        {studentResults.map((r, i) => (
                                            <tr key={i}>
                                                <td style={{ fontWeight: 600 }}>{r.subject}</td>
                                                <td style={{ fontFamily: "'JetBrains Mono', monospace" }}>{r.maxMarks}</td>
                                                <td style={{ fontFamily: "'JetBrains Mono', monospace" }}>{r.obtained}</td>
                                                <td><span style={{ fontWeight: 700, color: r.color }}>{r.grade}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr style={{ fontWeight: 700 }}>
                                            <td>Total</td>
                                            <td style={{ fontFamily: "'JetBrains Mono', monospace" }}>{totalMax}</td>
                                            <td style={{ fontFamily: "'JetBrains Mono', monospace" }}>{totalObtained}</td>
                                            <td>{Math.round((totalObtained / totalMax) * 100)}%</td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderTop: '2px solid var(--border)' }}>
                                    <div><label className="form-label">Class Teacher</label><div style={{ fontSize: '13px' }}>Mr. Rahul Mehta</div></div>
                                    <div><label className="form-label">Principal</label><div style={{ fontSize: '13px' }}>Dr. Sunita Sharma</div></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportCards;
