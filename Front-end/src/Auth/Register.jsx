import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setLogin } from "../../state/state";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross1 } from "react-icons/rx";

const Register = ({ setAuthPage, setLoginPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   axios.post(`http://localhost:3001/register`, {name, email, password})
  //   .then(result => {
  //     dispatch(
  //       setLogin({
  //         user : result.data,
  //       })
  //     );
  //     navigate("/home");
  //   })
  //   .catch(err => {
  //     toast.error("User Is Already Exist's. Please Login");
  //     console.log(err)})
  // };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <div className=" ">
            <RxCross1
              className=" text-[24px] cursor-pointer"
              onClick={() => setAuthPage(false)}
            />
          </div>
          <h1>MakeHerSpecial</h1>
          <p>
            Unlock the full ChatOnme experience! Sign up now to connect, share,
            and engage with a dynamic community. Your social journey begins with
            a simple registration. Join ChatOnme today and let the connections
            begin!
          </p>
          <span>Do you have an account?</span>
          <button
            onClick={() => {
              setLoginPage(true);
              setAuthPage(false);
            }}
          >
            Login
          </button>
        </div>
        <div className="rightbar">
          <div className="rightbar-form">
            <h1>Sign Up</h1>
            <p>
              Welcome to MakeHerSpecial! It's quick and easy to set up an
              account
            </p>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  placeholder=""
                  name="name"
                  required="required"
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="first_name">First Name</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder=""
                  name="name"
                  required="required"
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="last_name">Last Name</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder=""
                  name="name"
                  required="required"
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="email">Email</label>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  placeholder=""
                  name="email"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
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
              {/* <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            /> */}
              {/* {err && err}  */}
              <button type="submit" class="btn">
                Sign Up
              </button>
              <span>By continuing, I agree to the Terms of Use and Privacy Policy.</span>
            </form>
              <div className="mobilelogin">
              <span>Do you have an account?</span>
              <Link to={"/login"}>
              <button
                onClick={() => {
                  setLoginPage(true);
                  setAuthPage(false);
                }}
              >
                Login
              </button>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
