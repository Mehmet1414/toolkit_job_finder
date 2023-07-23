import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setJob, deleteJob } from "../../redux/jobSlice";



const JobList = () => {
  const dispatch = useDispatch();
  
  const jobState = useSelector((store) => store.jobState.jobs);
  //console.log(" jobState>>>", jobState);
  const count = 1000;
  const number = Array.from({ length: count }, (_, index) => index * 2);
  
  useEffect(() => {
    (async () => {
      const JobResponce = await axios.get("http://localhost:3060/jops");
      
      //console.log("JobResponce >>",JobResponce.data)
      dispatch(setJob(JobResponce.data));
    })();
  }, []);
  
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3060/jops/${id}`);
    dispatch(deleteJob(id));
  };
  

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
            <tr key={index} className={number.includes(index) ? "tek" : "cift"}>
              <td className="index">
                <button className="btn-edit">
                  <i className="fa-solid fa-square-pen"></i>
                </button>
                <button className="btn-delete" onClick={()=> handleDelete(item.id)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
              <td>
                <Link to={""}>{item.company}</Link>
              </td>
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
