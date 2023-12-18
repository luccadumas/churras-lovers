import React, { useState } from 'react';
import * as S from './styles';
import AddParticipantModal from '../AddParticipantModal';

interface ParticipantCardProps {
  name: string;
  amountDonated: number;
  valueWithDrink: number;
  valueWithoutDrink: number;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ name, amountDonated, valueWithDrink, valueWithoutDrink }) => {
  const isAmountWithDrinkReceived = amountDonated >= valueWithDrink;
  const isAmountWithoutDrinkReceived = amountDonated >= valueWithoutDrink;

  const amountWithDrinkStyle: React.CSSProperties = {
    textDecoration: isAmountWithDrinkReceived ? 'line-through' : 'none',
  };

  const amountWithoutDrinkStyle: React.CSSProperties = {
    textDecoration: isAmountWithoutDrinkReceived && !isAmountWithDrinkReceived ? 'line-through' : 'none',
  };

  const [isAddParticipantModalOpen, setAddParticipantModalOpen] = useState(false);

  const handleAddParticipant = (participantName: string) => {
    // Lógica para adicionar participante usando a API ou estado local
    console.log('Adicionando participante:', participantName);
  };


  return (
    <>
      <S.ParticipantCard>
        {isAmountWithDrinkReceived || isAmountWithoutDrinkReceived ? <S.CircleIcon /> : <S.CheckIcon onClick={() => { setAddParticipantModalOpen(true) }} />}
        <S.ParticipantInfo>
          <S.ParticipantName>{name}</S.ParticipantName>
          <S.AmountDonatedContainer>
            <S.AmountDonated style={amountWithDrinkStyle}>Com bebida: R$ {valueWithDrink}</S.AmountDonated>
            <S.AmountDonated style={amountWithoutDrinkStyle}>Sem bebida: R$ {valueWithoutDrink}</S.AmountDonated>
            <S.AmountDonatedReceived>Recebido: R$ {amountDonated}</S.AmountDonatedReceived>
          </S.AmountDonatedContainer>
        </S.ParticipantInfo>
      </S.ParticipantCard>

      {isAddParticipantModalOpen && (
        <AddParticipantModal
          isOpen={isAddParticipantModalOpen}
          onRequestClose={() => setAddParticipantModalOpen(false)}
          onAddParticipant={handleAddParticipant}
          data={{
            name,
            valueWithDrink,
            valueWithoutDrink,
            amountReceived: amountDonated,
          }}
        />
      )}
    </>
  );
};

export default ParticipantCard;
