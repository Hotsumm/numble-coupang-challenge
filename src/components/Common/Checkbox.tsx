import React from 'react';
import styled from '@emotion/styled';

type CheckboxProps = {
  register: any;
  name: string;
  id?: number;
  label: string;
  fontSize?: string;
  bold?: boolean;
  description?: string;
  checked: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  name,
  id,
  register,
  label,
  fontSize = '14px',
  bold,
  description,
  onClick,
}) => {
  return (
    <Container>
      <Label fontSize={fontSize} bold={bold}>
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onClick={onClick}
          onChange={onClick}
          {...register}
        />
        <span>{label}</span>
      </Label>
      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default Checkbox;

const Container = styled.div`
  width: 100%;
  & + & {
    padding-top: 12px;
  }
  :nth-child(n + 8) {
    padding-left: 22px;
  }
`;

const Label = styled.label<{ fontSize: string; bold?: boolean }>`
  line-height: 1.14;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 auto;
  margin-right: 25px;
  cursor: pointer;
  color: #111;
  input {
    cursor: pointer;
    min-width: 20px;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  span {
    display: block;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => (props.bold ? 'bold' : 500)};
    line-height: 1.4;
    word-break: break-all;
    color: #111111;
  }
`;

const Description = styled.span`
  font-size: 12px;
  line-height: 1.4;
  color: #555;
  margin-top: 6px;
  margin-left: 26px;
  display: block;
`;
