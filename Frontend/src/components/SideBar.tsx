import { Logo } from "../icons/Logo"
import { TextIcon } from "../icons/TextIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SideBarItem } from "./SideBarItem"
import logo from "../icons/logo.png"

export const SideBar = () =>{
    return <div className="pl-2">
            <img src = {logo} className="w-[100px] h-[100px] "/>
        
        <SideBarItem text="Twitter" icon={<TwitterIcon/>}/>
        <SideBarItem text="Text" icon={<TextIcon/>}/>
        <SideBarItem text="Youtube" icon={<YoutubeIcon/>}/>
    </div>
}