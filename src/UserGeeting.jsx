import React from 'react'

function UserGeeting(props) {
    return(props.isLoaggedIn ? <h2>wellcome to {props.username}</h2> : <h2>please login</h2>)
}
export default UserGeeting
