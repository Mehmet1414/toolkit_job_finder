import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};
const JobSlice = createSlice({
  name: "JobSLice",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      console.log(state.jobs)
    },
  },
});

export const { setJob } = JobSlice.actions;

export default JobSlice.reducer;
