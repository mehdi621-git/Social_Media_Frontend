import { useContext, useEffect, useState } from "react";
import { PostContextAccessible } from "./context-app";
import Post from "./post";
import Loading from "./loading";
const ListPost =()=>{

  const {List,item1,fetch1} =useContext(PostContextAccessible);
 console.log("tilol post done");
    return <>
    
    
   
      <>{fetch1 ? <Loading/> : List.length === 0 ? "No Posts" :
       
     <div className="list-contr">
  {List.map((list)=><Post post={list} key={list.id}></Post>)}
    </div>
      }</>

    </>
   
}
export default ListPost;