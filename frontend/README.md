# Acadex — School Management System (MVP)

A comprehensive, highly interactive frontend React application designed for showcasing a premium School Management System during client pitch presentations. 

The application offers 4 distinct role-based dashboards (Admin, Teacher, Parent, Student) and boasts a premium editorial design system utilizing CSS variables. It includes 50+ fully interactive features and simulated AI capabilities to create a high-impact demo experience.

## ✨ Key Features

### Role-Based Dashboards
- **Admin Dashboard**: Live statistical overviews, student management, admissions workflows, fee collection progress, timetable grids, staff payroll processing, and report card generation.
- **Teacher Dashboard**: Daily schedule tracking, interactive attendance marking (P/A/L/E), assignment creation, and live-calculating grade entry tables.
- **Parent Portal**: Child overview with attendance charts, detailed grading breakdowns, and realistic interactive fee payment flows.
- **Student Portal**: Personalized week timetable, grade tracking, attendance history, and one-click assignment submission.

### 🤖 AI Demo Simulations
Five cutting-edge "AI" features specifically built to wow during product demos:
1. **AI Global Search**: A command palette (`ctrl+k` style) that simulates natural language understanding (e.g., "Find fee receipt for Aryan") to bypass traditional menu navigation.
2. **Smart Timetable Generator**: Auto-generates weekly schedules by simulating constraint-satisfaction algorithms to prevent teacher double-booking.
3. **AI Doubt Solver**: A 24/7 floating localized chatbot widget for students to receive conversational homework help.
4. **Practice Quiz Generator**: Allows teachers to automatically draft multiple-choice quizzes based on topics and difficulty levels.
5. **AI Revision Mode**: Analyzes student performance to detect weak topics (e.g., "Algebra") and offers dynamically generated targeted revision practice.

### Interactive Foundations
- **Global Toast Notification System**: Success/Error/Info pop-ups for every user action.
- **Stateful Modals & Forms**: Data changes perfectly reflect on the UI immediately, from adding a new student to approving admissions candidates.
- **Responsive Layout**: Designed to adapt gracefully to various screen sizes.

## 🛠 Tech Stack
- **Framework**: React.js with Vite
- **Routing**: React Router v6
- **Charting**: Recharts
- **Icons**: Lucide React
- **Styling**: Pure CSS (utilizing root CSS variables and a unified design system)
- **State**: Local React Context & `useState` (optimized for frontend-only state resetting)

## 🚀 Getting Started

To run the project locally for a presentation or development:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:5174` (or the port specified in your console).

## 📂 Project Structure

```
frontend/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components (Sidebar, Topbar, Toast, AISearch)
│   ├── data/              # Dummy JSON-like modular data (students, fees, attendance)
│   ├── pages/             # 21 modular pages categorized by user role
│   ├── App.jsx            # Application routing configuration
│   ├── main.jsx           # React app entry point
│   └── index.css          # Main styling framework and theme tokens
├── README.md              # Project documentation
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite bundler configuration
```

## 📝 Usage Notes
- **State Persistence**: This is a frontend-only MVP intended for UI/UX demonstration. All added data (new students, announcements, assignments) is stored locally within React's state and will reset upon a hard page refresh, which is ideal for back-to-back client demos.
- **Typography**: The design utilizes "Plus Jakarta Sans" for the primary UI and "JetBrains Mono" for data/numerical representation. Ensure these fonts load correctly for the full premium aesthetic.
