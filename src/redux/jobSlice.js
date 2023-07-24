import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  editJob: {},
};
const JobSlice = createSlice({
  name: "JobSLice",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      //console.log("jobState", state.jobs);
    },
    deleteJob: (state, action) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      state.jobs.splice(index, 1);
      //console.log("delete.job>>>", action);
    },
    updateJob: (state, action) => {
      state.editJob = action.payload;

      //console.log("editData >>", action.payload);
    },
    editedJob: (state, action) => {
      const { id, editedJob } = action.payload;
      const index = state.jobs.findIndex((job) => job.id === id);
      if (index !== -3) {
        state.jobs[index] = editedJob;
        //console.log("editedJob>>>>",action.payload)
      }
    },
  },
});

export const { setJob, deleteJob, updateJob,editedJob } = JobSlice.actions;

export default JobSlice.reducer;
