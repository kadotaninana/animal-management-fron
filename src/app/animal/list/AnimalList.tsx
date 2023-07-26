'use client';
import { useAuthContext } from "@/app/auth/signIn/AuthContext";
import React, {useEffect, useState} from "react";

interface Animal {
    animal_name: string;
    birthday: string;
    age: number;
    id: number;
}
type AnimalProps = {
    animal: Animal
}
const Animal = ({animal}: AnimalProps) => {
    return (
        <div className="w-full h-16 bg-teal-400 mt-5 text-white relative">
            <div className="flex">
            <p>名前:</p>
            <h2 className="text-md">{animal.animal_name}</h2>
            </div>
            <p>{`生年月日: ${animal.birthday} ${animal.age}歳`}</p>
            <div className="flex absolute right-1 bottom-1 gap-x-2.5">
            <a className="">編集</a>
            <a className="">履歴確認</a>

            </div>
        </div>
    )

}
export const AnimalList = () => {
    const {userInfo, setUserInfo} = useAuthContext();
    const [animalList, setAnimalList] = useState<Animal[]>([])
    console.log(userInfo)

    useEffect(() => {
        const fetchAnimalList = async () => {
            const response = await fetch(
                "http://localhost:8080/api/animal",
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer" + " " +  userInfo?.token
                    },
                    
                }
            )
            // console.log(await response.json())
            const {animal_info} = await response.json()
            setAnimalList(animal_info)
        }
        fetchAnimalList();

    }, [])
    
    return (
        <div className="w-1/2 h-auto mx-auto mt-32">
            {animalList.map((animal) => (
                <Animal key={animal.id} animal={animal}/>
            ))}
            
        </div>
        
    )
}