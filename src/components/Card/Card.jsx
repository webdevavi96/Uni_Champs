import React from "react";

function Card({ title, imageSrc, content }) {
    return (
        <div className=" w-110 h-auto bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img
                    className="p-8 rounded-t-lg w-auto h-80"
                    src={imageSrc} alt="product_image1" />
            </a>
            <div className="px-5 pb-5">

                <h5
                    className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>

                <p
                    className="text-blue-300
                    text-pretty font-mono pt-1.5">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Card