import Main from "./main";
import Login from "./login/index"

import { useRouter } from 'next/router'
import { useEffect } from "react";

export default function Home() {
  const isLoggedin = false;

  const router = useRouter();
  useEffect(() => {
    if(!isLoggedin){
      router.push('/login');
    }
  }, [])
  
  return (
    <div>
      <h1>Index page</h1>
      
    </div>  
  )
}
