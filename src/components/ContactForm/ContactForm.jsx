import { nanoid } from 'nanoid';
import {
  Form,
  MarkField,
  ContactName,
  ContactNumber,
  BtnAdd,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const handleSubmit = event => {
    event.preventDefault();
    const hasContact = contacts.some(
      contact => contact.name === event.target.elements.name.value
    );
    if (hasContact) {
      alert(`${hasContact} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        id: nanoid(),
        name: event.target.elements.name.value,
        number: event.target.elements.number.value,
      })
    );
    event.currentTarget.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <MarkField>Name</MarkField>
        <ContactName type="text" name="name" required />
        <MarkField>Number</MarkField>
        <ContactNumber type="tel" name="number" required />
        <BtnAdd type="submit">Add contact</BtnAdd>
      </Form>
    </div>
  );
}
