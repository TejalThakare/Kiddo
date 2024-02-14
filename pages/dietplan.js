import "../styles/vaccinesByAge.css";
import ThreeToFourMonth from "./vaccinInfoByage/three_fourMonth";
import OneToTwoMonth from "./vaccinInfoByage/one_twoMonth";
import SixTotwelveMonths from "./DietPlan/SixTotwelveMonths"
import "../styles/vaccinationInfoByAge.css";
import OneTotwoyears from "./DietPlan/OneTotwoyear";
import OneTotwoyear from "./DietPlan/OneTotwoyear";
import ThreeToFouryear from "./DietPlan/ThreeToFouryear";
import FiveTosixyears from "./DietPlan/FiveTosixyears";
import SevenToeightyears from "./DietPlan/SevenToeightyears";
import NineTotenyears from "./DietPlan/NineToten.years";
import ElevenTotwelveyears from "./DietPlan/ElevenTotwelveyears";

import { useState } from "react";

export default function DietPlan() {

  const [state, setState] = useState("");
  const ageHandler = (e) => {
    console.log(e.target.id);
    setState(e.target.id);
  };
  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <h2 className="navbar-heading">Diet Plan</h2>
      </nav>

      <div className="container">
        <div className="left">
          <div className="row" id="row--vaccine">
            <div className="col-sm">
              <table className="table table-hover" onClick={ageHandler}>
                <tr scope="col">
                  <th className="vaccine-age" scope="col">
                    <i className="fas fa-home"></i>
                    &nbsp;Parent
                  </th>
                </tr>
                <tr scope="col">
                  <th className="vaccine-age" scope="col">
                    Diet Plan By Age
                  </th>
                </tr>
                <tr scope="col">
                  <td id="SixTotwelveMonths" className="vaccine-age" scope="col">
                    6-12 Months
                  </td>
                </tr>
                <tr scope="col">
                  <td id="OneTotwoyear" className="vaccine-age" scope="col">
                    1-2 Years
                  </td>
                </tr>{" "}
                <tr scope="col">
                  <td id="ThreeTofouryear" className="vaccine-age" scope="col">
                    3-4 Years
                  </td>
                </tr>{" "}
                <tr scope="col">
                  <td id="FiveTosixyears" className="vaccine-age" scope="col">
                  5-6 Years
                  </td>
                </tr>{" "}
                <tr scope="col">
                  <td id="SevenToeightyears" className="vaccine-age" scope="col">
                    7-8 Years
                  </td>
                </tr>{" "}
                <tr scope="col">
                  <td id="NineTotenyears" className="vaccine-age" scope="col">
                    9-10 Years
                  </td>
                </tr>{" "}
                <tr scope="col">
                  <td id="ElevenTotwelveyears" className="vaccine-age" scope="col">
                    11-12 Years
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-sm">
              {/* <OneToTwoMonth></OneToTwoMonth> */}
              {/* hii */}
            </div>
          </div>
        </div>
        <div className="right">
        {state === "SixTotwelveMonths" ? <SixTotwelveMonths /> : null}
          {state === "OneTotwoyear" ? <OneTotwoyear/> : null}
          {state === "ThreeTofouryear" ? <ThreeToFouryear /> : null}
          {state === "FiveTosixyears" ? <FiveTosixyears /> : null}
          {state === "SevenToeightyears" ? <SevenToeightyears /> : null}
          {state === "NineTotenyears" ? <NineTotenyears /> : null}
          {state === "ElevenTotwelveyears" ? <ElevenTotwelveyears /> : null}

        </div>
      </div>
    </>
  );
}
