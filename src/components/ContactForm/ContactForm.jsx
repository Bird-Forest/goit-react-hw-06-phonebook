import { nanoid } from 'nanoid';
import {
  Form,
  MarkField,
  ContactName,
  ContactNumber,
  BtnAdd,
} from './ContactForm.styled';
import { useState } from 'react';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    props.onAddContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <MarkField>Name</MarkField>
        <ContactName
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <MarkField>Number</MarkField>
        <ContactNumber
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
        <BtnAdd type="submit">Add contact</BtnAdd>
      </Form>
    </div>
  );
};
