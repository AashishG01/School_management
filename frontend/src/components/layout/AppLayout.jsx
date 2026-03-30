import { Outlet, useLocation, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import DoubtChat from '../ui/DoubtChat';

const pageTitles = {
    // Admin
    '/admin': 'Dashboard',
    '/admin/students': 'Students',
    '/admin/classes': 'Classes & Sections',
    '/admin/admissions': 'Admissions',
    '/admin/fees': 'Fee Management',
    '/admin/timetable': 'Timetable',
    '/admin/announcements': 'Announcements',
    '/admin/teachers': 'Teachers',
    '/admin/payroll': 'Staff Payroll',
    '/admin/analytics': 'Analytics & Reports',
    '/admin/report-cards': 'Report Cards',
    // Teacher
    '/teacher': 'Dashboard',
    '/teacher/attendance': 'Mark Attendance',
    '/teacher/classes': 'My Classes',
    '/teacher/assignments': 'Assignments',
    '/teacher/examinations': 'Examinations',
    '/teacher/marks': 'Enter Marks',
    '/teacher/students': 'Student Profiles',
    '/teacher/performance': 'Performance',
    // Parent
    '/parent': 'Overview',
    '/parent/attendance': 'Attendance',
    '/parent/results': 'Results & Grades',
    '/parent/report-card': 'Report Card',
    '/parent/fees': 'Fee Payments',
    '/parent/timetable': 'Timetable',
    '/parent/announcements': 'Announcements',
    // Student
    '/student': 'Dashboard',
    '/student/timetable': 'My Timetable',
    '/student/assignments': 'Assignments',
    '/student/grades': 'My Grades',
    '/student/attendance': 'Attendance History',
    '/student/report-cards': 'Report Cards',
    '/student/announcements': 'Announcements',
    '/student/library': 'Library',
};

const AppLayout = ({ role, navSections, user }) => {
    const location = useLocation();
    const title = pageTitles[location.pathname] || 'Dashboard';

    return (
        <div className={`app-layout role-${role}`}>
            <Sidebar role={role} navSections={navSections} user={user} />
            <div className="main-content">
                <Topbar title={title} />
                <div className="content">
                    <Outlet />
                </div>
            </div>
            {role === 'student' && <DoubtChat />}
            <Link to="/" className="back-btn">
                ← Switch Role
            </Link>
        </div>
    );
};

export default AppLayout;
