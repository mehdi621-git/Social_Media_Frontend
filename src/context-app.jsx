import { createContext, useReducer, useState,useEffect } from "react";

export const PostContextAccessible = createContext();

const Listaction = (PostList, action) => {
  let finalListValue = PostList;
  if (action.type === "NEW_ITEM") {
    finalListValue = [ action.payload, ...PostList];
  } 
  else if (action.type === "NEW_ITEMS") {
     finalListValue= action.payload.listt;
  }
  else if (action.type === "DELETE_ITEM") {
    finalListValue = PostList.filter(
      (eachlist) => eachlist.id !== action.payload.itemiddeleted
    );
  }
  return finalListValue;
};

const PostProvider = ({ children }) => { 

  const [List, dispachPostList] = useReducer(Listaction, []);
  const addListAll =(listt)=>{
    dispachPostList
     ({
     type : "NEW_ITEMS",
     payload : {
     listt,
       }
      });
  }
  const additem = (name,email,body,title,tags) => {
    console.log("me to additem");
    dispachPostList({
      type: "NEW_ITEM",
      payload: {name,email,body,title,tags},
    
      
    });
    console.log("me to added");
    console.log(tags);
  };
  const deleteitem = (itemiddeleted) => {
    const deletethisitem = {
      type: "DELETE_ITEM",
      payload: {
        itemiddeleted,
      },
    };
    dispachPostList(deletethisitem);
    console.log(itemiddeleted);
  };
  const [fetch1,setfetch]=useState(false);
  useEffect(()=>{
    setfetch(true);
    const controller = new AbortController();  
    const signal =controller.signal;
   fetch('https://dummyjson.com/posts',{signal})
   .then(res => res.json())
   .then((list) =>{ addListAll(list.posts);
    setfetch(false)
  });
  return ()=>{
    console.log("done")
    controller.abort();
    
  };
 
  },[]);
 // change item state
  let [item1, setitem1] = useState("Home");
  const ChangeSet = (gethomevalue) => {
    setitem1(gethomevalue);
  };

  return (
    <>
      <PostContextAccessible.Provider
        value={{ List, ChangeSet, item1,fetch1, deleteitem, additem }}
      >
        {children}
      </PostContextAccessible.Provider>
      ;
    </>
  );
};
export default PostProvider;
