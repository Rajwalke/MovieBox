// import userEvent from "@testing-library/user-event";
import { useRef, useState } from "react";
import { validation } from "../utils/validationcondition.js";

const Form=()=>{
    const [newuser,setnewuser]=useState(false);
    const [username,setusername]=useState("");
    // const [email,setemail]=useState("");
    // const [password,setpassword]=useState("");
    const [mobileno,setmobileno]=useState("")
    const [validationMessage,setvalidationMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const checktheValidity=()=>{
        console.log("email is",email.current.value);
        console.log("password is",password.current.value);

        const message=validation(email.current.value,password.current.value);
        console.log(message)
        setvalidationMessage(message);
    }
    return(
        <>
         {/* console.log("email is",email); */}
        <div className="absolute my-44 w-3/12 mx-auto right-0 left-0 ">
            <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col  bg-black bg-opacity-90 px-16 py-8 items-center rounded-md">
                <p className="text-white text-xl p-2  font-bold">
                    {newuser===true?" New User Signpup":"SingIn"}
                </p>
                {newuser === true && <input className="m-4  bg-gray-900 text-white rounded-md p-2 w-full block" value={username} type="text" placeholder="Enter Full Name"
                onChange={(e)=>{
                    setusername(e.target.value)
                }}
                /> }
                {newuser === true && <input className="m-4  bg-gray-900 text-white rounded-md p-2 w-full block" value={mobileno} type="number" placeholder="Enter your mobile Number"
                onChange={(e)=>{
                    setmobileno(e.target.value)
                }}
                />}
                <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block" type="email" placeholder="Enter your Email"
                ref={email}
                // onChange={(e)=>{
                //     setemail(e.target.value)
                // }}
                />
                <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block"  type="password"  placeholder="Enter your Password"
                ref={password}
                // onChange={(e)=>setpassword(e.target.value)}
                />

                <p className="font-semibold text-xl text-red-500 my-2">{validationMessage}</p>
                
                <button className="m-4 font-bold text-white rounded-md p-2 w-full  bg-red-800 "
                onClick={()=>{
                    checktheValidity();
                }}
                >{newuser===true?"Signup": "SignIn"}</button>

                <p className="text-white my-3">
                    {newuser===false?"New to Netflix?":"Already User?" }
                    <span className="cursor-pointer underline font-semibold"
                     onClick={()=>{
                        newuser===true?setnewuser(false):setnewuser(true);
                       
                        //setnewuser(!newuser) if newuser is true then it set to the false if it is false then set to the true
                    }} >
                
                    {newuser===true?" SignIn Now": " SignUp Now "}
                    </span> 
                </p>
            </form>
        </div>
        </>
    )
}
export default Form;