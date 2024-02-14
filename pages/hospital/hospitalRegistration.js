import React from "react";
import "../styles/registration.css";

export default function hospitalRegistration() {
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
            <b style={{ fontSize: "80%" }}>Hospital Registration</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="uname"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="hname"
                    aria-describedby="hname"
                    placeholder=" Enter Hospital Name"
                  />
                  <label for="cnumber">Hospital Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="hnumber"
                    aria-describedby="hnumber"
                    placeholder="Enter Hospital number"
                  />
                <label for="cnumber">Emergency Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="enumber"
                    aria-describedby="enumber"
                    placeholder="Enter Emergency number"
                  />

                  <label for="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Hospital address"
                  />
                </div>
                <div class="col-sm">
                  <label for="fname">Hospital Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="hname"
                    aria-describedby="hname"
                    placeholder="Enter your Hospital Name"
                  />
                  <label for="email"> Hospital Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Hospital Email Address"
                  />
                </div>
                <div class="col-sm">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="create a password for your account"
                  />
                </div>
              </div>
            </div>
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
