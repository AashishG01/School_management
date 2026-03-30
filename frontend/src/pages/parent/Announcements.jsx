import { announcements, announcementTypeColors } from '../../data/announcements';

const ParentAnnouncements = () => {
    return (
        <>
            <div className="page-header"><h2>School Announcements</h2></div>
            <div className="card">
                <div className="card-body" style={{ paddingTop: '24px' }}>
                    {announcements.map(a => (
                        <div className="announce-item" key={a.id}>
                            <div className="announce-top">
                                <div className="announce-dot" style={{ background: announcementTypeColors[a.type] }}></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="announce-title">{a.title}</div>
                                        <span style={{ fontSize: '9px', padding: '2px 8px', borderRadius: '999px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', flexShrink: 0 }}>
                                            {a.target}
                                        </span>
                                    </div>
                                    <div className="announce-time">{a.date}</div>
                                </div>
                            </div>
                            <div className="announce-body">{a.body}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ParentAnnouncements;
