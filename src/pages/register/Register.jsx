import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Dear Gentle Readers</h1>
          <p>
            fsiuohfsio iuefgewuigfuieiu yegfuigfuioeagh iergewuigiuegfiu uegfuiegefuiegfui
            foihuofhojfheuio igigfuiewgrfuiw iuegfuiewgfuiewh hefuiegfui egfueigefui,ifgewuiwgf.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Register</button>
          </form>
        </div>
      </div>
</div>
  );
};

export default Register;