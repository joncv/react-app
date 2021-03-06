import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'

const Avatar = ({userInfo}) => {
  return (
    <Link to={`/user/${userInfo.uid}`} className="avatar">
      <img
        src={userInfo.avatarLarge}
        alt="userAvatar"
        title={`/user/${userInfo.username}`}
      />
    </Link>
  )
}

export default Avatar
