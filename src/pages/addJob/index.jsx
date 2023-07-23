import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../public/css/_addJob.scss";

const AddJob = () => {
  const navigate = useNavigate()
  const params = useParams()
  const[updateJobData,setUpdateJobData]= useState({})

  useEffect(()=>{
    (async()=>{
      if (params.id) {
        const responseData = await axios.get(`http://localhost:3060/jops/${params.id}`)
        console.log("responseData>>",responseData)
        setUpdateJobData(responseData.data)
        return
      }
    })
    ()
  },[params.id])
  return (
    <>
      <div className="container">
        <h1>Yeni Is Girisi</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            if (params) {
              await axios.put(`http://localhost:3060/jops/${params.id}`,formJson)
            } else {
              
              //console.log("formJson >>>", formJson);
              await axios.post("http://localhost:3060/jops", formJson);
            }

            navigate("/")

          }}
        >
          <div>
            <label htmlFor="company">Firma</label>
            <input
              name="company"
              placeholder="Firma Adini Giriniz.."
              type="text"
              id="company"
              required
            />
          </div>
          <div>
            <label htmlFor="position">Pozisyon</label>
            <input
              name="position"
              placeholder="Ihtiyac Pozisyonunu Giriniz..."
              type="text"
              id="position"
              required
            />
          </div>
          <div>
            <label htmlFor="location">Lokasyon</label>
            <input
              name="location"
              placeholder="Firma Lokasyonunu Giriniz..."
              type="text"
              id="location"
              required
            />
          </div>
          <div>
            <div>
              <label htmlFor="status">Zaman Tipi</label>
              <select name="status" id="status" required>
                <option>Seciniz</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
              </select>
            </div>
            <div>
              <label htmlFor="work_type">Calisma Sekli</label>
              <select name="work_type" id="work_type" required>
                <option>Seciniz</option>
                <option value="on-site">On-Site</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div>
              <label htmlFor="date">Tarih</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div>
              <button>Kaydet</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
