import styled from 'styled-components';

export const ParticipantCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

export const CheckIcon = styled.div`
  width: 30px;
  height: 28px;
  border-radius: 50%;
  border: 3px solid #998220;
  margin-right: 16px;
  cursor: pointer;
`;

export const CircleIcon = styled.div`
  width: 30px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  margin-right: 16px;
  cursor: pointer;
`;

export const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ParticipantName = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 4px;
  align-self: center;
`;

export const AmountDonatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AmountDonated = styled.p`
  font-size: 21px;
  font-weight: 700;
`;

export const AmountDonatedReceived = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;
