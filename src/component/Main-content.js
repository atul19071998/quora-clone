import React from "react";
import "../componentcss/Main-content.css";
import { usePostData } from "../CreateContext/PostContext";
const Details = () => {
  const user = [
    {
      name: "Seeking Truth",
      logoimage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0phVj_II0bh3FgSdhXTW8yk33he0Oo2RvloUcqmny6b_tcIePtgKHj4nuuq0wJ3Uhy0&usqp=CAU",
      question:
        "How do I become more witty, especially in responding to offensive or rude comments?",
      Answer:
        "A guide for you to deal with unthoughtful comments and establish firm boundaries with people in a subtle yet assertive way.",
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-43d6d57e0d3f7d4fb30b2247fef3933c-lq",
        comment:52,
        upvote:6.6,
        downvote:40,
        share:10,
    },
    {
      name: "Living Relation",
      logoimage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/sidharth-malhotra-exclusive_1-three_four.jpg?VersionId=WIxY27jOtO6dd6UrYdl8m4nTtjPTbcdx",
      question: " Sidharth Malhotra REACTS to the big marriage questions?",
      Answer:
        " Sidharth and Kiara have reportedly decided to get married in Chandigarh. A few weeks ago, the two were spotted visiting Manish Malhotra's house and it made their fans speculate that the wedding preparations have finally begun.",
      image:
        " https://www.pinkvilla.com/english/images/2022/11/2129592829_screenshot_2022-11-02-20-20-47-49_1c337646f29875672b5a61192b9010f9_640*360.jpg",
       comment:14,
       upvote:1.6,
       downvote:10,
       share:33,
      },
    {
      name: "Quora Sessions ",
      logoimage:
        "https://www.ufpb.br/ufpb/icons/redes-sociais/quora.png/@@images/image.png ",
      question: " Explore how your business can grow with Quora.?",
      Answer:
        " Businesses come to Quora to highlight their position as an industry thought leader, drive traffic back to their website, and build valuable relationships with customers. .",
      image:
        " https://quora4biz.b-cdn.net/wp-content/uploads/2022/07/HeroGraphic_A.png",
        comment:82,
        upvote:7.6,
        downvote:16,
        share:10,
    },
    {
      name: "Quora Sessions ",
      logoimage:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUdjrldofdIJ5w5dB7oC2rTKqdtS6fTesc7jOmPqJl2RbMzmJ4j-IIRMyrZxcZgHJhkQ&usqp=CAU ",
      question: "  What is the study in science?",
      Answer:
        " The Sciences are generally divided into three academic fields: Biology, Chemistry and Physics. Biologists study living things from plants to people, Chemists study the properties of substances and how they react with each other and Physicists are concerned with studying forces in the universe .",
      image:
        "https://science.nasa.gov/files/styles/front_page_hero_image/public/thumbnails/image/07.21_SciencebytheNumbers.JPG?itok=wDSsuGwC",
        comment:8,
        upvote:1.8,
        downvote:62,
        share:55,
      },
  ];

  let {postData} = usePostData()
  return (
    <div className="details">
      {postData.map((ele) => (
        <div className="detail1" key={ele.Id}>
          <div className="detailimg">
          <div className="detailimg1">
            <img src={ele.ProfileImg } alt="" />
          </div>
          <div className="detailimg2">
            <h6>{ele.name} 	• <a href="">Follow</a></h6>
          </div>
          </div>
          <div className="detail2">
            <div>
              <h5>{ele. Heading}</h5>
            </div>
            <div>
                <h4>{ele.Info} <a href="">(more)</a> </h4>
            </div>
            <div className="detailsimg">
                <img src={ele.PostImg } alt="" />
            </div>
            <div className="detailcom">
              <div className="detailcom1"><i class="fa-solid fa-arrow-up">   {ele.upvote}</i></div>
              <div className="detailcom2"><i class="fa-solid fa-arrow-down">  {ele.downvote}</i></div>
              <div className="detailcom3"> <i class="fa-regular fa-comment">   {ele.share}</i></div>
              <div className="detailcom4"> <i class="fa-solid fa-share-nodes">  {ele.comment}</i></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
