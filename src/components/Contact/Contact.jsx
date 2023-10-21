import React from 'react';
import {
  BtnDelete,
  ContacNsme,
  ContacNumber,
  ContactWrap,
} from './Contact.styled';
import { HiOutlineTrash } from 'react-icons/hi';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <ContactWrap id={nanoid()} key={nanoid()}>
      <ContacNsme>{name}</ContacNsme>
      <ContacNumber>{number}</ContacNumber>
      <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        <HiOutlineTrash className="icon" />
      </BtnDelete>
    </ContactWrap>
  );
}
