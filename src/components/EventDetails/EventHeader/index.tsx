import React, { useState } from 'react';
import * as S from './styles';
import { handleParsedDate } from '@/utils/parsedDate';
import { format } from 'date-fns';
import IconPeople from '../../..//assets/icons/icon-people.svg';
import IconMoney from '../../../assets/icons/icon-money.svg';
import AddParticipantModal from '../detailsParticipantModal';
import Router from 'next/router';
import { formatterAmount } from '@/utils/formatterAmount';
import GenericModal from '@/components/Events/genericModal';
import { customToast } from '@/utils/customToast';
import api from '@/services/api';

interface EventHeaderProps {
  updateData: () => void;
  date: string;
  name: string;
  participantsCount: number;
  totalAmount: number;
};

const EventHeader: React.FC<EventHeaderProps> = (
  { updateData, date, name, participantsCount, totalAmount }
) => {

  const [isAddParticipantModalOpen, setAddParticipantModalOpen] = useState(false);
  const [isDeleteEventModalOpen, setDeleteEventModalOpen] = useState(false);

  const router = Router;
  const { eventId } = router.query;

  const deleteEvent = () => {
    api.delete(`/events/${eventId}`)
      .then(response => {
        setDeleteEventModalOpen(false);
        updateData();
        router.push('/events');
        customToast('Evento excluído com sucesso!', 'success');
      })
      .catch(error => {
        customToast('Erro ao excluir evento!', 'error');
      });
  }

  return (
    <>
      <S.EventHeaderContainer>
        <S.ButtonBack onClick={() => Router.back()}>{"<"} Voltar</S.ButtonBack>
        <S.DeleteEventButton onClick={() => {
          setDeleteEventModalOpen(true)
        }}>Excluir</S.DeleteEventButton>
      </S.EventHeaderContainer>
      <S.EventSubHeaderContainer>
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
      </S.EventSubHeaderContainer>
      <S.AddParticipantButton onClick={() => { setAddParticipantModalOpen(true) }}>
        Adicionar participante
      </S.AddParticipantButton>

      <GenericModal
        isOpen={isDeleteEventModalOpen}
        title="Excluir evento"
        message="Tem certeza que deseja excluir esse evento? Todos os participantes serão excluídos também."
        confirmButtonName="Excluir"
        cancelButtonName="Cancelar"
        onConfirm={() => {
          deleteEvent();
        }}
        onRequestClose={() => setDeleteEventModalOpen(false)}
      />

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
