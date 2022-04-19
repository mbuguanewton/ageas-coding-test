import React, { useEffect, useState } from 'react';
import Actions from '../components/Actions';
import SortUsers from '../methods/sort';
import UserList from '../components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('');
  const [order, setOrder] = useState('A-Z');

  const fetchUsers = (ord = '') => {
    fetch('/data/userlist.json')
      .then((res) => res.json())
      .then((data) => {
        // calculate age of users
        const usersWithAge = data
          .map((user) => {
            const age =
              new Date().getFullYear() -
              new Date(user?.dateOfBirth).getFullYear();
            return { ...user, age };
          })
          .filter((user) => user.age > 18);

        const sorted = ord ? SortUsers(usersWithAge, ord) : data;
        setUsers(sorted);
      });
  };

  useEffect(() => {
    if (order) {
      fetchUsers(order);
    }
  }, [order]);

  return (
    <div className='container'>
      <div className='container__wrapper'>
        <h1>Members List</h1>
        <div className='container__wrapper--content'>
          <Actions
            status={status}
            setStatus={setStatus}
            order={order}
            setOrder={setOrder}
          />
          <UserList users={users} status={status} order={order} />
        </div>
      </div>
    </div>
  );
}

export default App;
