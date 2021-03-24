import styled from 'styled-components';

const Button = styled.button`
  color: #FFF;
  background-color: var(--primary-bg-color);
  border-radius: 25px;
  border: 0;
  padding: 15px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .8;
  }
  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`;

export default Button;