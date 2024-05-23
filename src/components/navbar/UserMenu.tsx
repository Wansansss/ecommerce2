"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Avatar from "../utils/Avatar";
import Link from "next/link";
import MenuItem from "./MenuItem";
import BackDrop from "./BackDrop";
import { useRouter } from "next/navigation";
import axios from "axios";



const UserMenu= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>([])
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const [secureId,setSecureId] = useState('')
  useEffect(()=> {
    let usersecureId = sessionStorage.getItem('secureId');
    if(usersecureId){
      setSecureId(usersecureId)
    }
  },[])

  function getAccountDetail(){
    const config = {
      headers: {
        "x-user-secure-id": secureId as string,
        "accept": "*/*"
      },
    }
       axios.get(process.env.NEXT_PUBLIC_API_URL+`/api/sl/v1/web/users/account/detail`,config)
      .then((response) =>{
        console.log(response)
        setCurrentUser(response.data.data)
      }).catch((err) =>{console.log(err)});
    }
     useEffect(getAccountDetail,[secureId])

     function handleLogout() {
      axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/sl/v1/web/users/signout')
      .then((response) => {
        sessionStorage.clear();
        return response
      }).catch((error) => {
        console.log(error);
      }).finally(()=>{
        router.push('/login')
        setTimeout(()=>{
          window.location.reload()
        },1000)
      })
    };

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
          p-2 border-[1px]
        border-slate-500 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-lg transition-all text-slate-600 hover:text-red-600"
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-lg shadow-black w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {!secureId ? (
              <div>
                <Link href="/login" className="hover:text-red-600">
                  <MenuItem onClick={toggleOpen}> Login </MenuItem>
                </Link>
                <Link href="/register" className="hover:text-red-600">
                  <MenuItem onClick={toggleOpen}> Register </MenuItem>
                </Link>
              </div>
            ):(
              <div>
                <Link href="/user/dashboard" className="hover:text-red-600">
                  <MenuItem onClick={toggleOpen}>Dashboard </MenuItem>
                </Link>
                {/* <Link href="/login" className="hover:text-red-600"> */}
                <MenuItem
                  onClick={() => {handleLogout()}}
                >
                  Logout
                </MenuItem>
                {/* </Link> */}
              </div>
            )}
            
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
