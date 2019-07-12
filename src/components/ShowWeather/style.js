import styled from 'styled-components';

export const Wrapper = styled.h1`
  border: 1px solid red;
`;

export const Label = styled.div`
  text-align: center;
  margin: 25px;
`;

export const ListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ListGroupItem = styled.div`
  padding: 5px;
  text-align: center;
  width: 50%;

  @media (min-width: 768px) {
    flex: 1;
  }

  @media (min-width: 481px) {
    width: 33.33%;
  }
`;

export const Day = styled.p`
  font-size: 12px;
  margin: 0;
  color: #5f5f5f;
`;

export const Date = styled.p`
  font-weight: 600;
`;

export const WeatherState = styled.p`
  font-size: 10px;
  color: #03a9f4;
  text-transform: uppercase;
`;

export const WeatherIcon = styled.img`
  width: 65px;
  margin-bottom: 15px;
`;

export const Temperature = styled.p`
  color: #7e909a;
`;
