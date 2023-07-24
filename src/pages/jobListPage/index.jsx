import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FilterJob from "../../components/filterJob";
import { setJob, deleteJob, updateJob } from "../../redux/jobSlice";



const JobList = () => {
  const navigate = useNavigate()
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
  
  const handleDelete = async (item) => {
    await axios.delete(`http://localhost:3060/jops/${item.id}`);
    dispatch(deleteJob(item));
  };
 
  const handleClick = (item)=>{
    dispatch(updateJob(item))
    navigate(`/add-job`)
  }

  return (
    <>
    <FilterJob />
      <div className="container">
        <h1>
          Tüm Islerin Listesi
        </h1>
        <table>
          <tbody>

          <tr>
            <th><b>
          <u>Toplam:</u> <span>{jobState.length}</span> 
        </b></th>
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
                <span>{index +1}.</span>
                <div>
                <button className="btn-edit" onClick={()=> handleClick(item)} >
                  <i className="fa-solid fa-square-pen"></i>
                </button>
                <button className="btn-delete" onClick={()=> handleDelete(item)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
                </div>
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
          </tbody>

        </table>
      </div>
    </>
  );
};

export default JobList;
