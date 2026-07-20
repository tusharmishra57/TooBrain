import { CrossIcon } from "../icons/crossIcon"
import { Button } from "./Button"

export const AddContentModal = ({open, onClose})=>{

    return <div>
        {open && (<div className="top-0 left-0 fixed bg-gray-900 opacity-70 w-screen h-screen flex justify-center items-center">
                <div className="bg-white opacity-100 p-8 rounded-md">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CrossIcon/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <InputComponent placeholder="title"/>
                        <InputComponent placeholder="link"/>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit"/>
                    </div>
                </div>

        </div>)}
    </div>
}

const InputComponent = ({placeholder} ) =>{
    return <div>
        <input type="text" placeholder={placeholder} className="px-2 py-2 border m-2"></input>
    </div>
}