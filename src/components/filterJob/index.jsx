import { useRef } from "react";
import { useDispatch } from "react-redux";
import { sortOptions, statusOptions, workTypeOptions } from "../../Constans";
import {
  filterBySort,
  filterByStatus,
  filterByWorkType,
  clearFilter,
  handleSearch,
} from "../../redux/jobSlice";

const FilterJob = () => {
  const inputRef = useRef();
  const optRef = useRef();

  const dispatch = useDispatch();

  const handleChangeSort = (e) => {
    dispatch(filterBySort(e.target.value));
  };
  const handleChangeStatus = (e) => {
    dispatch(filterByStatus(e.target.value));
  };
  const handleChangeWorkType = (e) => {
    dispatch(filterByWorkType(e.target.value));
  };
  const handleChange = (e) => {
    dispatch(handleSearch(e.target.value));
  };

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    optRef.current.value = "Seciniz";
    dispatch(clearFilter());
  };
  return (
    <>
      <div className="contaniner_filter">
        <h1>Filtreleme Formu</h1>
        <form>
          <div className="input_group">
            <div>
              <label htmlFor="company">Firma</label>
              <input
                onChange={handleChange}
                name="company"
                placeholder="Firma ara.."
                type="text"
                id="company"
                ref={inputRef}
              />
            </div>
            <div>
              <label htmlFor="position">Pozisyon</label>
              <input
                onChange={handleChange}
                name="position"
                placeholder="Pozisyon ara..."
                type="text"
                id="position"
                ref={inputRef}
              />
            </div>
            <div>
              <label htmlFor="location">Lokasyon</label>
              <input
                onChange={handleChange}
                name="location"
                placeholder="Lokasyon ara..."
                type="text"
                id="location"
                ref={inputRef}
              />
            </div>
          </div>
          <div className="select_group">
            <div>
              <label htmlFor="status">Zaman Tipi</label>
              <select
                onChange={handleChangeStatus}
                name="status"
                id="status"
                ref={optRef}
              >
                <option>Seciniz</option>
                {statusOptions.map((opt, index) => (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="work_type">Calisma Sekli</label>
              <select
                onChange={handleChangeWorkType}
                name="work_type"
                id="work_type"
                ref={optRef}
              >
                <option>Seciniz</option>
                {workTypeOptions.map((opt, index) => (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date">Sirala</label>
              <select ref={optRef} onChange={handleChangeSort}>
                <option>Seciniz</option>
                {sortOptions.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={handleClick}>Filtreyi Temizle</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterJob;
