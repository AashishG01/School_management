export const teachers = [
    { id: 'TCH001', name: 'Rahul Mehta', email: 'r.mehta@educore.in', phone: '9988776601', qualification: 'M.Sc Mathematics, B.Ed', subjects: ['Mathematics', 'Algebra'], classes: ['9A', '10B', '8C', '7A'], joiningDate: '2018-06-15', classTeacher: '9A' },
    { id: 'TCH002', name: 'Priya Singh', email: 'p.singh@educore.in', phone: '9988776602', qualification: 'M.Sc Physics, B.Ed', subjects: ['Science', 'Physics'], classes: ['9A', '9B', '10A', '10B'], joiningDate: '2019-04-01', classTeacher: '10A' },
    { id: 'TCH003', name: 'Samuel D\'Costa', email: 's.dcosta@educore.in', phone: '9988776603', qualification: 'M.A English Literature', subjects: ['English'], classes: ['9A', '9B', '8A', '8B', '7A'], joiningDate: '2017-07-01', classTeacher: null },
    { id: 'TCH004', name: 'Lakshmi Rao', email: 'l.rao@educore.in', phone: '9988776604', qualification: 'M.A History, B.Ed', subjects: ['History', 'Civics'], classes: ['9A', '10A', '10B', '8A'], joiningDate: '2020-04-01', classTeacher: '8A' },
    { id: 'TCH005', name: 'Amit Verma', email: 'a.verma@educore.in', phone: '9988776605', qualification: 'M.Sc Chemistry, B.Ed', subjects: ['Chemistry'], classes: ['10A', '10B', '9A', '9B'], joiningDate: '2019-08-01', classTeacher: '10B' },
    { id: 'TCH006', name: 'Sneha Deshpande', email: 's.deshpande@educore.in', phone: '9988776606', qualification: 'M.A Hindi', subjects: ['Hindi'], classes: ['6A', '6B', '7A', '7B', '8A', '8B'], joiningDate: '2021-04-01', classTeacher: '7A' },
    { id: 'TCH007', name: 'Rajiv Menon', email: 'r.menon@educore.in', phone: '9988776607', qualification: 'M.Sc Computer Science', subjects: ['Computer Science'], classes: ['9A', '9B', '10A', '10B', '8A', '8B'], joiningDate: '2020-06-15', classTeacher: '9B' },
    { id: 'TCH008', name: 'Fatima Begum', email: 'f.begum@educore.in', phone: '9988776608', qualification: 'M.A Geography', subjects: ['Geography'], classes: ['8A', '8B', '8C', '9A', '9B'], joiningDate: '2018-04-01', classTeacher: '8B' },
    { id: 'TCH009', name: 'Karan Malhotra', email: 'k.malhotra@educore.in', phone: '9988776609', qualification: 'M.P.Ed Physical Education', subjects: ['Physical Education'], classes: ['5A', '5B', '6A', '6B', '7A', '7B', '8A', '8B', '9A', '9B'], joiningDate: '2021-01-10', classTeacher: null },
    { id: 'TCH010', name: 'Divya Nambiar', email: 'd.nambiar@educore.in', phone: '9988776610', qualification: 'M.Sc Biology, B.Ed', subjects: ['Biology', 'Science'], classes: ['7A', '7B', '8A', '8B', '9A'], joiningDate: '2022-04-01', classTeacher: '7B' },
    { id: 'TCH011', name: 'Vikram Chauhan', email: 'v.chauhan@educore.in', phone: '9988776611', qualification: 'M.A Sanskrit', subjects: ['Sanskrit'], classes: ['6A', '6B', '7A', '7B', '8A'], joiningDate: '2017-04-01', classTeacher: '6A' },
    { id: 'TCH012', name: 'Neha Kapoor', email: 'n.kapoor@educore.in', phone: '9988776612', qualification: 'MFA Fine Arts', subjects: ['Art'], classes: ['5A', '5B', '5C', '6A', '6B', '7A', '7B'], joiningDate: '2023-04-01', classTeacher: null },
    { id: 'TCH013', name: 'Arjun Chadha', email: 'a.chadha@educore.in', phone: '9988776613', qualification: 'M.Sc Mathematics, Ph.D', subjects: ['Mathematics'], classes: ['5A', '5B', '5C', '6A', '6B'], joiningDate: '2016-04-01', classTeacher: '5A' },
    { id: 'TCH014', name: 'Pooja Agarwal', email: 'p.agarwal@educore.in', phone: '9988776614', qualification: 'M.A English, CELTA', subjects: ['English'], classes: ['5A', '5B', '6A', '6B', '7A', '7B'], joiningDate: '2022-08-01', classTeacher: '6B' },
    { id: 'TCH015', name: 'Mohammed Ali', email: 'm.ali@educore.in', phone: '9988776615', qualification: 'B.Mus Music Theory', subjects: ['Music'], classes: ['5A', '5B', '5C', '6A', '6B', '7A', '7B', '8A'], joiningDate: '2023-06-01', classTeacher: null },
];

export const payroll = [
    { teacherId: 'TCH001', name: 'Rahul Mehta', basic: 45000, hra: 18000, ta: 3000, deductions: 5400, net: 60600, month: 'March 2026', status: 'paid' },
    { teacherId: 'TCH002', name: 'Priya Singh', basic: 42000, hra: 16800, ta: 3000, deductions: 5040, net: 56760, month: 'March 2026', status: 'paid' },
    { teacherId: 'TCH003', name: 'Samuel D\'Costa', basic: 48000, hra: 19200, ta: 3000, deductions: 5760, net: 64440, month: 'March 2026', status: 'paid' },
    { teacherId: 'TCH004', name: 'Lakshmi Rao', basic: 40000, hra: 16000, ta: 3000, deductions: 4800, net: 54200, month: 'March 2026', status: 'pending' },
    { teacherId: 'TCH005', name: 'Amit Verma', basic: 42000, hra: 16800, ta: 3000, deductions: 5040, net: 56760, month: 'March 2026', status: 'paid' },
    { teacherId: 'TCH006', name: 'Sneha Deshpande', basic: 38000, hra: 15200, ta: 3000, deductions: 4560, net: 51640, month: 'March 2026', status: 'paid' },
    { teacherId: 'TCH007', name: 'Rajiv Menon', basic: 44000, hra: 17600, ta: 3000, deductions: 5280, net: 59320, month: 'March 2026', status: 'pending' },
];
