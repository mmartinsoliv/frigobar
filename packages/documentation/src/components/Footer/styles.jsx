import styled from 'styled-components';

const Wrapper = styled.footer`
  grid-area: footer;

  padding: ${({ theme: { spacings } }) => `${spacings.medium}px`};

  text-align: center;
`;

export default Wrapper;
