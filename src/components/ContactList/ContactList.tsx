import React, { useRef, useState } from 'react';
import PageLayout from '../UI/PageLayout';
import Modal from '../UI/Modal';

function ContactList({
  users,
  setUsers,
}: {
  users: any[];
  setUsers: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [rowInEdit, setRowInEdit] = useState<number | null>(null);
  const [userToDeleteIndex, setUserToDeleteIndex] = useState<number | null>(
    null
  );
  const [userToDeleteName, setUserToDeleteName] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>();
  const modal = useRef<any>();

  const deleteUser = () => {
    if (userToDeleteIndex !== null) {
      setUsers((prevUsers) =>
        prevUsers.filter((_, idx) => idx !== userToDeleteIndex)
      );
      setUserToDeleteIndex(null);
      setUserToDeleteName(null);
      modal.current.close(); // Close the modal after deletion
    }
  };

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
    <>
      <Modal
        ref={modal}
        onConfirm={deleteUser}
        onCancel={() => {
          modal.current.close();
          setUserToDeleteIndex(null);
          setUserToDeleteName(null);
        }}
      >
        {userToDeleteName && (
          <>
            <h2 className='modal-title'>Delete User</h2>
            <p className='modal-content'>
              Are you sure you want to delete user: {userToDeleteName}?
            </p>
          </>
        )}
      </Modal>
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
                        <input
                          type='text'
                          defaultValue={user.name}
                          name='name'
                        />
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
                      onClick={() => {
                        setUserToDeleteIndex(index);
                        setUserToDeleteName(user.name);
                        modal.current.open();
                      }}
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
                          handleSave(index, formValues);
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
    </>
  );
}

export default ContactList;
