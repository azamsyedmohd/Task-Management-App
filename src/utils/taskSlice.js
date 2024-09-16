import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasks, createTask, updateTask, deleteTask } from "./apis";
// Async Thunks
export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchTasks();
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      return rejectWithValue("Failed to fetch tasks");
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task, { rejectWithValue }) => {
    try {
      return await createTask(task);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      return rejectWithValue("Failed to add task");
    }
  }
);

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      return await updateTask(id, updates);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      return rejectWithValue("Failed to update task");
    }
  }
);

export const removeTask = createAsyncThunk(
  "tasks/removeTask",
  async (id, { rejectWithValue }) => {
    try {
      return await deleteTask(id);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      return rejectWithValue("Failed to delete task");
    }
  }
);

// Task Slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
    successMessage: null,
  },
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Tasks
      .addCase(getTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Add Task
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.successMessage = "Task added successfully!";
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Edit Task
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        state.tasks[index] = action.payload;
        state.successMessage = "Task updated successfully!";
      })
      .addCase(editTask.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Remove Task
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.meta.arg);
        state.successMessage = "Task deleted successfully!";
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearMessages } = tasksSlice.actions;
export default tasksSlice.reducer;
