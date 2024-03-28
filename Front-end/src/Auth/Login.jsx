import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
import "./login.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast"
import { RxCross1 } from "react-icons/rx";

const Login = ({ setAuthPage, setLoginPage }) => {
  // toast.configure();
  // const dispatch = useDispatch();
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post(`http://localhost:3001/login`, {email, password})
  //   .then(result => {
  //     if (!result.data) {
  //       toast.error("Invalid email or password");
  //     }
  //     {
  //       dispatch(
  //         setLogin({
  //           user: result.data,
  //         })
  //       );
  //       navigate("/home");
  //     }
  //   })
  //   .catch(err =>{ 
  //     toast.error("An error occurred while logging in");
  //     console.log(err);
  //   });
  //   toast.success("Ordered Sucessfully, we are directing to the itmes");
    
  // }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
        <div className=" ">
            <RxCross1
              className=" text-[24px] cursor-pointer"
              onClick={() => setLoginPage(false)}
            />
          </div>
          <h1>Hello World.</h1>
          <p>
          Welcome to ChatOnme – your gateway to genuine connections! Dive into a world of instant conversations, vibrant communities, and shared moments. ChatOnme is your go-to social hub, designed for seamless interaction and creative expression.
          </p>
          <span>Don't you have an account?</span>
          <button onClick={() =>{
            setAuthPage(true);
            setLoginPage(false);
          }}>Register</button>
        </div>
        <div className="rightbar">
        <div className="rightbar-form">
          <h1>Login</h1>
          <form >
          <div class="form-group">
                <input
                  type="phone"
                  placeholder=""
                  name="phone"
                  required="required"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label for="phone">Phone</label>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder=""
                  name="password"
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="password">Password</label>
              </div>
            {/* {err && err} */}
            <button type="submit" class="btn">
                Login
              </button>
          </form>
          <div className="mobilelogin">
            <span>Don't you have an account?</span>
            <Link to={"/register"}>
              <button
                onClick={() => {
                  setLoginPage(true);
                  setAuthPage(false);
                }}
              >
                Register
              </button>
              </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;