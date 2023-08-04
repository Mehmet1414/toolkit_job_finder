import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  editJob: {},
  filteredJobs: {},
  initialized: false,
};
const JobSlice = createSlice({
  name: "JobSLice",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      //console.log("jobState", state.jobs);
      state.filteredJobs = action.payload;
      state.initialized = true;
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
    filterByStatus: (state, action) => {
      //console.log(action);
      const filteredStatus = state.jobs.filter(
        (job) => job.status === action.payload
      );
      state.filteredJobs = filteredStatus;
    },
    filterByWorkType: (state, action) => {
      console.log(action.payload);
      const filteredWorkType = state.jobs.filter(
        (job) => job.work_type === action.payload
      );
      state.filteredJobs = filteredWorkType;
    },
    filterBySort: (state, action) => {
      // !console.log(action.payload)
      switch ((state, action.payload)) {
        case "a-z":
          state.filteredJobs.sort((a, b) => {
            if (a.company < b.company) return -1;
            if (a.company > b.company) return 1;
            return 0;
          });
          break;

        case "z-a":
          state.filteredJobs.sort((a, b) => {
            if (a.company < b.company) return 1;
            if (a.company > b.company) return -1;
            return 0;
          });
          break;

        case "En Yeni":
          state.filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case "En Eski":
          state.filteredJobs.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;

        default:
          break;
      }
    },
    handleSearch: (state, action) => {
      const query = action.payload.toLowerCase();
      const filteredSearch = state.jobs.filter(
        (job) =>
          job.company.toLowerCase().includes(query) ||
          job.position.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query)
      );
      state.filteredJobs = filteredSearch;
    },
    clearFilter: (state, action) => {
      state.filteredJobs = state.jobs;
    },
  },
});

export const {
  setJob,
  deleteJob,
  updateJob,
  editedJob,
  filterByStatus,
  filterByWorkType,
  filterBySort,
  clearFilter,
  handleSearch,
} = JobSlice.actions;

export default JobSlice.reducer;
