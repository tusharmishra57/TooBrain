import { ShareIcon } from "../icons/SharIcon"

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube"
}


export const Card = (props: CardProps) =>{
    return <div className="rounded-md shadow-lg outline-slate-50 outline-solid m-3 p-4 w-84 bg-blue-300">
        <div className=" flex justify-between">
        <div className="pl-1 flex items-center h-5">
            <div className="mr-2 ml-2 text-gray-400">
                <ShareIcon/>
            </div>
            <div className="mr-2 ml-2"> 
                {props.title}
            </div>
            
        </div>
        <div className="pr-1 flex items-center h-5">
            <div className="mr-2 ml-2 text-gray-400">
                <ShareIcon/>
            </div>
            <div className="mr-2 ml-2 text-gray-400">
                <a href={props.link} target="_blank">
                    <ShareIcon/>
                </a>
            </div>
        </div>

    </div>
    <div className="pt-2 ">
            {props.type === "youtube" && <iframe src={props.link.replace("watch", "embed")}
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}


            {props.type === "twitter" && <blockquote className="twitter-tweet">
            <a href={props.link} target="_blank"></a>
            </blockquote>
                }
        </div>
    </div>
    
}