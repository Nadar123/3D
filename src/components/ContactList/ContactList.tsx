import React, { useRef, useState } from 'react';
import PageLayout from '../UI/PageLayout';

function ContactList({
  users,
  setUsers,
}: {
  users: any[];
  setUsers: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [rowInEdit, setRowInEdit] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>();

  const handleSave = (index: number, formValues: Record<string, string>) => {
    const updatedUsers = users.map((user, idx) => {
      if (idx === index) {
        return { ...user, ...formValues };
      }
      return user;
    });
    setUsers(updatedUsers);
    setRowInEdit(null);
  };

  return (
    <PageLayout>
      <h1 className='title'>ContactList</h1>
      <form ref={formRef}>
        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Organization</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    {rowInEdit === index ? (
                      <input type='text' defaultValue={user.name} name='name' />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>
                    {rowInEdit === index ? (
                      <input
                        type='text'
                        defaultValue={user.organization}
                        name='organization'
                      />
                    ) : (
                      user.organization
                    )}
                  </td>
                  <td>
                    {rowInEdit === index ? (
                      <input
                        type='email'
                        defaultValue={user.email}
                        name='email'
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {rowInEdit === index ? (
                      <input
                        type='tel'
                        defaultValue={user.phone}
                        name='phone'
                      />
                    ) : (
                      user.phone
                    )}
                  </td>
                  <td
                    onClick={() =>
                      setUsers(users.filter((_, idx) => index !== idx))
                    }
                  >
                    <p className='delete'>x</p>
                  </td>
                  <td
                    onClick={() => {
                      if (rowInEdit === null) {
                        setRowInEdit(index);
                      } else {
                        const formData = new FormData(formRef.current);
                        const formValues: Record<string, string> = {};
                        formData.forEach((value, key) => {
                          formValues[key] = value as string;
                        });
                        handleSave(index, formValues); // Call handleSave to update users array
                      }
                    }}
                  >
                    {rowInEdit !== null && index === rowInEdit ? (
                      <p className='saveandedit'>Save</p>
                    ) : (
                      <p className='saveandedit'>Edit</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </PageLayout>
  );
}

export default ContactList;
