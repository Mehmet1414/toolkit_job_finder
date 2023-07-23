import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../../public/css/_addJob.scss";

const AddJob = () => {
  const navigate = useNavigate();
  //console.log(params.id)
  const state = useSelector((state) => state.jobState.editJob);
  //console.log("editState",state)

  

  return (
    <>
      <div className="container">
        <h1> {state.id ? "Verileri Güncelle" : "Yeni Is Girisi"}</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            if (state.id) {
              await axios.post(`http://localhost:3060/jops/${state.id}`, formJson);
              
            } else {
              
              //console.log("formJson >>>", formJson);
              await axios.post("http://localhost:3060/jops", formJson);
            }
            
            navigate("/");
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
              value={state ? state.company : ""}
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
              value={state ? state.position : ""}
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
              value={state ? state.location : ""}
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
              <input
                type="date"
                id="date"
                name="date"
                required
                value={state ? state.date : ""}
              />
            </div>
            <div>
              <button>{state.id ? "güncelle" : "kaydet"}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
