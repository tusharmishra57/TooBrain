import { Button } from "../components/Button"
import { SignupIcon } from "../icons/SignupIcon"
export const Signup = () =>{
    return <div className="flex justify-center items-center bg-slate-500 h-screen w-screen">
        <div className="bg-gray-400 p-6 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-500">
            <div className="flex justify-start gap-2 pb-4">
                <SignupIcon/>
                <p >Signup</p>
            </div>
            
            <div className="flex flex-col gap-4 justify-center items-center ">
                <input type="text" placeholder="  UserName" className="bg-purple-200 rounded-lg shadow-xl h-[30px] w-[200px]"/>
                <input type="text" placeholder="  Password" className="bg-purple-200 rounded-lg shadow-xl h-[30px] w-[200px]"/>
            </div>

            <div className="flex justify-center m-4 ">
                <Button variant = "primary" text="Signup" />
            </div>
        </div>
    </div>
}