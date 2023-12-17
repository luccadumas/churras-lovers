// components/styles.ts
import styled from 'styled-components';

// ... (outros estilos que você já tem)

export const EventHeaderContainer = styled.div`
  margin-bottom: 43px;
  display: flex ;
  justify-content: space-between;
  flex-direction: row;
`;

export const EventHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const EventDate = styled.div`
  font-size: 28px;
  font-weight: 800;
  line-height: normal;
`;

export const EventName = styled.div`
  font-size: 36px;
  font-weight: 700;
  padding-top: 2px;
`;

export const EventStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ParticipantsCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: 500;
  padding-top: 2px;
  padding-bottom: 17px;

  svg{
    margin-right: 10px;
  }
`;

export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: 500;

  svg{
    margin-right: 10px;
  }
`;