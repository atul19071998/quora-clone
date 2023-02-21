import React from "react";
import "../componentcss/Main-content.css";
import { usePostData } from "../CreateContext/PostContext";
const Details = () => {

  let {postData} = usePostData()
  return (
    <div className="details">
      {postData.map((ele) => (
        <div className="detail1" key={ele.Id}>
          <div className="detailimg">
          <div className="detailimg1">
            <img src={ele.logoimage} alt="" />
          </div>
          <div className="detailimg2">
            <h6>{ele.name} 	• <a href="">Follow</a></h6>
          </div>
          </div>
          <div className="detail2">
            <div>
              <h5>{ele.Question}</h5>
            </div>
            <div>
                <h4>{ele.Answer} <a href="">(more)</a> </h4>
            </div>
            <div className="detailsimg">
                <img src={ele.image } alt="" />
            </div>
            <div className="detailcom">
              <div className="detailcom1"><i class="fa-solid fa-arrow-up"> </i>21</div>
              <div className="detailcom2"><i class="fa-solid fa-arrow-down"> </i>15</div>
              <div className="detailcom3"> <i class="fa-regular fa-comment"> </i>2</div>
              <div className="detailcom4"> <i class="fa-solid fa-share-nodes"> </i>3</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
