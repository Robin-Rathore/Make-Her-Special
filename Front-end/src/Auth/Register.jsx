import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
// import { setLogin } from "../../state/state";
import "react-toastify/dist/ReactToastify.css";
import { RxCross1 } from "react-icons/rx";

const Register = ({ setAuthPage, setLoginPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

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

  const handleSubmit = async(e)=>{
    
    e.preventDefault()
    try {
      const {data} = await axios.post("http://localhost:8080/api/v1/user/register",{
            name,email,phone,password,address
        })
      if(data.success){
        toast.success("Registered Successfully")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    
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
            <form noValidate onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  placeholder=""
                  name="name"
                  value={name}
                  required="required"
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="first_name"> Name</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder=""
                  name="name"
                  value={email}
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="email">Email</label>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder=""
                  name="password"
                  value={password}
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="phone">Password</label>
              </div>
              <div class="form-group">
                <input
                  type="number"
                  placeholder=""
                  name="phone"
                  value={phone}
                  required="required"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label for="password">Phone</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder=""
                  name="address"
                  value={address}
                  required="required"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label for="password">Address</label>
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
    <Toaster/>
    </>
  );
};

export default Register;
