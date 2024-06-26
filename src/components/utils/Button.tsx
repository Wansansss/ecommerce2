'use client'

import React from "react";
import { IconType } from "react-icons";

interface ButtonProps{
    label:string,
    disabled?:boolean,
    outline?:boolean,
    small?:boolean,
    custom?:string,
    icon?: IconType
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
    
}

const Button:React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom,
    onClick,
    icon: Icon,
 
}) => {
    
    return ( 
        <button
        onClick={onClick} 
        disabled={disabled}
        className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-md
        hover:opacity-80
        transition
        w-full
        bg-red-600
        border-slate-400
        flex
        items-center
        justify-center
        gap-2
        hover:bg-transparent
        hover:text-black
        ${outline? "bg-white" : "bg-red-600"}
        ${outline? "text-slate-700" : "text-white"}
        ${small? "text-sm font-semibold" : "text-md font-semibold"}
        ${small? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"}
        ${custom? custom : ""}
        `}
        >
            {Icon && <Icon size={24}/>}
            {label}
        </button>
     );
}
 
export default Button;