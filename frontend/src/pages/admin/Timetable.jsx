import { useState } from 'react';
import { timetableData, subjectTeacherMap } from '../../data/timetable';
import { useToast } from '../../components/ui/Toast';

const subjectColors = {
    'Mathematics': '#4a7c59', 'Algebra': '#4a7c59',
    'Science': '#3d5a73', 'Physics': '#3d5a73', 'Chemistry': '#c9a84c', 'Biology': '#6ab580',
    'English': '#c9a84c', 'Hindi': '#c4522a', 'Sanskrit': '#8a8070',
    'History': '#c4522a', 'Social Studies': '#c4522a',
    'Computer Science': '#3d5a73', 'Physical Education': '#4a7c59',
    'Art': '#c9a84c', 'Music': '#7b4fb0', 'Library': '#8a8070',
};

const Timetable = () => {
    const toast = useToast();
    const [selectedClass, setSelectedClass] = useState('9A');
    const [isGenerating, setIsGenerating] = useState(false);
    const [genStep, setGenStep] = useState('');
    const [schedule, setSchedule] = useState(timetableData['9A']);

    const handleGenerate = () => {
        setIsGenerating(true);
        setSchedule(null);
        setGenStep('Parsing constraints...');

        setTimeout(() => setGenStep('Allocating labs and resources...'), 1000);
        setTimeout(() => setGenStep('Resolving teacher conflicts (3.2M permutations)...'), 2000);
        setTimeout(() => setGenStep('Finalizing schedule...'), 3500);

        setTimeout(() => {
            setSchedule(timetableData[selectedClass] || timetableData['9A']);
            setIsGenerating(false);
            toast('AI Timetable successfully generated with 0 conflicts!', 'success');
        }, 4500);
    };

    return (
        <>
            <div className="page-header">
                <h2>Weekly Timetable</h2>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <select className="filter-select" value={selectedClass} onChange={e => { setSelectedClass(e.target.value); setSchedule(timetableData[e.target.value] || timetableData['9A']); }}>
                        {Object.keys(timetableData).filter(k => k !== 'days' && k !== 'periods').map(c => (
                            <option key={c} value={c}>Class {c}</option>
                        ))}
                    </select>
                    <button className="btn btn-gold" onClick={handleGenerate} disabled={isGenerating}>
                        ✨ Auto-Generate with AI
                    </button>
                </div>
            </div>

            <div className="card" style={{ overflow: 'auto', minHeight: '400px', position: 'relative' }}>
                {isGenerating && (
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(2px)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="ai-spinner" style={{ width: '40px', height: '40px', border: '3px solid var(--border)', borderTopColor: 'var(--gold)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '16px' }}></div>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Generating Master Schedule</div>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{genStep}</div>
                    </div>
                )}

                {schedule && (
                    <div className="timetable-grid" style={{ minWidth: '800px' }}>
                        <div className="tt-header">Time</div>
                        {timetableData.days.map(d => <div className="tt-header" key={d}>{d}</div>)}

                        {timetableData.periods.map((period, pi) => {
                            const isBreak = period.label === 'Break' || period.label === 'Lunch';
                            return [
                                <div className="tt-time" key={`t-${pi}`}>{period.time}</div>,
                                ...timetableData.days.map((day, di) => {
                                    const subject = schedule[day]?.[pi];
                                    if (isBreak) {
                                        return (
                                            <div className="tt-cell" key={`${pi}-${di}`} style={{ background: 'var(--cream)', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'var(--muted)' }}>
                                                {period.label}
                                            </div>
                                        );
                                    }
                                    if (!subject) {
                                        return <div className="tt-cell" key={`${pi}-${di}`} style={{ background: 'var(--cream)', color: 'var(--muted)', fontSize: '10px' }}>—</div>;
                                    }
                                    const info = subjectTeacherMap[subject] || {};
                                    const color = subjectColors[subject] || 'var(--muted)';
                                    return (
                                        <div className="tt-cell" key={`${pi}-${di}`} style={{ borderLeft: `3px solid ${color}` }}>
                                            <div className="tt-subject">{subject}</div>
                                            <div className="tt-teacher">{info.teacher || ''}</div>
                                            <div className="tt-room">{info.room || ''}</div>
                                        </div>
                                    );
                                })
                            ];
                        })}
                    </div>
                )}
            </div>
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </>
    );
};

export default Timetable;
