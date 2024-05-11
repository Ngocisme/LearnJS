import React from "react";


class ShowInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            <>
                {listUsers.map(
                    (user) => {
                        return (
                            <div key={user.id}>
                                <br/>
                                <p>ID {user.id}</p>
                                <p>My name's {user.name}</p>
                                <p>My age's {user.age}</p>
                            </div>
                        )
                    }
                )}
            </>
        )
    }
}

export default ShowInfor