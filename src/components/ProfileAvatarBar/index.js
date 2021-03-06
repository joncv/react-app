import React from 'react'
import Arrow from '@assets/icons/profile/profile_arrow.png'
import Avatar from '@components/Avatar'
import './style.less'

const ProfileAvatarBar = props => {
  let {username, jobTitle, company} = props.userInfo
  return (
    <div className="ProfileAvatarBar">
      <div className="avatar">
        <Avatar userInfo={props.userInfo} />
      </div>
      <div className="right">
        <div className="userInfo">
          <div className="userName">{username}</div>
          <div className="userJob">
            {jobTitle}
            {' @ '}
            {company}
          </div>
        </div>
        <div className="arrow">
          <img src={Arrow} />
        </div>
      </div>
    </div>
  )
}
export default ProfileAvatarBar
