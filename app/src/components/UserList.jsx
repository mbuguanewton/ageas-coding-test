import React, { useEffect, useState } from 'react';
import SortUsers from '../methods/sort';
import UserListItem from './UserListItem';

function UserList({ users, status, order }) {
  const [filtered, setFiltered] = useState([]);

  const orderByStatus = (status) =>
    setFiltered(users.filter((user) => user.status === status));

  useEffect(() => {
    if (status) {
      orderByStatus(status);
    } else {
      setFiltered(users);
    }
  }, [status]);

  useEffect(() => {
    if (!status && users) {
      setFiltered(users);
    }
  }, [users, order]);

  useEffect(() => {
    if (filtered && order) {
      setFiltered(SortUsers(filtered, order));
    }
  }, [filtered, order]);

  return (
    <div className='userlist'>
      {filtered.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </div>
  );
}

UserList.defaultProps = {
  users: [],
};

export default UserList;
