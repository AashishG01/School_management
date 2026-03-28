import { useState } from 'react';
import { timetableData, subjectTeacherMap } from '../../data/timetable';

const subjectColors = {
    'Mathematics': '#4a7c59', 'Algebra': '#4a7c59',
    'Science': '#3d5a73', 'Physics': '#3d5a73', 'Chemistry': '#c9a84c', 'Biology': '#6ab580',
    'English': '#c9a84c', 'Hindi': '#c4522a', 'Sanskrit': '#8a8070',
    'History': '#c4522a', 'Social Studies': '#c4522a',
    'Computer Science': '#3d5a73', 'Physical Education': '#4a7c59',
    'Art': '#c9a84c', 'Music': '#7b4fb0', 'Library': '#8a8070',
};

const Timetable = () => {
    const [selectedClass, setSelectedClass] = useState('9A');
    const schedule = timetableData[selectedClass] || timetableData['9A'];

    return (
        <>
            <div className="page-header">
                <h2>Weekly Timetable</h2>
                <select className="filter-select" value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
                    {Object.keys(timetableData).filter(k => k !== 'days' && k !== 'periods').map(c => (
                        <option key={c} value={c}>Class {c}</option>
                    ))}
                </select>
            </div>

            <div className="card" style={{ overflow: 'auto' }}>
                <div className="timetable-grid">
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
                                        <div className="tt-cell" key={`${pi}-${di}`} style={{ background: 'var(--cream)', fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'var(--muted)' }}>
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
            </div>
        </>
    );
};

export default Timetable;
