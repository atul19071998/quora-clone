import { createContext,useContext,useState } from "react";

import React from "react";
import { Details } from '../component/Main-content.js';

let PostContext = createContext();
 function PostDataProvider ({ children}) {
    let [postData,setPostData] = useState([...Details]);
    return(
        <PostContext.Provider value={{postData,setPostData}}>
            {children}
        </PostContext.Provider>
    )
 }

 let usePostData = () => useContext(PostContext);

 export { usePostData,PostDataProvider}