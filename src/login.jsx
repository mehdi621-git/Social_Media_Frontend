import { useContext } from "react";
import { PostContextAccessible } from "./context-app";
import { IoIosSend } from "react-icons/io";


const LogIn=()=>{
  //Currently in Working phase ; 
    const {item1}=useContext(PostContextAccessible);
   return <>
   {item1 == "Log In" &&
   <form className="formSetting" >
   <><div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="abc@...com"
          />
        </div><div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="$go5jr8" 
            />
            
            </div>
            <button type="submit" class="btn btn-primary sendfloat">Send <IoIosSend /></button>
            
            </>
            </form>
}
   
</>
}

export default LogIn;