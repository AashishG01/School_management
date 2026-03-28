import { useState } from 'react';
import { announcements, announcementTypeColors } from '../../data/announcements';

const Announcements = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div className="page-header">
                <h2>School Announcements</h2>
                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? '✕ Cancel' : '📣 New Announcement'}
                </button>
            </div>

            {showForm && (
                <div className="card" style={{ marginBottom: '24px' }}>
                    <div className="card-header"><div className="card-title">Create Announcement</div></div>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input className="form-input" placeholder="Enter announcement title" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea className="form-input" rows={4} placeholder="Write your announcement..." style={{ resize: 'vertical' }}></textarea>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Type</label>
                                <select className="form-input">
                                    <option>Info</option>
                                    <option>Urgent</option>
                                    <option>Event</option>
                                    <option>Holiday</option>
                                    <option>Exam</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Target</label>
                                <select className="form-input">
                                    <option>All</option>
                                    <option>All Students</option>
                                    <option>Parents</option>
                                    <option>Class 9-10</option>
                                    <option>Class 6-8</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            📣 Publish Announcement
                        </button>
                    </div>
                </div>
            )}

            <div className="card">
                <div className="card-body" style={{ paddingTop: '24px' }}>
                    {announcements.map((a) => (
                        <div className="announce-item" key={a.id}>
                            <div className="announce-top">
                                <div className="announce-dot" style={{ background: announcementTypeColors[a.type] || 'var(--muted)' }}></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div className="announce-title">{a.title}</div>
                                        <span style={{ fontSize: '9px', padding: '2px 8px', borderRadius: '999px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'DM Mono', monospace", color: 'var(--muted)', flexShrink: 0, marginLeft: '12px' }}>
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

export default Announcements;
