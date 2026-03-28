import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const roles = [
        { key: 'admin', icon: '🏛️', label: 'Administrator', desc: 'Full control over school data, reports & operations', badge: 'Full Access' },
        { key: 'teacher', icon: '📋', label: 'Teacher', desc: 'Attendance, grades, assignments & class insights', badge: 'Classroom' },
        { key: 'parent', icon: '👨‍👩‍👧', label: 'Parent', desc: "Your child's progress, fees & school updates", badge: 'Guardian' },
        { key: 'student', icon: '🎒', label: 'Student', desc: 'Homework, schedule, results & announcements', badge: 'Learner' },
    ];

    return (
        <div className="landing">
            <div className="landing-noise"></div>
            <div className="landing-header">
                <div className="logo-mark">E</div>
                <span className="logo-text">EduCore</span>
            </div>
            <div className="landing-hero">
                <p className="hero-eyebrow">School Management System</p>
                <h1 className="hero-title">
                    Manage <span>smarter.</span><br />Teach better.
                </h1>
                <p className="hero-sub">Select your role to explore the platform</p>
                <div className="role-grid">
                    {roles.map((role) => (
                        <div
                            key={role.key}
                            className={`role-card ${role.key}`}
                            onClick={() => navigate(`/${role.key}`)}
                        >
                            <span className="role-icon">{role.icon}</span>
                            <div className="role-label">{role.label}</div>
                            <div className="role-desc">{role.desc}</div>
                            <span className="role-badge">{role.badge}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Landing;
