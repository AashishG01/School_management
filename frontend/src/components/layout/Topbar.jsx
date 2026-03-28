import { Search, Bell, Settings } from 'lucide-react';

const Topbar = ({ title, subtitle }) => {
    const today = new Date().toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <div className="topbar">
            <div className="topbar-left">
                <h1>{title}</h1>
                <p>{subtitle || today}</p>
            </div>
            <div className="topbar-right">
                <button className="topbar-btn" title="Search">
                    <Search size={16} />
                </button>
                <button className="topbar-btn" title="Notifications" style={{ position: 'relative' }}>
                    <Bell size={16} />
                    <span className="notif-dot"></span>
                </button>
                <button className="topbar-btn" title="Settings">
                    <Settings size={16} />
                </button>
            </div>
        </div>
    );
};

export default Topbar;
