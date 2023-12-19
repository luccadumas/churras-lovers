import styled from 'styled-components';

export const EventsContainer = styled.div`
  width: 100%;
  margin: 0;
  font-weight: 800;
  background-color: transparent;
`;

export const Event = styled.div`
  max-width: 800px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  background: transparent;
`;

export const EventsContent = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-gap: 1rem;
  justify-content: space-around;
  padding-top: 60px;
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
`;

export const EventCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: calc(50% - 10px);
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  box-sizing: border-box;
`;

export const EventCardDate = styled.div`
  font-size: 14px;
  margin-top: 53px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const EventCardName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const EventCardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  & > div {
    margin-right: 10px;
  }
`;

export const NoEvents = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
  text-align: center;
`;

export const NoEventsText = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  margin-top: 8px;
  text-align: center;
`;
