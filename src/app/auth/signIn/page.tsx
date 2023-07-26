'use client'
import React, {useRef} from "react";
import { useRouter } from 'next/navigation'
import { useAuthContext } from "./AuthContext";

const SignIn = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const route = useRouter();

    const {userInfo, setUserInfo} = useAuthContext();

    const createAccount = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/api/login",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: emailRef.current?.value,
                        password: passwordRef.current?.value,
                    })
                }
            )
            const {token, user_name} = await response.json();
            console.log(token)

            setUserInfo({
                token: token,
                name: user_name,
            })
            route.push("/")
            
        } catch (error) {
            alert(error)
        }

    }
   
    return (
       <div className="w-1/2 h-auto bg-teal-400 mx-auto mt-10 py-5 rounded-md">
        <h1 className="text-center text-white text-xl">ログイン</h1>
        <input 
            type={"text"} 
            name={"email"} 
            placeholder={"メールアドレス"} 
            className="block mx-auto mt-5 w-10/12 h-10 placeholder-gray-400 rounded-md"
            ref={emailRef}
        />
        <input 
            type={"password"} 
            name={"password"} 
            placeholder={"パスワード"} 
            className="block mx-auto mt-5 w-10/12 h-10 placeholder-gray-400 rounded-md"
            ref={passwordRef}
        />
        <button 
            className="block w-1/2 h-auto bg-white text-teal-400 text-xl mt-5 mx-auto rounded-md"
            onClick={createAccount}
        >
            ログインする
        </button>
       </div>
    )
}

export default SignIn;