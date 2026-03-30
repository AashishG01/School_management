import { Search, Bell, Settings } from 'lucide-react';
import { useState } from 'react';
import AISearch from '../ui/AISearch';

const Topbar = ({ title, subtitle }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
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
                <button className="topbar-btn" title="AI Search" onClick={() => setIsSearchOpen(true)}>
                    <Search size={16} />
                </button>
                <AISearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
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
