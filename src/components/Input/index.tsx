import styled from 'styled-components';

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 15px;
  border: 1px solid #838383;
  border-radius: 25px;
  width: 100%;
  max-width: 335px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 1px 1px var(--primary-bg-color);
  }

  @media (max-width: 480px){
      padding: 10px 5px;
    }
`;

export default Input;