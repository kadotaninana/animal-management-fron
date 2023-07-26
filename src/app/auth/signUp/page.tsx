'use client'
import React, {useRef} from "react";

const SignUp = () => {
    const userNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const createAccount = async () => {
        // alert("jjjj")
        try {
            const response = await fetch(
                "http://localhost:8080/api/user/register",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: userNameRef.current?.value,
                        email: emailRef.current?.value,
                        password: passwordRef.current?.value,
                    })
                }
            )
            alert(response)
            
        } catch (error) {
            alert(error)
        }

    }
   
    return (
       <div className="w-1/2 h-auto bg-teal-400 mx-auto mt-10 py-5 rounded-md">
        <h1 className="text-center text-white text-xl">アカウント登録</h1>
        <input 
            type={"text"} 
            name={"user_name"} 
            placeholder={"ユーザーネーム"} 
            className="block mx-auto mt-5 w-10/12 h-10 placeholder-gray-400 rounded-md"
            ref={userNameRef}
        />
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
            登録する
        </button>
       </div>
    )
}

export default SignUp;