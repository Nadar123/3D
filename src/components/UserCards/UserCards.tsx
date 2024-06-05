import React from 'react';
import { UserProps } from '../../constants/types.constant';

function UserCards({ users }: UserProps) {
  return (
    <div className='card users'>
      {users.map((user) => (
        <div key={user.id} className='inner-card'>
          <h2> User Name: {user.username}</h2>
          <p> Nick Name: {user.nickname}</p>
          <div className='wrapper'>
            <img src={user.photo} alt={user.username} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default UserCards;
