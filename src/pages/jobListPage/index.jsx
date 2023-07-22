import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setJob } from "../../redux/jobSlice";

const JobList = () => {
  const dispatch = useDispatch();

  const jobState = useSelector((store) => store.jobState.jobs);
  console.log(" jobState>>>", jobState);
  const number = [0, 2, 4, 6, 8, 10, 12, 14,16,18,20];

  useEffect(() => {
    (async () => {
      const JobResponce = await axios.get("http://localhost:3060/jops");

      //console.log("JobResponce >>",JobResponce.data)
      dispatch(setJob(JobResponce.data));
    })();
  }, []);

  return (
    <>
      <div className="container">
        <b>
          <span>{jobState.length}</span> <u>is Bulundu</u>{" "}
        </b>
        <table>
          <tr>
            <th>index</th>
            <th>Firma</th>
            <th>Pozisyon</th>
            <th>Lokasyon</th>
            <th>Zaman Tipi</th>
            <th>Calisma Sekli</th>
            <th>Tarih</th>
          </tr>

          {jobState.map((item, index) => (
            <tr
              key={index}
              className={number.includes(index) ? "tek" : "cift"}
            >
              <td>{item.id}</td>
              <td><Link to={""}>{item.company}</Link></td>
              <td>{item.position}</td>
              <td>{item.location}</td>
              <td>{item.status}</td>
              <td>{item.work_type}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default JobList;
