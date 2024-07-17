import React, { useContext } from "react";
import { UserContext } from "../..";

function UserInfo() {
    const user = useContext(UserContext);
    return (
        <div>
            UserInfo
            {user && <h5>Hello: {user.username}</h5>}
        </div>
    );
}

export default UserInfo;
