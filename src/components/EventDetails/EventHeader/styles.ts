import styled from 'styled-components';

export const AddParticipantButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonBack = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  &:hover {
    opacity: 0.7;
  }
`;

export const DeleteEventButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.red};
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:hover {
    opacity: 0.7;
  }
`;

export const EventHeaderContainer = styled.div`
  margin-bottom: 43px;
  display: flex ;
  justify-content: space-between;
  flex-direction: row;
`;

export const EventSubHeaderContainer = styled.div`
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

export const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 20px;
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
