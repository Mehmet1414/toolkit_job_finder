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
      console.log("jobState",state.jobs)
    },
    deleteJob:(state,action)=>{
      state.jobs.splice(action.id,1)
      console.log("item.id>>>",action)
      
    }
  },
});

export const { setJob,deleteJob } = JobSlice.actions;

export default JobSlice.reducer;
