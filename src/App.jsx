import React, { useState, useEffect } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Theme, TitleForm, TitleContact } from './App.styled';
import contactData from '../src/contactData.json';

export const App = () => {
  const [contacts, setContacts] = useState(contactData);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem('contact');
    if (storageContacts) {
      setContacts(JSON.parse(storageContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = newContact => {
    const hasNameContact = contacts.some(
      contact => contact.name === newContact.name
    );
    if (hasNameContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts([newContact, ...contacts]);
  };

  const onDeleteContact = contactId => {
    console.log(contacts);
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const onInputContact = event => {
    const searchContact = event.target.value.toLowerCase();
    setFilter(searchContact);
  };

  const findContact = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const filteredContacts = findContact();
  return (
    <Theme>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm onAddContact={onAddContact} />
      <TitleContact>Contacts</TitleContact>
      <Filter filter={filter} onInputContact={onInputContact} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={onDeleteContact}
      />
    </Theme>
  );
};
