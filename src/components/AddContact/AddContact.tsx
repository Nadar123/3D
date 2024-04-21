import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../UI/PageLayout';

const AddContact = ({
  setUsers,
}: {
  setUsers: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState<boolean | any>({
    name: false,
    email: false,
    phone: false,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email } = formData;

    const errors = {
      name: name.trim() === '',
      email: !validateEmail(email),
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }
    setUsers((users) => users.concat(formData));

    alert(`${formData.name} saved successfully`);

    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
    });
    navigate('/contactlist');
  };

  return (
    <PageLayout>
      <form className='form-action' onSubmit={handleSubmit}>
        <div className='input-action'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <span className='error'>Name is required</span>}
        </div>
        <div className='input-action'>
          <input
            type='text'
            name='organization'
            placeholder='Organization'
            value={formData.organization}
            onChange={handleChange}
          />
        </div>
        <div className='input-action'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && (
            <span className='error'>Enter a valid email address</span>
          )}
        </div>
        <div className='input-action'>
          <input
            type='tel'
            name='phone'
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button className='submitform' type='submit'>
          Save
        </button>
      </form>
    </PageLayout>
  );
};

export default AddContact;
