import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps{
    src?: string | null | undefined
}



const Avatar: React.FC<AvatarProps> = ({src}) => {
    if(src){
        <Image
        src={src}
        alt="Avatar"
        className="rounded-full p-4"
        width={24}
        height={24}
        />
    }
    return <FaUserCircle size={24}/>
}
 
export default Avatar;