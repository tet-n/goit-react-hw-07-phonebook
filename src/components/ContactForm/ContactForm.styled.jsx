import styled from '@emotion/styled';
import { mq } from 'styles/mediaQuery';

export const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

  margin-bottom: 32px;

  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};

  width: 100%;

  ${mq[0]} {
    margin: 0 auto;
    margin-bottom: 16px;
    max-width: 300px;
    text-align: center;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 4px 8px;
  margin-top: 4px;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: 4px;
  outline: none;
`;

export const Button = styled.button`
  padding: 4px 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.ghostWhite};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transition: ${({ theme }) =>
    `background-color ${theme.animation.duration} ${theme.animation.cubicBezier}`};

  :hover,
  :focus,
  :active {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
