// components/EventHeader.tsx
import React, { useState } from 'react';
import * as S from './styles';
import { handleParsedDate } from '@/utils/parsedDate';
import { format } from 'date-fns';
import IconPeople from '../../..//assets/icons/icon-people.svg';
import IconMoney from '../../../assets/icons/icon-money.svg';
import AddParticipantModal from '../detailsParticipantModal';
import Router from 'next/router';
import { formatterAmount } from '@/utils/formatterAmount';

interface EventHeaderProps {
  updateData: () => void;
  date: string;
  name: string;
  participantsCount: number;
  totalAmount: number;
};

const EventHeader: React.FC<EventHeaderProps> = ({ updateData, date, name, participantsCount, totalAmount }) => {

  const [isAddParticipantModalOpen, setAddParticipantModalOpen] = useState(false);

  return (
    <>
      <S.ButtonBack onClick={() => Router.back()}>{"<"} Voltar</S.ButtonBack>
      <S.EventHeaderContainer>
        <S.EventHeaderInfo>
          <S.EventDate>{format(handleParsedDate(date), 'dd/MM')}</S.EventDate>
          <S.EventName>{name}</S.EventName>
        </S.EventHeaderInfo>
        <S.EventStats>
          <S.ParticipantsCount>
            <IconPeople /> {participantsCount}
          </S.ParticipantsCount>
          <S.TotalAmount>
            <IconMoney /> R$ {formatterAmount(totalAmount)}
          </S.TotalAmount>
        </S.EventStats>
      </S.EventHeaderContainer>
      <S.AddParticipantButton onClick={() => { setAddParticipantModalOpen(true) }}>
        Adicionar Participante
      </S.AddParticipantButton>

      <AddParticipantModal
        isOpen={isAddParticipantModalOpen}
        isEdit={false}
        onRequestClose={() => setAddParticipantModalOpen(false)}
        updateData={updateData}
      />
    </>
  );
};

export default EventHeader;
