import React from 'react';
import { Wrap } from './ContactList.styled';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { nanoid } from '@reduxjs/toolkit';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  console.log(filter);

  let arrContacts = contacts;

  if (filter.filter !== null) {
    arrContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.filter)
    );
  }
  console.log(arrContacts);
  const showArr = Array.isArray(arrContacts) && arrContacts.length;

  return (
    <Wrap>
      {showArr &&
        arrContacts.map(({ id, name, number }) => {
          return <Contact key={nanoid()} id={id} name={name} number={number} />;
        })}
    </Wrap>
  );
}
