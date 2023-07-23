import { Link } from "react-router-dom"

const Header = () => {

  
  return (
    <>
      <header>
        <Link to={"/"}><h1> <b>Fin</b><span>d</span><b>Job</b> </h1></Link>
        <div>
        <Link to={"/"}>Listele</Link>
        <Link to={"add-job"} onClick ={()=>{
          
        }}>Yeni Ekle <span>+</span> </Link>
        </div>
      </header>
    </>
  )
}

export default Header