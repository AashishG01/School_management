import { useState } from 'react';
import { assignments as initialAssignments } from '../../data/assignments';
import { useToast } from '../../components/ui/Toast';

const TeacherAssignments = () => {
    const toast = useToast();
    const [assignmentList, setAssignmentList] = useState(initialAssignments);
    const [showForm, setShowForm] = useState(false);
    const [showAI, setShowAI] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedQuiz, setGeneratedQuiz] = useState(null);

    const [formData, setFormData] = useState({ title: '', description: '', subject: 'Mathematics', class: '9A', deadline: '' });
    const [aiData, setAiData] = useState({ topic: '', difficulty: 'Medium', questions: 5, subject: 'Mathematics', class: '9A' });

    const handleCreate = () => {
        if (!formData.title || !formData.description) {
            toast('Please fill in title and description', 'error');
            return;
        }
        const newAsg = {
            id: `ASG${String(assignmentList.length + 1).padStart(3, '0')}`,
            title: formData.title,
            subject: formData.subject,
            class: formData.class,
            description: formData.description,
            deadline: formData.deadline || '2026-04-15',
            teacher: 'Mr. Mehta',
            status: 'active',
            submissions: 0,
            total: 38,
        };
        setAssignmentList(prev => [newAsg, ...prev]);
        setFormData({ title: '', description: '', subject: 'Mathematics', class: '9A', deadline: '' });
        setShowForm(false);
        toast(`Assignment "${newAsg.title}" created for Class ${newAsg.class}!`, 'success');
    };

    const generateAIQuiz = () => {
        if (!aiData.topic) {
            toast('Please enter a topic', 'error');
            return;
        }
        setIsGenerating(true);
        setGeneratedQuiz(null);

        setTimeout(() => {
            setIsGenerating(false);
            setGeneratedQuiz([
                { q: `What is the primary concept of ${aiData.topic}?`, options: ['Option A', 'Option B', 'Option C', 'Option D'], ans: 'Option B' },
                { q: `Which of the following applies to ${aiData.topic}?`, options: ['Theory 1', 'Theory 2', 'Theory 3', 'Theory 4'], ans: 'Theory 1' },
                { q: `Calculate the advanced derivation for ${aiData.topic}.`, options: ['42', '100', '0', 'Infinity'], ans: '42' },
            ]);
        }, 2500);
    };

    const publishAIQuiz = () => {
        const newAsg = {
            id: `ASG${String(assignmentList.length + 1).padStart(3, '0')}`,
            title: `${aiData.topic} Quiz (AI Generated)`,
            subject: aiData.subject,
            class: aiData.class,
            description: `Interactive multiple-choice quiz covering ${aiData.topic} at ${aiData.difficulty} difficulty.`,
            deadline: '2026-04-10',
            teacher: 'Mr. Mehta',
            status: 'active',
            submissions: 0,
            total: 38,
        };
        setAssignmentList(prev => [newAsg, ...prev]);
        setShowAI(false);
        setGeneratedQuiz(null);
        setAiData({ ...aiData, topic: '' });
        toast(`AI Quiz published to Class ${aiData.class}!`, 'success');
    };

    return (
        <>
            <div className="page-header">
                <h2>Assignments & Quizzes</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn btn-gold" onClick={() => { setShowAI(!showAI); setShowForm(false); }}>
                        ✨ Generate AI Quiz
                    </button>
                    <button className="btn btn-primary" onClick={() => { setShowForm(!showForm); setShowAI(false); }}>
                        {showForm ? '✕ Cancel' : '➕ New Assignment'}
                    </button>
                </div>
            </div>

            {showAI && (
                <div className="card" style={{ marginBottom: '24px', border: '2px solid var(--gold)' }}>
                    <div className="card-header" style={{ background: 'rgba(201, 168, 76, 0.05)', borderBottom: '1px solid var(--border)' }}>
                        <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '20px' }}>✨</span> AI Practice Quiz Generator
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group"><label className="form-label">Subject</label>
                                <select className="form-input" value={aiData.subject} onChange={e => setAiData({ ...aiData, subject: e.target.value })}>
                                    <option>Mathematics</option><option>Science</option><option>English</option>
                                </select>
                            </div>
                            <div className="form-group"><label className="form-label">Class</label>
                                <select className="form-input" value={aiData.class} onChange={e => setAiData({ ...aiData, class: e.target.value })}>
                                    <option>9A</option><option>10B</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label className="form-label">Topic / Concept</label>
                                <input className="form-input" placeholder="e.g. Quadratic Equations, Photosynthesis..." value={aiData.topic} onChange={e => setAiData({ ...aiData, topic: e.target.value })} />
                            </div>
                            <div className="form-group"><label className="form-label">Difficulty & Count</label>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <select className="form-input" value={aiData.difficulty} onChange={e => setAiData({ ...aiData, difficulty: e.target.value })} style={{ flex: 1 }}>
                                        <option>Easy</option><option>Medium</option><option>Hard</option>
                                    </select>
                                    <select className="form-input" value={aiData.questions} onChange={e => setAiData({ ...aiData, questions: parseInt(e.target.value) })} style={{ width: '80px' }}>
                                        <option value={5}>5 Qs</option><option value={10}>10 Qs</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {!generatedQuiz && !isGenerating && (
                            <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={generateAIQuiz}>
                                🧠 Draft Quiz with AI
                            </button>
                        )}

                        {isGenerating && (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0', color: 'var(--muted)' }}>
                                <div className="ai-spinner" style={{ width: '24px', height: '24px', border: '3px solid var(--border)', borderTopColor: 'var(--gold)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '12px' }}></div>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>Generating distractors and answer keys...</div>
                            </div>
                        )}

                        {generatedQuiz && (
                            <div style={{ marginTop: '20px', padding: '20px', background: 'var(--cream)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <h4 style={{ marginBottom: '16px', fontSize: '14px' }}>Draft Preview ({generatedQuiz.length} Questions)</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '300px', overflowY: 'auto', marginBottom: '16px' }}>
                                    {generatedQuiz.map((q, i) => (
                                        <div key={i} style={{ background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                            <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '12px' }}>Q{i + 1}: {q.q}</div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                                {q.options.map((opt, j) => (
                                                    <div key={j} style={{ padding: '8px 12px', fontSize: '12px', borderRadius: '6px', border: `1px solid ${opt === q.ans ? 'var(--sage)' : 'var(--border)'}`, background: opt === q.ans ? 'rgba(74, 124, 89, 0.05)' : 'white', display: 'flex', justifyContent: 'space-between' }}>
                                                        <span>{opt}</span>
                                                        {opt === q.ans && <span style={{ color: 'var(--sage)' }}>✓ Correct</span>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <button className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setGeneratedQuiz(null)}>↺ Regenerate</button>
                                    <button className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }} onClick={publishAIQuiz}>📢 Publish to Class {aiData.class}</button>
                                </div>
                            </div>
                        )}
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                </div>
            )}

            {showForm && (
                <div className="card" style={{ marginBottom: '24px' }}>
                    <div className="card-header"><div className="card-title">Create Manual Assignment</div></div>
                    {/* ... existing manual form ... */}
                    <div className="card-body">
                        <div className="form-group"><label className="form-label">Title *</label>
                            <input className="form-input" placeholder="Assignment title" value={formData.title} onChange={e => setFormData(p => ({ ...p, title: e.target.value }))} /></div>
                        <div className="form-row">
                            <div className="form-group"><label className="form-label">Subject</label>
                                <select className="form-input" value={formData.subject} onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}>
                                    <option>Mathematics</option><option>Algebra</option><option>Science</option><option>English</option>
                                </select></div>
                            <div className="form-group"><label className="form-label">Class</label>
                                <select className="form-input" value={formData.class} onChange={e => setFormData(p => ({ ...p, class: e.target.value }))}>
                                    <option>9A</option><option>10B</option><option>8C</option><option>7A</option>
                                </select></div>
                        </div>
                        <div className="form-group"><label className="form-label">Description *</label>
                            <textarea className="form-input" rows={3} placeholder="Assignment instructions..." style={{ resize: 'vertical' }} value={formData.description} onChange={e => setFormData(p => ({ ...p, description: e.target.value }))}></textarea></div>
                        <div className="form-group"><label className="form-label">Deadline</label>
                            <input className="form-input" type="date" value={formData.deadline} onChange={e => setFormData(p => ({ ...p, deadline: e.target.value }))} /></div>
                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleCreate}>📝 Create Assignment</button>
                    </div>
                </div>
            )}

            <div className="card">
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr><th>Title</th><th>Subject</th><th>Class</th><th>Deadline</th><th>Submissions</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                            {assignmentList.map(a => (
                                <tr key={a.id}>
                                    <td>
                                        <div style={{ fontWeight: 600, fontSize: '13px' }}>{a.title}</div>
                                        <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{a.description.substring(0, 50)}...</div>
                                    </td>
                                    <td style={{ fontSize: '12px' }}>{a.subject}</td>
                                    <td>{a.class}</td>
                                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{a.deadline}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div className="progress-bar" style={{ width: '60px' }}>
                                                <div className="progress-fill" style={{ width: `${(a.submissions / a.total) * 100}%` }}></div>
                                            </div>
                                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)' }}>{a.submissions}/{a.total}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-chip ${a.status === 'completed' ? 'paid' : a.status === 'active' ? 'pending' : 'due'}`}>
                                            {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TeacherAssignments;
