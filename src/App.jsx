import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/jobListPage";
import "../public/css/App.scss";
import Header from "./components/header";
import AddJob from "./pages/addJob";

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
