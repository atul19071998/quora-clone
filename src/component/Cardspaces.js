import React from "react";
import "../componentcss/Card.css";
import { CardInfo} from "../component/Card";

let Card  =() => {
    return (
        <>
        {CardInfo.map((ele) => (
            <div className="card-container">
                  <div className="outer-img">
                    <img src={ele.outerimg} alt="wrong" />
                  </div>
                  <div className="inner-img">
                    <img src={ele.innerimg} alt="wrong"/>
                  </div>
                  <div className="description-info">
                  <div className="des-head">{ele.hname}</div>
                  <p>{ele.description}</p>
                  </div>
            </div>
        ))

        }
        </>
    )
}
export default Card;