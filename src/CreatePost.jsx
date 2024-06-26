import { useContext, useRef } from "react";
import { PostContextAccessible } from "./context-app";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const CreatePost=()=>{
  const {item1,additem} =useContext(PostContextAccessible) ;
  const navigate =useNavigate();
  const enterName=useRef();
  const enterEmail=useRef();
  const enterMessage=useRef();
  const enterUserId=useRef();
  const enterhashtags=useRef();
  const enterTitle=useRef();
     const addNewMessage = (event)=>{
      event.preventDefault();
         const name=enterName.current.value;
         const email=enterEmail.current.value;
         const body= enterMessage.current.value;
         const userid= enterUserId.current.value;
         const title=enterTitle.current.value;
         const tags=enterhashtags.current.value.split(" ");
         
         additem(name,email,body,title,tags);
         navigate("/");
         enterName.current.value="";
         enterEmail.current.value="";
         enterMessage.current.value="";
         enterUserId.current.value="";
         enterhashtags.current.value="";
         enterTitle.current.value="";
         
     }
    return <>
     
     <form className="formSetting" onSubmit={addNewMessage}>
       <>
       <label htmlFor="exampleFormControlInput1" className="form-label">Your Id</label>
       <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">*</span>
  <input type="text" class="form-control" placeholder="4663" aria-label="Username" aria-describedby="addon-wrapping"
   ref={enterUserId}
  />
</div>
<label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
<input class="form-control" type="text" placeholder="title" aria-label="readonly input example" readonly
  ref={enterTitle}
/>
       <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mehdi"
           ref={enterName}
          />
        </div><div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
            ref = {enterEmail}
            />
          </div><div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
            ref = {enterMessage}
            ></textarea>
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter Hashtags with spaces</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder= "excited"
           ref={enterhashtags}
          />
          </div>
          <button type="submit" class="btn btn-primary sendfloat">Send <IoIosSend /></button>
          </>
          </form>

</>   
}
export default CreatePost;