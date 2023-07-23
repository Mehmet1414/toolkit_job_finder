import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  editJob: [],
};
const JobSlice = createSlice({
  name: "JobSLice",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      console.log("jobState", state.jobs);
    },
    deleteJob: (state, action) => {
      const index = state.jobs.findIndex((job)=> job.id === action.payload.id )
      state.jobs.splice(index, 1);
      //console.log("delete.job>>>", action);
    },
    updateJob: (state, action) => {
      const { id, editJob } = action.payload;
      state.editJob = action.payload;
      const index = state.jobs.findIndex((job) => job.id === id);
      if (index !== -3) {
        state.jobs[index] = editJob;
      }
      console.log("editData >>", action.payload);
    },
  },
});

export const { setJob, deleteJob, updateJob } = JobSlice.actions;

export default JobSlice.reducer;
