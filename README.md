*Task Management Application
 ** Overview
This project is a Task Management Application built using React and Redux for managing tasks with basic CRUD operations (Create, Read, Update, Delete). The tasks can be categorized as "To-Do", "In-Progress", or "Completed", with features to edit and delete tasks. Pop-up modals are used for task editing and notifications are displayed for success or error states.

** Features
- Add Task: Create a new task with a description and status.
- Edit Task: Update the description or status of an existing task.
- Delete Task: Remove a task from the list.
- Task Status: Tasks can have three statuses:
-- To-Do
-- In-Progress
-- Completed
- Pop-up Modal: Tasks are edited via a pop-up modal that centers on the screen.
- Bottom Notifications (Toast): Success and error notifications appear at the bottom of the screen after task operations.
** Tech Stack
 - Frontend:

-- React
-- Redux (State Management)
-- Tailwind CSS (Styling)
-- Backend:

-- APIs for CRUD operations (using fetchTasks, createTask, updateTask, deleteTask)
- Tooling:

-- Redux Toolkit for managing async actions and state.
-- Tailwind CSS for styling and responsive design.
* Setup Instructions
- Prerequisites
- Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm or yarn
** Installation
- Clone the repository:
-- git clone https://github.com/your-username/your-project.git
-- cd your-project
-- Install dependencies: (npm install ) or you can also yarn

-- Start the application: ( npm run dev )

-- The application will run on http://localhost:5173 by default ( vite is used as bundler in this project)

- Building for Production
-- To build the project for production:
-- npm run build
-- This will create a build/ folder with optimized assets for deployment.

Project Structure

.
├── public/                  # Public static files
├── src/
│   ├── components/          # React components (e.g., EditForm, TaskList, etc.)
│   ├── utils/               # Redux logic (taskSlice, API calls)
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point for React
│   └── ...                  # Other source files
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
** Key Files and Directories:
- src/components: Contains all the React components used in the application, including:

- src/utils/taskSlice.js: Contains the Redux slice for managing tasks, including async thunks for fetching, creating, updating, and deleting tasks.

- src/utils/apis.js: This file contains the API functions for interacting with the backend or external APIs.

** Usage
- Adding a Task:
-- Enter the task description and select the status ("To-Do", "In-Progress", "Completed").
-- Click "Add Task" to save it to the list.
- Editing a Task:
- 
-- Click the "Edit" button next to a task.
-- The pop-up modal will appear, allowing you to update the task description or status.
- Deleting a Task:

-- Click the "Delete" button next to a task, and it will be removed from the list.
** Customization
- Styling: The project uses Tailwind CSS for responsive styling. You can customize the UI by modifying classes directly in the JSX files.
- Redux: All Redux logic is contained within the taskSlice.js file, which you can extend if you need additional features.

Contact
For any questions, feel free to contact me at smazamamu@gmail.com.
