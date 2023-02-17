import React from "react";
import "../componentcss/Navbar.css";
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="main-container">
      <div className="contain">
        <div className="item1">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGZVurt8r1so9YWuK5gV3pIVuhxgzg-dvUhm4bdcUAaMZPNpu9PI9KzWPGPDB7HqUHw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div className="item2">
          <div className="content1">
          <Link to="/">
            <div>
              <i class="fa-solid fa-house"></i>
            </div>
            </Link>
            <Link to="/Following">
            <div>
            <i className="fa-solid fa-list"></i>
            </div>
            </Link>
            <Link to="/Answer">
            <div>
              <i class="fa-sharp fa-regular fa-pen-to-square"></i>
            </div>
            </Link>
            <Link to="/Spaces">
            <div>
            <i className="fa-solid fa-people-group"></i>
            </div>
            </Link>
            <Link to="/Notification">
            <div>
              <i class="fa-regular fa-bell"></i>
            </div>
            </Link>
          </div>
          <div className="content2">
            <div className="search1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="search2">
              <input type="text" placeholder="Search Quora"></input>
            </div>
          </div>
        </div>
        <div className="item3">
          <div className="nav1">
            <button>Try Quora</button>
          </div>
          {/* <div className="btn-group">
  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small button
  </button>
  <ul className="dropdown-menu">
     <li>hellow</li>
     <li>hellow</li>
      <li>hellow</li>
      <li>hellow</li>
       <li>hellow</li>
       <li>hellow</li>

  </ul>
</div> */}
 









          {/* <div className="nav2">
          <div className="dropdown">
                <img
                  style={{ width: "200px" }}
                  className=" dropdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  src="https://lh3.googleusercontent.com/iMCQwrqgZ_Q7bBCj_cSGvZqttePI1eEYU8TLkfQn2ZTth_tzGOzsmlaEeI1V_sn7HisS6Ygo0BhEPR6g7PAOvdoygoUKnzivU-MsW2UZc0tnFJ9qg2SZ6vr5NTQtkYndcCsN1tvMi1L67ie2O__3omKYYRQnHWAO-pF1-XtJr5NEL-XXqFXSftkdzlwb3O5IavykWjkA2S51rVwb568NyuokRFzwefo9-rzANs19FcuSt42z8DD1c15-p0SCuGBYLqdmgymW9APpu6WaRL5pO4WFrSPfxKVjPp1SqVzA1Xgh7OeO4PbfjIr8PhBWK6IKomGCHeZkTmSt4svCLsn1w7ewQs0ILRMs9x5tAUbKwzT9DBTi-qT4J8xokOr6SdgaF_aOfotA83PdD6QbnuvDVsie_Pt26KhwJ-NgOuyA4y5zDfkXriX-FzVH4xGjCFrBJTxzbBkI0FSDBvvhRRlp-4ZcLCjY3mtlJqZXyjEQse5WIJSWe4jCuq3n0O_Y5_BZ5rnqbLvrbxXNjXsGcV-D-61ov7XTs0eWHqXIkB7hUSQcx3g2JAGNrZp3bmDVXFD0gDdbNQBa4Nts2q7uaKAI0Jrr3AKKiVtKXEpsH-y92ywooDaTaEup_QkmGLQHeYLWRYNmNJ_51ySW-dSZkiJWlB0zz1Re718y_bJ8EBJUrV7S6MRu4vCM47w9La23YIzF-imiqPlK-tgs2V9XKSVoV2s1pGm14hENyd-ngFpM_RyUrK3rTlBc5FHhpNneDlZIO4vol6sdXV_xvV6HnV3uHLCYEEa4w1zwpllrJdXtvTQ47e8mZBAZX8wvO3wu9sCHqdvVaCI2UMV5z2nDLuGImPHfYa5wesi9HVZxnI3SO9M3UH6H_fPn2qhkW3pduQnGwjF0-8msdsUfaqzSQUJ5IgpxKIWPXJJDtEjJFC0wMReITT5xC21H8RS9XhHM7sd3hQI5EIfYzQxEBKsFj8HnQg=s635-no?authuser=0"
                  alt="net slow "
                />
                <div className="dropdown-menu" style={{zIndex:"1"}}>
                  <div className="one">
                    <img
                      style={{ width: "50px" }}
                      src="https://lh3.googleusercontent.com/iMCQwrqgZ_Q7bBCj_cSGvZqttePI1eEYU8TLkfQn2ZTth_tzGOzsmlaEeI1V_sn7HisS6Ygo0BhEPR6g7PAOvdoygoUKnzivU-MsW2UZc0tnFJ9qg2SZ6vr5NTQtkYndcCsN1tvMi1L67ie2O__3omKYYRQnHWAO-pF1-XtJr5NEL-XXqFXSftkdzlwb3O5IavykWjkA2S51rVwb568NyuokRFzwefo9-rzANs19FcuSt42z8DD1c15-p0SCuGBYLqdmgymW9APpu6WaRL5pO4WFrSPfxKVjPp1SqVzA1Xgh7OeO4PbfjIr8PhBWK6IKomGCHeZkTmSt4svCLsn1w7ewQs0ILRMs9x5tAUbKwzT9DBTi-qT4J8xokOr6SdgaF_aOfotA83PdD6QbnuvDVsie_Pt26KhwJ-NgOuyA4y5zDfkXriX-FzVH4xGjCFrBJTxzbBkI0FSDBvvhRRlp-4ZcLCjY3mtlJqZXyjEQse5WIJSWe4jCuq3n0O_Y5_BZ5rnqbLvrbxXNjXsGcV-D-61ov7XTs0eWHqXIkB7hUSQcx3g2JAGNrZp3bmDVXFD0gDdbNQBa4Nts2q7uaKAI0Jrr3AKKiVtKXEpsH-y92ywooDaTaEup_QkmGLQHeYLWRYNmNJ_51ySW-dSZkiJWlB0zz1Re718y_bJ8EBJUrV7S6MRu4vCM47w9La23YIzF-imiqPlK-tgs2V9XKSVoV2s1pGm14hENyd-ngFpM_RyUrK3rTlBc5FHhpNneDlZIO4vol6sdXV_xvV6HnV3uHLCYEEa4w1zwpllrJdXtvTQ47e8mZBAZX8wvO3wu9sCHqdvVaCI2UMV5z2nDLuGImPHfYa5wesi9HVZxnI3SO9M3UH6H_fPn2qhkW3pduQnGwjF0-8msdsUfaqzSQUJ5IgpxKIWPXJJDtEjJFC0wMReITT5xC21H8RS9XhHM7sd3hQI5EIfYzQxEBKsFj8HnQg=s635-no?authuser=0"
                      alt=""
                    />
                    <h3>Prashant Parmar</h3>
                  </div>

                  <hr />
                  <div className="two">

                    <NavLink className="Link">
                      <span className="s1" >
                        <i className="fa-regular fa-comment-dots"></i>
                      </span>
                      <span className="s2">Messages</span>
                    </NavLink>

                    <NavLink className="Link">
                      <span className="s1">
                        <i className="fa-solid fa-bullhorn"></i>
                      </span>
                      <span  className="s2">Create Ad</span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                      <span  className="s2"> Monetization</span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-solid fa-chart-simple"></i>
                      </span>
                      <span  className="s2"> Your content & stats</span>
                    </NavLink>
                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-regular fa-bookmark"></i>
                      </span>
                      <span  className="s2"> Bookmarks </span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </span>
                      <span  className="s2">Drafts </span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-solid fa-wand-sparkles"></i>{" "}
                      </span>
                      <span  className="s2">Try Quora+</span>
                    </NavLink>
                  </div>
                  <hr />

                  <div className="three">

                    <div>
                 
                    Dark mode
                    </div>

                    <div>
                   
                      <NavLink className="Link">Settings </NavLink>
                    </div>
                    <div>
                     
                      <NavLink className="Link">Language </NavLink>
                    </div>
                    <div>
                    
                      <NavLink className="Link">Help</NavLink>
                    </div>
                    <div>
                 
                      <NavLink className="Link">Logout</NavLink>
                    </div>
                  </div>
                  <hr />

                  <div className="four">
                   
                    <NavLink className="Linkh">-Careers</NavLink>
                    <NavLink className="Linkh">-Terms</NavLink>
                    <NavLink className="Linkh">-Privacy</NavLink>
                    <NavLink className="Linkh">-Acceptable Use</NavLink>
                    <NavLink className="Linkh">-Businesses</NavLink>
                    <NavLink className="Linkh">-Press</NavLink>
                    <NavLink className="Linkh">-Your Ad Choice</NavLink>
                    <NavLink className="Linkh">-Grievance Officer</NavLink>

                  </div>
                </div>
              </div> */}


             
            <div className="head2">
              <i class="fa-solid fa-globe"></i>
            </div>
           
          <div className="nav3">
            <div class="dropdown">
              <button class="dropbtn">
                Add Question
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Create post</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
