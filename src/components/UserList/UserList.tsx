import React from 'react';
import { UserProps } from '../../constants/types.constant';

function UserList({ users }: UserProps) {
  return (
    <div className='list users'>
      {users.map((user) => (
        <div key={user.id} className='item'>
          <h2>User Name: {user.username}</h2>
          <p>Nick Name: {user.nickname}</p>
          <img src={user.photo} alt={user.username} />
        </div>
      ))}
    </div>
  );
}

export default UserList;
