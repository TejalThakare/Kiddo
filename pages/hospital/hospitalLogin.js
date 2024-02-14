import React from "react";
export default function hospitalLogin() {
  return (
    <>
      <div
        className="modal fade"
        id="modalopen"
        tabindex="-1"
        role="dialog"
        // aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" style={{ marginLeft: "35%" }}>
                <b> KiddoShield</b>
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">╳</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="login-user">
                <div className="form-outline mb-4 w-50">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    placeholder="Enter email Id"
                    style={{
                      height: "30px",
                      marginLeft: "50%",
                      marginTop: "6%",
                      borderRadius: "15px",
                    }}
                  />
                  <label
                    className="form-label"
                    for="form2Example1"
                    style={{ fontSize: "14px", marginLeft: "50%" }}
                  >
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4 w-50 ">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Password"
                    style={{
                      height: "30px",
                      marginLeft: "50%",
                      borderRadius: "15px",
                    }}
                  />
                  <label
                    className="form-label"
                    for="password"
                    style={{
                      fontSize: "14px",
                      marginLeft: "50%",
                      marginBottom: "5%",
                    }}
                  >
                    Password
                  </label>
                </div>

                <div className="row mb-4" style={{ marginLeft: "7%" }}>
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        for="checkbox"
                        style={{ fontSize: "14px" }}
                      >
                        {" "}
                        Remember me{" "}
                      </label>{" "}
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox"
                        style={{ width: "1.8em;", height: "1.8em" }}
                      />
                    </div>
                  </div>

                  <div className="col" style={{ fontSize: "14px" }}>
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary btn-block mb-4 rounded-pill w-25"
                  style={{ marginLeft: "37%" }}
                >
                  Sign in
                </button>

                <div className="text-center" style={{ fontSize: "14px" }}>
                  <p>
                    Not a member? <a href="/registration.js">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
