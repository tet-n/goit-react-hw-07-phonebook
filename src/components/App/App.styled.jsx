import styled from '@emotion/styled';
import { mq } from 'styles/mediaQuery';

export const Phonebook = styled.div`
  padding: 32px 8px;
  margin: 0 auto;
  width: 100%;
  text-align: left;

  ${mq[0]} {
    max-width: 500px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;

  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const SubTitle = styled.h2`
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
