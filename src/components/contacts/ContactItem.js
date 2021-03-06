import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <p style={{ float: 'right' }}>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(contact)}
          >
            <i className='far fa-edit'></i>{' '}
            <span className='hide-sm'>Edit</span>
          </button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            <i className='far fa-trash-alt'></i>{' '}
            <span className='hide-sm'>Delete</span>
          </button>
        </p>
      </h3>
      <p>
        <span
          className={
            'badge ' +
            (type.toLowerCase() === 'professional'
              ? 'badge-success'
              : 'badge-second-primary')
          }
        >
          {/* Makes first character capital and then adds the rest of the word back starting after the frist character */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </p>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
