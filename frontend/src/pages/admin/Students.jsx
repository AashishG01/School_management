import { useState } from 'react';
import { students as initialStudents } from '../../data/students';
import { useToast } from '../../components/ui/Toast';

const Students = () => {
    const toast = useToast();
    const [studentList, setStudentList] = useState(initialStudents);
    const [search, setSearch] = useState('');
    const [classFilter, setClassFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', dob: '', gender: 'Male', class: '9', section: 'A', guardian: '', guardianPhone: '', address: '' });

    const filtered = studentList.filter(s => {
        const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase());
        const matchClass = classFilter === 'all' || s.class === classFilter;
        return matchSearch && matchClass;
    });

    const uniqueClasses = [...new Set(studentList.map(s => s.class))].sort((a, b) => Number(a) - Number(b));

    const handleAddStudent = () => {
        if (!formData.firstName || !formData.lastName) {
            toast('Please fill in required fields', 'error');
            return;
        }
        const newId = `STU${String(studentList.length + 1).padStart(3, '0')}`;
        const newStudent = {
            id: newId,
            name: `${formData.firstName} ${formData.lastName}`,
            dob: formData.dob || '2014-01-01',
            gender: formData.gender,
            class: formData.class,
            section: formData.section,
            rollNo: studentList.length + 1,
            guardian: formData.guardian || 'Guardian Name',
            guardianPhone: formData.guardianPhone || '9876500000',
            address: formData.address || 'Address',
            admissionDate: new Date().toISOString().split('T')[0],
            attendance: 0,
            avgScore: 0,
            feeStatus: 'pending'
        };
        setStudentList(prev => [newStudent, ...prev]);
        setShowModal(false);
        setFormData({ firstName: '', lastName: '', dob: '', gender: 'Male', class: '9', section: 'A', guardian: '', guardianPhone: '', address: '' });
        toast(`Student "${newStudent.name}" enrolled successfully!`, 'success');
    };

    const handleDelete = (id) => {
        const s = studentList.find(s => s.id === id);
        setStudentList(prev => prev.filter(s => s.id !== id));
        setShowModal(false);
        toast(`Student "${s?.name}" removed from records`, 'info');
    };

    return (
        <>
            <div className="page-header">
                <h2>Student Directory</h2>
                <button className="btn btn-primary" onClick={() => { setSelectedStudent(null); setShowModal(true); }}>
                    ➕ Add Student
                </button>
            </div>

            <div className="search-bar">
                <input className="search-input" placeholder="Search students by name or ID..." value={search} onChange={e => setSearch(e.target.value)} />
                <select className="filter-select" value={classFilter} onChange={e => setClassFilter(e.target.value)}>
                    <option value="all">All Classes</option>
                    {uniqueClasses.map(c => <option key={c} value={c}>Class {c}</option>)}
                </select>
            </div>

            <div className="card">
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Student ID</th><th>Name</th><th>Class</th><th>Section</th><th>Guardian</th><th>Attendance</th><th>Avg Score</th><th>Fee Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(s => (
                                <tr key={s.id} onClick={() => { setSelectedStudent(s); setShowModal(true); }}>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{s.id}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div className="student-ava">{s.name[0]}</div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '13px' }}>{s.name}</div>
                                                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{s.gender}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{s.class}</td>
                                    <td>{s.section}</td>
                                    <td style={{ fontSize: '12px' }}>{s.guardian}</td>
                                    <td>
                                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: s.attendance >= 90 ? 'var(--sage)' : s.attendance >= 80 ? 'var(--gold)' : 'var(--rust)' }}>
                                            {s.attendance}%
                                        </span>
                                    </td>
                                    <td><span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>{s.avgScore}%</span></td>
                                    <td><span className={`status-chip ${s.feeStatus}`}>{s.feeStatus.charAt(0).toUpperCase() + s.feeStatus.slice(1)}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                        Showing {filtered.length} of {studentList.length} students
                    </span>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className="modal-title">{selectedStudent ? 'Student Profile' : 'Add New Student'}</div>
                            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
                        </div>
                        <div className="modal-body">
                            {selectedStudent ? (
                                <>
                                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--paper)', border: '2px solid var(--border)', display: 'grid', placeItems: 'center', fontSize: '24px', fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: '0 auto 12px' }}>
                                            {selectedStudent.name[0]}
                                        </div>
                                        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px' }}>{selectedStudent.name}</h3>
                                        <p style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                                            {selectedStudent.id} · Class {selectedStudent.class}{selectedStudent.section} · Roll #{selectedStudent.rollNo}
                                        </p>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group"><label className="form-label">Date of Birth</label><div className="form-input" style={{ background: 'var(--paper)' }}>{selectedStudent.dob}</div></div>
                                        <div className="form-group"><label className="form-label">Gender</label><div className="form-input" style={{ background: 'var(--paper)' }}>{selectedStudent.gender}</div></div>
                                    </div>
                                    <div className="form-group"><label className="form-label">Guardian</label><div className="form-input" style={{ background: 'var(--paper)' }}>{selectedStudent.guardian} — {selectedStudent.guardianPhone}</div></div>
                                    <div className="form-group"><label className="form-label">Address</label><div className="form-input" style={{ background: 'var(--paper)' }}>{selectedStudent.address}</div></div>
                                    <div className="form-row">
                                        <div className="form-group"><label className="form-label">Attendance</label><div className="form-input" style={{ background: 'var(--paper)', color: selectedStudent.attendance >= 90 ? 'var(--sage)' : 'var(--rust)' }}>{selectedStudent.attendance}%</div></div>
                                        <div className="form-group"><label className="form-label">Avg Score</label><div className="form-input" style={{ background: 'var(--paper)' }}>{selectedStudent.avgScore}%</div></div>
                                    </div>
                                    <button className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: '8px', background: 'var(--rust)', color: 'white' }} onClick={() => handleDelete(selectedStudent.id)}>
                                        🗑️ Remove Student
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="form-row">
                                        <div className="form-group"><label className="form-label">First Name *</label>
                                            <input className="form-input" placeholder="Enter first name" value={formData.firstName} onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))} /></div>
                                        <div className="form-group"><label className="form-label">Last Name *</label>
                                            <input className="form-input" placeholder="Enter last name" value={formData.lastName} onChange={e => setFormData(p => ({ ...p, lastName: e.target.value }))} /></div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group"><label className="form-label">Date of Birth</label>
                                            <input className="form-input" type="date" value={formData.dob} onChange={e => setFormData(p => ({ ...p, dob: e.target.value }))} /></div>
                                        <div className="form-group"><label className="form-label">Gender</label>
                                            <select className="form-input" value={formData.gender} onChange={e => setFormData(p => ({ ...p, gender: e.target.value }))}>
                                                <option>Male</option><option>Female</option><option>Other</option>
                                            </select></div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group"><label className="form-label">Class</label>
                                            <select className="form-input" value={formData.class} onChange={e => setFormData(p => ({ ...p, class: e.target.value }))}>
                                                {uniqueClasses.map(c => <option key={c} value={c}>Class {c}</option>)}
                                            </select></div>
                                        <div className="form-group"><label className="form-label">Section</label>
                                            <select className="form-input" value={formData.section} onChange={e => setFormData(p => ({ ...p, section: e.target.value }))}>
                                                <option value="A">A</option><option value="B">B</option><option value="C">C</option>
                                            </select></div>
                                    </div>
                                    <div className="form-group"><label className="form-label">Guardian Name</label>
                                        <input className="form-input" placeholder="Enter guardian name" value={formData.guardian} onChange={e => setFormData(p => ({ ...p, guardian: e.target.value }))} /></div>
                                    <div className="form-group"><label className="form-label">Guardian Phone</label>
                                        <input className="form-input" placeholder="Enter phone number" value={formData.guardianPhone} onChange={e => setFormData(p => ({ ...p, guardianPhone: e.target.value }))} /></div>
                                    <div className="form-group"><label className="form-label">Address</label>
                                        <input className="form-input" placeholder="Enter full address" value={formData.address} onChange={e => setFormData(p => ({ ...p, address: e.target.value }))} /></div>
                                    <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }} onClick={handleAddStudent}>
                                        ✓ Add Student
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Students;
