export const exams = [
    { id: 'EXM001', name: 'Unit Test 1', type: 'Unit Test', startDate: '2026-02-10', endDate: '2026-02-14', classes: ['9A', '9B', '9C', '10A', '10B'], status: 'completed' },
    { id: 'EXM002', name: 'Unit Test 2', type: 'Unit Test', startDate: '2026-03-24', endDate: '2026-03-28', classes: ['9A', '9B', '9C', '10A', '10B'], status: 'ongoing' },
    { id: 'EXM003', name: 'Midterm Examination', type: 'Midterm', startDate: '2026-04-14', endDate: '2026-04-22', classes: ['5A', '5B', '6A', '6B', '7A', '7B', '8A', '8B', '9A', '9B', '10A', '10B'], status: 'upcoming' },
    { id: 'EXM004', name: 'Pre-Board Examination', type: 'Final Exam', startDate: '2026-01-06', endDate: '2026-01-16', classes: ['10A', '10B'], status: 'completed' },
];

export const examSchedule = [
    { date: 'Mon, Mar 24', subject: 'Mathematics', time: '09:00 - 12:00', maxMarks: 100 },
    { date: 'Tue, Mar 25', subject: 'Science', time: '09:00 - 12:00', maxMarks: 100 },
    { date: 'Wed, Mar 26', subject: 'English', time: '09:00 - 12:00', maxMarks: 100 },
    { date: 'Thu, Mar 27', subject: 'Hindi', time: '09:00 - 11:00', maxMarks: 80 },
    { date: 'Fri, Mar 28', subject: 'Social Studies', time: '09:00 - 11:00', maxMarks: 80 },
];

export const studentResults = [
    { subject: 'Mathematics', teacher: 'Mr. Mehta', maxMarks: 100, obtained: 88, grade: 'A', color: '#4a7c59' },
    { subject: 'Science', teacher: 'Ms. Singh', maxMarks: 100, obtained: 76, grade: 'B+', color: '#3d5a73' },
    { subject: 'English', teacher: 'Mr. D\'Costa', maxMarks: 100, obtained: 82, grade: 'A-', color: '#c9a84c' },
    { subject: 'History', teacher: 'Mrs. Rao', maxMarks: 80, obtained: 57, grade: 'B', color: '#c4522a' },
    { subject: 'Hindi', teacher: 'Ms. Deshpande', maxMarks: 80, obtained: 66, grade: 'A-', color: '#4a7c59' },
    { subject: 'Computer Science', teacher: 'Mr. Menon', maxMarks: 100, obtained: 92, grade: 'A+', color: '#3d5a73' },
];

export const classMarks = [
    { rollNo: 1, name: 'Aarav Sharma', math: 88, science: 76, english: 82, hindi: 66, social: 57, cs: 92, total: 461, percent: '82%', grade: 'A' },
    { rollNo: 2, name: 'Priya Gupta', math: 95, science: 91, english: 89, hindi: 78, social: 72, cs: 88, total: 513, percent: '91%', grade: 'A+' },
    { rollNo: 7, name: 'Kabir Singh', math: 72, science: 68, english: 78, hindi: 62, social: 55, cs: 80, total: 415, percent: '74%', grade: 'B+' },
    { rollNo: 11, name: 'Rohan Desai', math: 65, science: 62, english: 70, hindi: 58, social: 48, cs: 75, total: 378, percent: '67%', grade: 'B' },
    { rollNo: 15, name: 'Aryan Patel', math: 88, science: 76, english: 82, hindi: 66, social: 57, cs: 92, total: 461, percent: '82%', grade: 'A' },
    { rollNo: 16, name: 'Dhruv Verma', math: 58, science: 55, english: 62, hindi: 52, social: 45, cs: 68, total: 340, percent: '60%', grade: 'B-' },
];
