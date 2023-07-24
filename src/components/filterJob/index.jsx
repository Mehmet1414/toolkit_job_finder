const FilterJob = () => {
  return (
    <>
      <div className="contaniner_filter">
        <h1>Filtreleme Formu</h1>
        <form>
          <div className="input_group">
            <div>
              <label htmlFor="company">Firma</label>
              <input
                name="company"
                placeholder="Firma Adini Giriniz.."
                type="text"
                id="company"
                required=""
                value=""
              />
            </div>
            <div>
              <label htmlFor="position">Pozisyon</label>
              <input
                name="position"
                placeholder="Ihtiyac Pozisyonunu Giriniz..."
                type="text"
                id="position"
                required=""
                value=""
              />
            </div>
            <div>
              <label htmlFor="location">Lokasyon</label>
              <input
                name="location"
                placeholder="Firma Lokasyonunu Giriniz..."
                type="text"
                id="location"
                required=""
                value=""
              />
            </div>
          </div>
          <div className="select_group">
            <div>
              <label htmlFor="status">Zaman Tipi</label>
              <select name="status" id="status" required="">
                <option>Seciniz</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
              </select>
            </div>
            <div>
              <label htmlFor="work_type">Calisma Sekli</label>
              <select name="work_type" id="work_type" required="">
                <option>Seciniz</option>
                <option value="on-site">On-Site</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div>
              <label htmlFor="date">Tarih</label>
              <select name="" id="">
                <option>Seciniz</option>
                <option value="">En Yakin</option>
                <option value="">En Uzak</option>
              </select>
            </div>
            <div>
              <button>kaydet</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterJob;
