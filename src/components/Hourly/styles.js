import styled from 'react-emotion';
import { PRIMARY_TEXT, ALT1 } from '../../constants';

export const Wrapper = styled.div`
  color: ${PRIMARY_TEXT};

  strong.current-hour {
    color: ${ALT1};
  }

  ul {
    /* margin: 0; */
    padding: 0;
  }

  li {
    margin: 0;
  }
`
