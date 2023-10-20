import { styled } from 'styled-components';
export const Wrap = styled.ul`
  display: flex;
  flex-direction: column;
  width: 316px;
  padding: 0;
  margin: 0;
  /* margin-right: auto;
  margin-right: auto; */
`;
export const ContactWrap = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 316px;
  height: 30px;
  gap: 5px;
  margin-right: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;
export const ContacNsme = styled.p`
  width: 166px;
  height: 30px;
  font-size: 16px;
`;
export const ContacNumber = styled.p`
  width: 110px;
  font-size: 16px;
`;
export const BtnDelete = styled.button`
  display: inline-block;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  background-color: rgb(255, 221, 51);
  border: 2px rgb(255, 187, 51) solid;
  cursor: pointer;
  padding: 4px;
  .icon {
    width: 20px;
    height: 20px;
  }
  &:hover,
  &:focus {
    background-color: rgb(255, 128, 0);
  }
`;
