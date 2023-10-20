import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { nanoid } from 'nanoid';

import {
  Wrap,
  ContactWrap,
  ContacNsme,
  ContacNumber,
  BtnDelete,
} from './ContactList.styled';

export function ContactList({ contacts, deleteContact }) {
  return (
    <Wrap>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactWrap id={id} key={nanoid()}>
            <ContacNsme>{name}</ContacNsme>
            <ContacNumber>{number}</ContacNumber>
            <BtnDelete type="button" onClick={() => deleteContact(id)}>
              <HiOutlineTrash className="icon" />
            </BtnDelete>
          </ContactWrap>
        );
      })}
    </Wrap>
  );
}
