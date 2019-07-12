import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 3%;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  background: white;
  padding: 20px 30px;
  -webkit-box-shadow: 5px 5px 10px 0px rgba(194, 194, 194, 1);
  -moz-box-shadow: 5px 5px 10px 0px rgba(194, 194, 194, 1);
  box-shadow: 5px 5px 10px 0px rgba(194, 194, 194, 1);
`;

export const CardHeader = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  color: #6bb9f0;
`;

export const CardBody = styled.div`
  padding: 20px;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  color: white;
  background: #bf55ec;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;
