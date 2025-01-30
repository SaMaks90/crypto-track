import styled from "styled-components";
import { Field, Form } from "formik";

export const FormLoginStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 220px;
  gap: 16px;
`;

export const FormRegistrationStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 220px;
  gap: 16px;
`;

export const LabelStyled = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #838383;
  padding: 8px;
`;

export const ButtonStyled = styled.button`
  border-radius: 8px;
  padding: 8px 0;
  border: none;
  background: #004585;
  color: #fff;
  transition:
    background 0.2s,
    box-shadow 0.2s,
    color 0.2s;

  &:hover {
    cursor: pointer;
    background: rgba(0, 69, 133, 0.5);
    color: #d6d6d6;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const MessageStyled = styled.span`
  color: #af0000;
  font-size: 12px;
`;
