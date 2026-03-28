export const feeStructure = [
    { type: 'Tuition Fee', amount: 72000, frequency: 'Annual', perTerm: 12000 },
    { type: 'Transport Fee', amount: 18000, frequency: 'Annual', perTerm: 3000 },
    { type: 'Exam Fee', amount: 4800, frequency: 'Annual', perTerm: 800 },
    { type: 'Lab Fee', amount: 6000, frequency: 'Annual', perTerm: 1000 },
    { type: 'Library Fee', amount: 2400, frequency: 'Annual', perTerm: 400 },
    { type: 'Miscellaneous', amount: 3600, frequency: 'Annual', perTerm: 600 },
];

export const feeCollection = [
    { type: 'Tuition Fee', collected: 580000, total: 720000, percent: 80 },
    { type: 'Transport', collected: 110000, total: 160000, percent: 68 },
    { type: 'Exam Fee', collected: 60000, total: 80000, percent: 75 },
    { type: 'Miscellaneous', collected: 50000, total: 90000, percent: 55 },
];

export const feePayments = [
    { id: 'FEE001', studentName: 'Aarav Sharma', class: '9A', type: 'Tuition Fee', amount: 12000, date: '2026-03-01', method: 'Online', status: 'paid', receipt: 'RCP-2026-001' },
    { id: 'FEE002', studentName: 'Priya Gupta', class: '9A', type: 'Tuition Fee', amount: 12000, date: '2026-03-02', method: 'Cash', status: 'paid', receipt: 'RCP-2026-002' },
    { id: 'FEE003', studentName: 'Arjun Nair', class: '10B', type: 'Tuition Fee', amount: 12000, date: '2026-03-05', method: 'Bank Transfer', status: 'paid', receipt: 'RCP-2026-003' },
    { id: 'FEE004', studentName: 'Dev Kapoor', class: '7A', type: 'Transport Fee', amount: 3000, date: '2026-03-10', method: 'Online', status: 'due', receipt: null },
    { id: 'FEE005', studentName: 'Rohan Desai', class: '9A', type: 'Exam Fee', amount: 800, date: '2026-03-12', method: 'Cash', status: 'due', receipt: null },
    { id: 'FEE006', studentName: 'Kabir Singh', class: '9B', type: 'Tuition Fee', amount: 12000, date: '2026-03-15', method: 'Online', status: 'paid', receipt: 'RCP-2026-006' },
    { id: 'FEE007', studentName: 'Riya Sharma', class: '7A', type: 'Tuition Fee', amount: 12000, date: '2026-03-18', method: 'Bank Transfer', status: 'pending', receipt: null },
    { id: 'FEE008', studentName: 'Ananya Reddy', class: '10A', type: 'Lab Fee', amount: 1000, date: '2026-03-20', method: 'Cash', status: 'paid', receipt: 'RCP-2026-008' },
];

export const monthlyRevenue = [
    { month: 'Aug', revenue: 680000 },
    { month: 'Sep', revenue: 520000 },
    { month: 'Oct', revenue: 450000 },
    { month: 'Nov', revenue: 380000 },
    { month: 'Dec', revenue: 290000 },
    { month: 'Jan', revenue: 720000 },
    { month: 'Feb', revenue: 610000 },
    { month: 'Mar', revenue: 820000 },
];

export const parentFeeStatus = [
    { name: 'Tuition Fee — Term 2', amount: '₹12,000', status: 'paid' },
    { name: 'Transport Fee', amount: '₹3,500', status: 'paid' },
    { name: 'Exam Fee — Annual', amount: '₹800', status: 'due' },
];
