import { useState } from "react";

const Form=()=>{
    const [newuser,setnewuser]=useState(false);

    return(
        <>
        <div className="absolute my-44 w-3/12 mx-auto right-0 left-0 ">
            <form className="flex flex-col  bg-black bg-opacity-90 px-16 py-8 items-center rounded-md">
                <p className="text-white text-xl p-2  font-bold">
                    {newuser===true?" New User Signpup":"SingIn"}
                </p>
                {newuser === true && <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block" type="text" placeholder="Enter Full Name"/> }
                {newuser === true && <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block" type="number" placeholder="Enter your mobile Number"/>}
                <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block" type="email" placeholder="Enter your Email"/>
                <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block"  type="password" placeholder="Enterb your Password"/>
                <button className="m-4 font-bold text-white rounded-md p-2 w-full  bg-red-800 ">{newuser===true?"Signup": "SignIn"}</button>

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