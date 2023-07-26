"use client"
import React, {createContext, useState, useContext} from "react";

interface AuthContextType {
    userInfo: UserInfo | null;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>
}
interface UserInfo {
    name: string;
    token: string
}

type PropsType = {
    children: React.ReactNode
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}: PropsType) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
    return (
        <AuthContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
