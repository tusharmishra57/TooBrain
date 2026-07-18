import { ShareIcon } from "../icons/SharIcon"

export const Card = () =>{
    return <div className="rounded-md shadow-lg outline-slate-50 outline-solid m-3 p-4 w-84 h-64 bg-blue-300">
        <div className=" flex justify-between">
        <div className="pl-1 flex items-center h-5">
            <div className="mr-2 ml-2 text-gray-400">
                <ShareIcon/>
            </div>
            <div className="mr-2 ml-2"> 
                Project Ideas
            </div>
            
        </div>
        <div className="pr-1 flex items-center h-5">
            <div className="mr-2 ml-2 text-gray-400">
                <ShareIcon/>
            </div>
            <div className="mr-2 ml-2 text-gray-400">
                <ShareIcon/>
            </div>
        </div>

    </div>
    <div className="w-full pt-4 ">
            {/* <iframe src="https://www.youtube.com/embed/ZqGSg4b_cZA?si=QpZkQAX6Dr_LDvaq" 
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                
        </div>
    </div>
    
}