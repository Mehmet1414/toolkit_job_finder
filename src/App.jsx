import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJob from "./components/addJob";
import JobList from "./pages/jobListPage";
import "../public/css/App.scss";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/add-job" element={<AddJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
