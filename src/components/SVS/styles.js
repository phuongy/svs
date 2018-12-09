import styled from 'react-emotion';
import { PRIMARY_TEXT, ALT1 } from '../../constants';

export const Wrapper = styled.div`
  color: ${PRIMARY_TEXT};
`

export const Events = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -0.5rem;
`;

export const Event = styled.div`
  border: 1.5px solid ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  border-radius: 6px;
  display: flex;
  flex: 0 0 calc(50% - .66rem);
  flex-direction: column;
  font-size: .875rem;
  margin: 0.33rem;
  min-width: 8rem;
  padding: 0.75rem 0.5rem;
  text-align: center;

  @media (min-width: 360px) {
    /* flex: 0 0 calc(50% - 1rem); */
    /* margin: 0.5rem; */
    /* min-width: 10rem; */
  }

  @media (min-width: 420px) {
    flex: 0 0 calc(50% - 1rem);
    margin: 0.5rem;
    min-width: 10rem;
  }

  @media (min-width: 600px) {
    flex: 0 0 auto;
  }
`;

export const Name = styled.div`
  color: ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  font-size: .875rem;
  font-weight: 600;
  margin: 0.5rem 0 0;
`;

export const Icon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 1.4rem;
  margin: 0.33rem 0;

  @media (min-width: 360px) {
    height: 2.8rem;
  }

  @media (min-width: 380px) {
    height: 4rem;
  }

  svg {
    transform: scale(0.6);

    @media (min-width: 360px) {
      transform: scale(0.8);
    }

    @media (min-width: 380px) {
      transform: scale(1);
    }
  }

  svg path, svg circle, svg polygon {
    fill: ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  }
`;

export const Day = styled.div`
  color: ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  font-size: 1.1rem;
  margin: 0 0 0.33rem;
`;

export const Duration = styled.div`
  color: ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
`;
