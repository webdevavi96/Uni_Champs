import React from "react";
import Card from "../Card/Card";


function Home() {

    const cardTitle = "I shall decide... how the story will end!";

    const cardContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit fugit deleniti aut totam sint quas fuga odio quis laboriosam inventore animi perferendis ducimus excepturi tempore quibusdam dolorem, illo harum facere accusantium blanditiis ut? Esse assumenda at, nihil voluptate dolorum autem, dignissimos magnam a est ducimus perspiciatis tempora expedita quas aliquid? Sunt molestias consequuntur commodi reprehenderit excepturi, minus laboriosam nihil porro?";

    const imageSource = "https://c4.wallpaperflare.com/wallpaper/204/345/189/kamen-rider-ooo-wallpaper-preview.jpg";

    return (
        <div className="w-full h-screen bg-blue-300 flex justify-between flex-1">

            <Card title={cardTitle} content={cardContent} imageSrc={imageSource} />

        </div>
    )
}

export default Home