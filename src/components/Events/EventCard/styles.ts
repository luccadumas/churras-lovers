// components/EventCardStyles.ts
import styled from 'styled-components';

export const EventCard = styled.div`
  position: relative;
  border-radius: 2px;
  background: #FFF;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  width: 282px;
  height: 192px;
  cursor: pointer;
`;

export const EventCardDate = styled.div`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 8px;
`;

export const EventCardName = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const EventCardDetails = styled.div`
  position: absolute;
  bottom: 8px; /* Adiciona um espaçamento inferior */
  left: 0;
  right: 0;
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 21px;
  font-weight: 500;

  span {
    margin-left: 8px;
  }

  & > div {
    margin-right: 10px;
  }
`;
