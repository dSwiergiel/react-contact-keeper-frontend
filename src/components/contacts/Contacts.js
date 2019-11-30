import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  return (
    <div style={cardContainerStyle}>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={300} classNames='item'>
                <ContactItem contact={contact}></ContactItem>
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={300} classNames='item'>
                <ContactItem contact={contact}></ContactItem>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

// for setting mobile height of card container
const containerHeight = window.innerWidth < 480 ? '35vh' : '75vh';

const cardContainerStyle = {
  paddingRight: '.1rem',
  overflowY: 'auto',
  height: containerHeight
};

export default Contacts;
