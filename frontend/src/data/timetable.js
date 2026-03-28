export const timetableData = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    periods: [
        { time: '08:00–08:45', label: 'Period 1' },
        { time: '08:45–09:30', label: 'Period 2' },
        { time: '09:30–09:45', label: 'Break' },
        { time: '09:45–10:30', label: 'Period 3' },
        { time: '10:30–11:15', label: 'Period 4' },
        { time: '11:15–12:00', label: 'Period 5' },
        { time: '12:00–12:45', label: 'Lunch' },
        { time: '12:45–13:30', label: 'Period 6' },
        { time: '13:30–14:15', label: 'Period 7' },
        { time: '14:15–14:45', label: 'Period 8' },
    ],
    // Class 9A timetable
    '9A': {
        Mon: ['Mathematics', 'Science', null, 'English', 'Hindi', 'Social Studies', null, 'Computer Science', 'Physical Education', 'Library'],
        Tue: ['English', 'Mathematics', null, 'Science', 'Hindi', 'Computer Science', null, 'Art', 'Social Studies', 'Music'],
        Wed: ['Science', 'English', null, 'Mathematics', 'Sanskrit', 'Physical Education', null, 'Hindi', 'Social Studies', 'Computer Science'],
        Thu: ['Mathematics', 'Hindi', null, 'Science', 'English', 'Art', null, 'Social Studies', 'Computer Science', 'Physical Education'],
        Fri: ['English', 'Science', null, 'Hindi', 'Mathematics', 'Social Studies', null, 'Physical Education', 'Computer Science', 'Music'],
        Sat: ['Mathematics', 'English', null, 'Science', 'Physical Education', 'Hindi', null, 'Library', 'Art', null],
    },
    '10B': {
        Mon: ['Physics', 'Chemistry', null, 'Mathematics', 'English', 'Biology', null, 'Hindi', 'Computer Science', 'Physical Education'],
        Tue: ['Mathematics', 'Physics', null, 'English', 'Chemistry', 'Hindi', null, 'Biology', 'Computer Science', 'Physical Education'],
        Wed: ['Chemistry', 'Mathematics', null, 'Physics', 'Hindi', 'English', null, 'Computer Science', 'Biology', 'Physical Education'],
        Thu: ['English', 'Biology', null, 'Chemistry', 'Mathematics', 'Physics', null, 'Hindi', 'Physical Education', 'Computer Science'],
        Fri: ['Physics', 'English', null, 'Mathematics', 'Biology', 'Chemistry', null, 'Computer Science', 'Hindi', 'Physical Education'],
        Sat: ['Mathematics', 'Chemistry', null, 'English', 'Physics', 'Hindi', null, 'Biology', 'Physical Education', null],
    },
};

export const subjectTeacherMap = {
    'Mathematics': { teacher: 'Mr. Mehta', room: 'Room 201' },
    'Algebra': { teacher: 'Mr. Mehta', room: 'Room 201' },
    'Science': { teacher: 'Ms. Singh', room: 'Room 105' },
    'Physics': { teacher: 'Ms. Singh', room: 'Lab 1' },
    'Chemistry': { teacher: 'Mr. Verma', room: 'Lab 2' },
    'Biology': { teacher: 'Ms. Nambiar', room: 'Lab 3' },
    'English': { teacher: 'Mr. D\'Costa', room: 'Room 302' },
    'Hindi': { teacher: 'Ms. Deshpande', room: 'Room 204' },
    'History': { teacher: 'Mrs. Rao', room: 'Room 301' },
    'Social Studies': { teacher: 'Mrs. Rao', room: 'Room 301' },
    'Computer Science': { teacher: 'Mr. Menon', room: 'CS Lab' },
    'Physical Education': { teacher: 'Mr. Malhotra', room: 'Ground' },
    'Art': { teacher: 'Ms. Kapoor', room: 'Art Room' },
    'Music': { teacher: 'Mr. Ali', room: 'Music Room' },
    'Sanskrit': { teacher: 'Mr. Chauhan', room: 'Room 103' },
    'Library': { teacher: 'Librarian', room: 'Library' },
};

export const teacherSchedule = [
    { time: '08:00–08:45', subject: 'Mathematics', class: 'Class 9A', room: 'Room 201', color: '#4a7c59' },
    { time: '09:45–10:30', subject: 'Mathematics', class: 'Class 10B', room: 'Room 201', color: '#4a7c59' },
    { time: '11:15–12:00', subject: 'Algebra', class: 'Class 8C', room: 'Room 105', color: '#3d5a73' },
    { time: '14:00–14:45', subject: 'Mathematics', class: 'Class 7A', room: 'Room 201', color: '#4a7c59' },
];

export const studentSchedule = [
    { time: '08:00', subject: 'Mathematics', teacher: 'Mr. Rahul Mehta', color: '#4a7c59' },
    { time: '09:45', subject: 'Science', teacher: 'Ms. Priya Singh', color: '#3d5a73' },
    { time: '11:15', subject: 'English', teacher: 'Mr. Samuel D\'Costa', color: '#c9a84c' },
    { time: '14:00', subject: 'History', teacher: 'Mrs. Lakshmi Rao', color: '#c4522a' },
];
