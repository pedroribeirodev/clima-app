import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 350px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #ddd;

  h1 {
    color: #707070;
    font-size: 14px;
  }

  h3 {
    color: #0080cd;
    font-size: 23px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #707070;
    margin-top: 10px;

    li {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Temp = styled.span`
  color: #707070;
  font-size: 68px;
`;

export const TempDescription = styled.span`
  color: #707070;
  font-size: 15px;
  text-transform: capitalize;
`;
