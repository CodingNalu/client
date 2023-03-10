import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 1rem;
    font-size: 35px;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 35px;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
    font-size: 25px;
  }
`;

export default Wrapper;
