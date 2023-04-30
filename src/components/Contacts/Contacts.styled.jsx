import styled from '@emotion/styled';
import { mq } from 'styles/mediaQuery';

export const Table = styled.table`
  width: 100%;

  ${mq[0]} {
    margin: 0 auto;
    max-width: 300px;
    text-align: center;
  }
`;
export const TR = styled.tr`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightBlue}`};
`;

export const THName = styled.th`
  text-align: left;
  font-weight: 700;
`;

export const THNumber = styled.th`
  text-align: left;
  font-weight: 500;
`;

export const THButton = styled.th`
  text-align: right;
`;

export const Button = styled.button`
  padding: 2px 4px;
  border-radius: 4px;
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
