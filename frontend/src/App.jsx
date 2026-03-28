import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Landing from './pages/Landing';

// Admin pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminStudents from './pages/admin/Students';
import AdminClasses from './pages/admin/Classes';
import AdminAdmissions from './pages/admin/Admissions';
import AdminFees from './pages/admin/Fees';
import AdminTimetable from './pages/admin/Timetable';
import AdminAnnouncements from './pages/admin/Announcements';
import AdminTeachers from './pages/admin/Teachers';
import AdminAnalytics from './pages/admin/Analytics';

// Teacher pages
import TeacherDashboard from './pages/teacher/Dashboard';
import TeacherAttendance from './pages/teacher/Attendance';
import TeacherClasses from './pages/teacher/Classes';
import TeacherAssignments from './pages/teacher/Assignments';
import TeacherExaminations from './pages/teacher/Examinations';

// Parent pages
import ParentOverview from './pages/parent/Overview';
import ParentAttendance from './pages/parent/Attendance';
import ParentResults from './pages/parent/Results';
import ParentFees from './pages/parent/Fees';
import ParentAnnouncements from './pages/parent/Announcements';

// Student pages
import StudentDashboard from './pages/student/Dashboard';
import StudentTimetable from './pages/student/Timetable';
import StudentAssignments from './pages/student/Assignments';
import StudentGrades from './pages/student/Grades';
import StudentAttendance from './pages/student/AttendanceHistory';

// Navigation configs per role
const adminNav = [
  {
    label: 'Overview', items: [
      { icon: '📊', label: 'Dashboard', path: '/admin', end: true },
      { icon: '👥', label: 'Students', path: '/admin/students', badge: '3 new' },
      { icon: '🏫', label: 'Classes & Sections', path: '/admin/classes' },
    ]
  },
  {
    label: 'Operations', items: [
      { icon: '📝', label: 'Admissions', path: '/admin/admissions', badge: '5' },
      { icon: '💰', label: 'Fee Management', path: '/admin/fees' },
      { icon: '📅', label: 'Timetable', path: '/admin/timetable' },
      { icon: '📣', label: 'Announcements', path: '/admin/announcements' },
    ]
  },
  {
    label: 'Staff', items: [
      { icon: '👩‍🏫', label: 'Teachers', path: '/admin/teachers' },
      { icon: '💼', label: 'Payroll', path: '/admin/payroll' },
    ]
  },
  {
    label: 'Reports', items: [
      { icon: '📈', label: 'Analytics', path: '/admin/analytics' },
      { icon: '📄', label: 'Report Cards', path: '/admin/report-cards' },
    ]
  },
];

const teacherNav = [
  {
    label: 'Classroom', items: [
      { icon: '📊', label: 'Dashboard', path: '/teacher', end: true },
      { icon: '✅', label: 'Mark Attendance', path: '/teacher/attendance' },
      { icon: '📚', label: 'My Classes', path: '/teacher/classes' },
    ]
  },
  {
    label: 'Academic', items: [
      { icon: '📝', label: 'Assignments', path: '/teacher/assignments', badge: '2 due' },
      { icon: '🎓', label: 'Examinations', path: '/teacher/examinations' },
    ]
  },
];

const parentNav = [
  {
    label: 'My Child', items: [
      { icon: '📊', label: 'Overview', path: '/parent', end: true },
      { icon: '✅', label: 'Attendance', path: '/parent/attendance' },
      { icon: '🏆', label: 'Results & Grades', path: '/parent/results' },
    ]
  },
  {
    label: 'School', items: [
      { icon: '💰', label: 'Fee Payments', path: '/parent/fees' },
      { icon: '📣', label: 'Announcements', path: '/parent/announcements', badge: '2' },
    ]
  },
];

const studentNav = [
  {
    label: 'My Day', items: [
      { icon: '📊', label: 'Dashboard', path: '/student', end: true },
      { icon: '📅', label: 'My Timetable', path: '/student/timetable' },
      { icon: '📝', label: 'Assignments', path: '/student/assignments', badge: '3' },
    ]
  },
  {
    label: 'Academics', items: [
      { icon: '🏆', label: 'My Grades', path: '/student/grades' },
      { icon: '✅', label: 'Attendance History', path: '/student/attendance' },
    ]
  },
];

const users = {
  admin: { name: 'Priya Sharma', email: 'admin@educore.in', initial: 'P' },
  teacher: { name: 'Rahul Mehta', email: 'r.mehta@educore.in', initial: 'R' },
  parent: { name: 'Anita Patel', email: 'a.patel@parent.in', initial: 'A' },
  student: { name: 'Aryan Patel', email: 'aryan@student.in', initial: 'Ar' },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AppLayout role="admin" navSections={adminNav} user={users.admin} />}>
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="classes" element={<AdminClasses />} />
          <Route path="admissions" element={<AdminAdmissions />} />
          <Route path="fees" element={<AdminFees />} />
          <Route path="timetable" element={<AdminTimetable />} />
          <Route path="announcements" element={<AdminAnnouncements />} />
          <Route path="teachers" element={<AdminTeachers />} />
          <Route path="payroll" element={<AdminTeachers />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="report-cards" element={<AdminAnalytics />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<AppLayout role="teacher" navSections={teacherNav} user={users.teacher} />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="classes" element={<TeacherClasses />} />
          <Route path="assignments" element={<TeacherAssignments />} />
          <Route path="examinations" element={<TeacherExaminations />} />
        </Route>

        {/* Parent Routes */}
        <Route path="/parent" element={<AppLayout role="parent" navSections={parentNav} user={users.parent} />}>
          <Route index element={<ParentOverview />} />
          <Route path="attendance" element={<ParentAttendance />} />
          <Route path="results" element={<ParentResults />} />
          <Route path="fees" element={<ParentFees />} />
          <Route path="announcements" element={<ParentAnnouncements />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<AppLayout role="student" navSections={studentNav} user={users.student} />}>
          <Route index element={<StudentDashboard />} />
          <Route path="timetable" element={<StudentTimetable />} />
          <Route path="assignments" element={<StudentAssignments />} />
          <Route path="grades" element={<StudentGrades />} />
          <Route path="attendance" element={<StudentAttendance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
