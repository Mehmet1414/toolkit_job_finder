import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../../public/css/_addJob.scss";
import { statusOptions, workTypeOptions } from "../../Constans";
import { editedJob } from "../../redux/jobSlice";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.jobState.editJob);
  //console.log("editState",state.id)
  const [stateForm, setStateForm] = useState(null);
  useEffect(() => {
    const stateValue = state
      ? state
      : {
          company: "",
          position: "",
          location: "",
          status: "",
          work_type: "",
          date: "",
        };
    setStateForm(stateValue);
  }, []);

  return (
    <>
      <div className="container">
        <h1> {state.id ? "Verileri Güncelle" : "Yeni Is Ekle"}</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            if (state.id) {
              await axios.put(
                `http://localhost:3060/jops/${state.id}`,
                formJson
              );
              dispatch(editedJob({ id: state.id, editedJob: stateForm }));
              navigate("/");
            } else {
              await axios.post("http://localhost:3060/jops", formJson);
              console.log("formJson >>>", formJson);
            }

            navigate("/");
          }}
        >
          <div className="div_1">
            <div className="input">
              <label htmlFor="company">Firma</label>
              <input
                name="company"
                placeholder="Firma Adini Giriniz.."
                type="text"
                id="company"
                required
                value={stateForm?.company}
                onChange={(e) =>
                  setStateForm({ ...stateForm, company: e.target.value })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="position">Pozisyon</label>
              <input
                name="position"
                placeholder="Ihtiyac Pozisyonunu Giriniz..."
                type="text"
                id="position"
                required
                value={stateForm?.position}
                onChange={(e) => {
                  setStateForm({ ...stateForm, position: e.target.value });
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="location">Lokasyon</label>
              <input
                name="location"
                placeholder="Firma Lokasyonunu Giriniz..."
                type="text"
                id="location"
                required
                value={stateForm?.location}
                onChange={(e) => {
                  setStateForm({ ...stateForm, location: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="div_2">
            <div className="select">
              <label htmlFor="status">Zaman Tipi</label>
              <select name="status" id="status" required>
                <option>Seciniz</option>
                {statusOptions.map((opt, index) => (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="select">
              <label htmlFor="work_type">Calisma Sekli</label>
              <select name="work_type" id="work_type" required>
                <option>Seciniz</option>
                {workTypeOptions.map((opt, index) => (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="select">
              <label htmlFor="date">Tarih</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={stateForm?.date}
                onChange={(e) => {
                  setStateForm({ ...stateForm, date: e.target.value });
                }}
              />
            </div>
          </div>
            <div className="btn">
              <button>{state.id ? "güncelle" : "kaydet"}</button>
            </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
