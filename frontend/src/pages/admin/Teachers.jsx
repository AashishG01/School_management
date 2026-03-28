import { teachers } from '../../data/teachers';

const Teachers = () => {
    return (
        <>
            <div className="page-header">
                <h2>Teaching Staff</h2>
                <button className="btn btn-primary">➕ Add Teacher</button>
            </div>

            <div className="card">
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Teacher</th>
                                <th>Subjects</th>
                                <th>Classes</th>
                                <th>Qualification</th>
                                <th>Class Teacher</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map(t => (
                                <tr key={t.id}>
                                    <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>{t.id}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(74,124,89,0.1)', display: 'grid', placeItems: 'center', fontSize: '14px', fontWeight: 700, fontFamily: "'Playfair Display', serif", color: 'var(--sage)', flexShrink: 0 }}>
                                                {t.name[0]}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '13px' }}>{t.name}</div>
                                                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                            {t.subjects.map((s, i) => (
                                                <span key={i} style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,124,89,0.08)', color: 'var(--sage)', fontFamily: "'DM Mono', monospace" }}>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td style={{ fontSize: '12px', fontFamily: "'DM Mono', monospace", color: 'var(--muted)' }}>
                                        {t.classes.slice(0, 3).join(', ')}{t.classes.length > 3 ? ` +${t.classes.length - 3}` : ''}
                                    </td>
                                    <td style={{ fontSize: '11px', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.qualification}</td>
                                    <td>
                                        {t.classTeacher ? (
                                            <span className="status-chip paid">{t.classTeacher}</span>
                                        ) : (
                                            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>—</span>
                                        )}
                                    </td>
                                    <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'var(--muted)' }}>{t.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Teachers;
