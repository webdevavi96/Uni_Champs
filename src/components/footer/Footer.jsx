import React from "react";

function Footer() {
    return (
        <div className="mt-auto w-full bg-black text-white font-mono p-2">
            <p className=" text-center">All rights reserved at &copy;Uni-Champs and respective Owners.</p>
            <p>For more Information Follow our social accounts:</p>
            <ul className="pl-2.5 flex justify-around w-100">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>GitHub</li>
            </ul>
        </div>
    )
}

export default Footer