import React from "react";


class ShowInfor extends React.Component {
    state = {
        showListUsers : true
    }
    handleShowHide = () => {
       this.setState({
        showListUsers : !this.state.showListUsers
       })
    }
    render() {
        const { listUsers } = this.props;
        return (
            <>
                <button onClick={() => { this.handleShowHide() }}>{this.state.showListUsers === true ? 'Hide list users' : 'Show list users'}</button>
                <>
                    {listUsers.map(
                        (user) => {
                            console.log(user)

                            return (
                                <>
                                    {this.state.showListUsers &&
                                        <div key={user.id} className={user.age <= 30 ? "green" : "red"}>
                                            <br /><p>User have age below 30</p>
                                            <p>ID {user.id}</p>
                                            <p>My name's {user.name}</p>
                                            <p>My age's {user.age}</p>
                                        </div>
                                    }
                                </>
                            )

                        }
                    )}
                </>
            </>
        )
    }
}

export default ShowInfor