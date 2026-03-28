import { classes } from '../../data/classes';

const Classes = () => {
    return (
        <>
            <div className="page-header">
                <h2>Academic Structure</h2>
                <button className="btn btn-primary">➕ Add Class</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                {classes.map((cls) => (
                    <div className="card" key={cls.name}>
                        <div className="card-header">
                            <div className="card-title">Class {cls.name}</div>
                            <span className="card-action">{cls.sections.length} sections</span>
                        </div>
                        <div className="card-body">
                            {cls.sections.map((sec) => (
                                <div className="class-card" key={sec.section}>
                                    <div className="class-card-badge">{cls.name}{sec.section}</div>
                                    <div className="class-card-info">
                                        <div className="class-card-name">
                                            Section {sec.section} · {sec.students} students
                                        </div>
                                        <div className="class-card-meta">
                                            CT: {sec.classTeacher}
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '16px', color: 'var(--muted)' }}>›</span>
                                </div>
                            ))}
                            <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {cls.sections[0].subjects.slice(0, 5).map((sub, i) => (
                                    <span key={i} style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '999px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'DM Mono', monospace", color: 'var(--muted)' }}>
                                        {sub}
                                    </span>
                                ))}
                                {cls.sections[0].subjects.length > 5 && (
                                    <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '999px', background: 'var(--paper)', border: '1px solid var(--border)', fontFamily: "'DM Mono', monospace", color: 'var(--muted)' }}>
                                        +{cls.sections[0].subjects.length - 5} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Classes;
