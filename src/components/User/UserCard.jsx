import React from "react";

function User(userImg, username, followers) {
    return (
        <div className="w-3xs h-96 bg-blue-200">
            <div className="flex flex-wrap">
                <img
                    src={userImg}
                    alt="User's Image" />
                <h3>{username}</h3>
                <p>{followers}</p>
            </div>
        </div>
    );
}

export default User;