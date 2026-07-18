import type { ReactElement } from "react"

interface ButtonInterface {
    variant: "primary" | "secondary" ,
    startIcon ?: ReactElement,
    endIcon ?: ReactElement,
    text: string
}

const ButtonVariant = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
}

const defaultStyle = "rounded-lg px-4 py-2 flex items-center"

export const Button = (props: ButtonInterface) =>{
    return <button className={`${ButtonVariant[props.variant]} ${defaultStyle}`}>
        <div className="pr-2">
            {props.startIcon}
        </div>
        {props.text}
        </button>
}