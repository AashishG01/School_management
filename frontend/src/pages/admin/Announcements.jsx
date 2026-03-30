import { useState } from 'react';
import { announcements as initialAnnouncements, announcementTypeColors } from '../../data/announcements';
import { useToast } from '../../components/ui/Toast';

const Announcements = () => {
    const toast = useToast();
    const [announcementList, setAnnouncementList] = useState(initialAnnouncements);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: '', message: '', type: 'info', target: 'All' });

    const handleCreate = () => {
        if (!formData.title || !formData.message) {
            toast('Please fill in title and message', 'error');
            return;
        }
        const newAnn = {
            id: `ANN${String(announcementList.length + 1).padStart(3, '0')}`,
            title: formData.title,
            body: formData.message,
            type: formData.type,
            date: 'Just now',
            fullDate: new Date().toISOString().split('T')[0],
            target: formData.target,
        };
        setAnnouncementList(prev => [newAnn, ...prev]);
        setFormData({ title: '', message: '', type: 'info', target: 'All' });
        setShowForm(false);
        toast(`Announcement "${newAnn.title}" published successfully!`, 'success');
    };

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
                        <div className="form-group"><label className="form-label">Title *</label>
                            <input className="form-input" placeholder="Enter announcement title" value={formData.title} onChange={e => setFormData(p => ({ ...p, title: e.target.value }))} /></div>
                        <div className="form-group"><label className="form-label">Message *</label>
                            <textarea className="form-input" rows={4} placeholder="Write your announcement..." style={{ resize: 'vertical' }} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}></textarea></div>
                        <div className="form-row">
                            <div className="form-group"><label className="form-label">Type</label>
                                <select className="form-input" value={formData.type} onChange={e => setFormData(p => ({ ...p, type: e.target.value }))}>
                                    <option value="info">Info</option><option value="urgent">Urgent</option><option value="event">Event</option><option value="holiday">Holiday</option><option value="exam">Exam</option>
                                </select></div>
                            <div className="form-group"><label className="form-label">Target</label>
                                <select className="form-input" value={formData.target} onChange={e => setFormData(p => ({ ...p, target: e.target.value }))}>
                                    <option>All</option><option>All Students</option><option>Parents</option><option>Class 9-10</option><option>Class 6-8</option>
                                </select></div>
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleCreate}>
                            📣 Publish Announcement
                        </button>
                    </div>
                </div>
            )}

            <div className="card">
                <div className="card-body" style={{ paddingTop: '24px' }}>
                    {announcementList.map((a) => (
                        <div className="announce-item" key={a.id}>
                            <div className="announce-top">
                                <div className="announce-dot" style={{ background: announcementTypeColors[a.type] || 'var(--muted)' }}></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div className="announce-title">{a.title}</div>
                                        <span style={{ fontSize: '9px', padding: '2px 8px', borderRadius: '999px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', flexShrink: 0, marginLeft: '12px' }}>
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
