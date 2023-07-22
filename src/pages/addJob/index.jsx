import axios from "axios";
import "../../../public/css/_addJob.scss";

const AddJob = () => {
  
  return (
    <>
      <div className="container">
        <h1>Yeni Is Girisi</h1>
        <form
          onSubmit={async (e) => {
              const formData = new FormData(e.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              
              console.log("formJson >>>", formJson);
              const formResponse = await axios.post(
                  "http://localhost:3060/jops",
                  formJson
                  );
            //console.log("formResponse",formResponse)
            
            e.preventDefault();
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
