export const announcements = [
    { id: 'ANN001', title: 'Annual Day Practice', body: 'All students report to the main hall by 3 PM for Annual Day practice. Costumes must be brought.', type: 'urgent', date: '2 hrs ago', fullDate: '2026-03-28', target: 'All Students' },
    { id: 'ANN002', title: 'Parent-Teacher Meeting', body: 'Scheduled for April 5th, Saturday. Please confirm attendance via the parent portal.', type: 'info', date: '1 day ago', fullDate: '2026-03-27', target: 'Parents' },
    { id: 'ANN003', title: 'Science Fair 2026', body: 'Registration open for Science Fair. Students from Class 6-10 can participate. Deadline: April 10th.', type: 'event', date: '2 days ago', fullDate: '2026-03-26', target: 'Class 6-10' },
    { id: 'ANN004', title: 'Holiday Notice — Holi', body: 'School will remain closed on March 14th and 15th on account of Holi festival.', type: 'holiday', date: '4 days ago', fullDate: '2026-03-24', target: 'All' },
    { id: 'ANN005', title: 'Unit Test 2 Schedule Published', body: 'The schedule for Unit Test 2 has been published. Please check the examination section for details.', type: 'exam', date: '5 days ago', fullDate: '2026-03-23', target: 'Class 9-10' },
    { id: 'ANN006', title: 'Library Books Return', body: 'All borrowed library books must be returned by March 31st. Late fees will be applicable.', type: 'info', date: '1 week ago', fullDate: '2026-03-21', target: 'All Students' },
    { id: 'ANN007', title: 'Sports Day Registration', body: 'Register for Sports Day events. Track, field, and team sports available. Forms available at the sports office.', type: 'event', date: '1 week ago', fullDate: '2026-03-20', target: 'All Students' },
    { id: 'ANN008', title: 'Fee Payment Reminder', body: 'Kindly clear all pending fee payments before March 31st to avoid late charges.', type: 'urgent', date: '2 weeks ago', fullDate: '2026-03-14', target: 'Parents' },
    { id: 'ANN009', title: 'New Computer Lab Inaugurated', body: 'The new state-of-the-art computer lab in Block C is now open for classes. 40 workstations available.', type: 'info', date: '2 weeks ago', fullDate: '2026-03-13', target: 'All' },
    { id: 'ANN010', title: 'Mid-Term Exam Dates', body: 'Mid-term examinations will be held from April 14-22. Detailed schedule will be shared soon.', type: 'exam', date: '3 weeks ago', fullDate: '2026-03-07', target: 'All Students' },
];

export const announcementTypeColors = {
    urgent: 'var(--rust)',
    info: 'var(--slate)',
    event: 'var(--sage)',
    holiday: 'var(--gold)',
    exam: '#7b4fb0',
};
