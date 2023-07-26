import React from "react";

export const Header = () => {
    return (
        <div className="w-full h-10 bg-teal-400">
            <div className="flex justify-between">
                <h1 className="text-md text-white py-1 pl-5">動物管理</h1>
                {/* <div className="flex"> */}
                <button className="text-md text-white pr-5">ログイン</button>
              
                {/* </div> */}

            </div>

        </div>
    )
}