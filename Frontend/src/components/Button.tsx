import type { ReactElement } from "react"

interface ButtonInterface {
    variant: "primary" | "secondary" ,
    startIcon ?: ReactElement,
    endIcon ?: ReactElement,
    text: string
    onClick ?: () => void
}

const ButtonVariant = {
    "primary": "bg-purple-600 text-white cursor-pointer hover:-translate-y-1 transition-all duration-500",
    "secondary": "bg-purple-200 text-purple-600 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
}

const defaultStyle = "rounded-lg px-4 py-2 flex items-center"

export const Button = (props: ButtonInterface) =>{
    return <button className={`${ButtonVariant[props.variant]} ${defaultStyle} `}  onClick={props.onClick}>
        <div className="pr-2">
            {props.startIcon}
        </div>
        {props.text}
        </button>
}