import type { ReactElement } from "react"

interface ItemInterface {
    text?: string,
    icon?: ReactElement,
    image ?: string
} 

export const SideBarItem = (props: ItemInterface) =>{
    return <div className="flex p-2 rounded-lg items-center cursor-pointer hover:bg-gray-100">
        <div className="text-gray-600 p-2">
            {props.icon}
        </div>
        <div className=" p-2">
            {props.text}
        </div>
    </div>  
}