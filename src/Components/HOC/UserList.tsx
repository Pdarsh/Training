import React from 'react'
import Wrapper from './Wrapper'

const User = () => {

    return (
        <div>
            <h2> UserList</h2>
        </div>
    );
}

const UserList = Wrapper(User,"Users")

export default UserList