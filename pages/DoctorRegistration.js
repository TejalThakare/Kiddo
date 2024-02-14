import React from "react";
import "../styles/registration.css";

export default function DoctorRegistration() {
function username(){
  let uname=document.getElementById("uname").value;
  console.log(uname);

}
function mobnum(){
  let mobnum=parseInt(document.getElementById("cnumber").value);
  console.log(mobnum);

}
function fname(){
  let fname=document.getElementById("fname").value;
  console.log(fname);

}
function email(){

}
function lname(){
  let lname=document.getElementById("lname").value;
  console.log(lname);

}
function password(){

}
function specialization(){
  let spec=document.getElementById("specialization").value;
  console.log(spec);

}
  return (
    <>
      <h1
        id="header"
        style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
        className="text-center"
      >
        KiddoShield
      </h1>
      <div className="card ">
        <div className="card-body" style={{ marginTop: "2%" }}>
          <h2 className="text-center" id="signUpheader">
            <b>Doctor Sign Up</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="uname">doctor Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    aria-describedby="uname"
                    placeholder=" Enter username"
                    onChange={username}
                  />
                  <label for="cnumber">Mobile number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="cnumber"
                    aria-describedby="cnumber"
                    placeholder="Enter mobile number"
                    onchange={mobnum}
                  />
                </div>
                <div class="col-sm">
                  <label for="fname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    aria-describedby="fname"
                    placeholder="Enter your first name"
                    onchange={fname}
                  />
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Tell us your email id"
                    onchange={email}
                  />
            </div>
                <div class="col-sm">
                  {" "}
                  <label for="lname">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    aria-describedby="lname"
                    placeholder="Enter your last name"
                    onChange={lname}
                  />
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="create a password for your account"
                    onchange={password}
                  />
                  </div>
                  <div>
                  <label for="password">Specialzation</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Specilization"
                    placeholder="create a password for your account"
                    onchange={specialization}
                  />
                </div>
              </div>
            </div>
            ;{/* <div className="form-group"> */}
            {/* <div className="form-check"></div> */}
            <button
              type="submit"
              className="btn btn-info rounded-pill "
              id="signup"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
