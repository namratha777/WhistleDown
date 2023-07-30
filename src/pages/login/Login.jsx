import { Link } from "react-router-dom";
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const {login} = useContext(AuthContext);
  const handleLogin = ()=>{
    login();
  }


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Whistle Down</h1>
          <p>
            fsiuohfsio iuefgewuigfuieiu yegfuigfuioeagh iergewuigiuegfiu uegfuiegefuiegfui
            foihuofhojfheuio igigfuiewgrfuiw iuegfuiewgfuiewh hefuiegfui egfueigefui,ifgewuiwgf.
          </p>
          <span>Don't you have an account?</span>
          <Link to= "/register">
          <button>Register</button>
          </Link>
          
        </div>
        <div className="right">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
</div>
  );
};

export default Login;
