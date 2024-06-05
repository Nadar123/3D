import React, { useRef, useState, useEffect } from 'react';
import faker from 'faker';
import UserList from '../UserList/UserList';
import UserCards from '../UserCards/UserCards';
import ThreeDObject from '../ThreeDObject/ThreeDObject';

type ThreeDObjectProps = {
  shape?: 'rectangle' | 'triangle' | 'circle';
};

type User = {
  id: string;
  username: string;
  nickname: string;
  photo: string;
};
function App() {
  const [shape, setShape] = useState<
    null | 'rectangle' | 'triangle' | 'circle'
  >(null);
  const [users, setUsers] = useState<User[]>([]);
  const [view, setView] = useState<'list' | 'card'>('list');

  useEffect(() => {
    const newUsers = Array.from({ length: 10 }, () => ({
      id: faker.datatype.uuid(),
      username: `${faker.name.firstName()} ${faker.name.lastName()}`,
      nickname: faker.internet.userName(),
      photo: 'https://avatars.githubusercontent.com/u/97165289',
    }));

    setUsers(newUsers);
    console.log(newUsers);
  }, []);

  return (
    <div>
      <div className='btn-wrapper'>
        <button onClick={() => setView(view === 'list' ? 'card' : 'list')}>
          Switch to {view === 'list' ? 'card' : 'list'} view
        </button>
      </div>

      {view === 'list' ? (
        <UserList users={users} />
      ) : (
        <UserCards users={users} />
      )}

      <div className='three-d-wrapper'>
        <div className='select-wrapper'>
          <select onChange={(e: any) => setShape(e.target.value)}>
            <option value=''>Select a shape</option>
            <option value='rectangle'>Rectangle</option>
            <option value='triangle'>Triangle</option>
            <option value='circle'>Circle</option>
          </select>
        </div>
        {shape && <ThreeDObject shape={shape} />}
      </div>
    </div>
  );
}

export default App;
