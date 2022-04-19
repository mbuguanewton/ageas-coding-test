import React from 'react';

function UserListItem({ user }) {
  const background =
    user?.status === 'active'
      ? '#3DB330'
      : user?.status === 'away'
      ? '#EC7B12'
      : '#9D9D9D';

  return (
    <div className='userlist__item'>
      <div className='userlist__item--statusicon'>
        <div
          className='userlist__item--statusicon-statusdot'
          style={{ backgroundColor: background }}
        />
      </div>
      <div className='userlist__item--details'>
        <p className='userlist__item--details-name'>
          {user?.firstName} {user?.lastName}
        </p>
        <span className='userlist__item--details-status'>{user?.status}</span>
      </div>
    </div>
  );
}

export default UserListItem;
