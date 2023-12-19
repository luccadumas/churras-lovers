import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles';
import api from '@/services/api';
import { customToast } from '@/utils/customToast';
import { useRouter } from 'next/router';

interface EventData {
  id: number;
  date: string;
  name: string;
  description: string;
}

interface AddEventModalProps {
  isOpen: boolean;
  isEdit?: boolean;
  onRequestClose: () => void;
  updateData: () => void;
  data?: EventData;
}

const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, isEdit, onRequestClose, updateData, data }) => {
  const router = useRouter();
  const { eventId } = router.query;

  const [eventData, setEventData] = useState<EventData>({
    id: 0,
    date: '',
    name: '',
    description: '',
  });

  const postEvent = (event: EventData) => {
    api.post('/events', {
      data: {
        date: event.date,
        name: event.name,
        observation: event.description,
        participants: [],
      }
    })
      .then(response => {
        setEventData({
          id: 0,
          date: '',
          name: '',
          description: '',
        });
        onRequestClose();
        updateData();
        customToast('Evento adicionado com sucesso!', 'success');
      })
      .catch(error => {
        customToast('Erro ao adicionar evento!', 'error');
      });
  };

  const updateEvent = (event: EventData) => {
    api.put(`/events/${event.id}`, {
      data: {
        date: event.date,
        name: event.name,
        observation: event.description,
      }
    })
      .then(response => {
        setEventData({
          id: 0,
          date: '',
          name: '',
          description: '',
        });
        onRequestClose();
        updateData();
        customToast('Evento editado com sucesso!', 'success');
      })
      .catch(error => {
        customToast('Erro ao editar evento!', 'error');
      });
  };

  const deleteEvent = (eventId: number) => {
    api.delete(`/events/${eventId}`)
      .then(response => {
        updateData();
        onRequestClose();
        customToast('Evento deletado com sucesso!', 'success');
      })
      .catch(error => {
        customToast('Erro ao deletar evento!', 'error');
      });
  }

  const handleAddEditEvent = () => {
    if (eventData.name.trim() !== '') {
      isEdit ? updateEvent(eventData) : postEvent(eventData);
    }
  };

  useEffect(() => {
    if (data) {
      setEventData(data);
    }
  }, [data]);

  return (
    <S.StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adicionar Evento"
    >
      <S.ModalHeader>
        <S.ModalTitle>{isEdit ? "Editar" : "Adicionar"} Evento</S.ModalTitle>
        {isEdit && <S.DeleteButton onClick={() => deleteEvent(eventData.id)}>Excluir</S.DeleteButton>}
      </S.ModalHeader>
      <S.FormGroup>
        <S.InputLabel>Data do evento</S.InputLabel>
        <S.Input
          type="date"
          value={eventData.date}
          onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
        />
      </S.FormGroup>
      <S.FormGroup>
        <S.InputLabel>Nome do evento</S.InputLabel>
        <S.Input
          type="text"
          value={eventData.name}
          onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
        />
      </S.FormGroup>
      <S.FormGroup>
        <S.InputLabel>Descrição do evento</S.InputLabel>
        <S.TextArea
          value={eventData.description}
          onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
        />
      </S.FormGroup>
      <S.CloseButton onClick={onRequestClose}>Fechar</S.CloseButton>
      <S.AddButton onClick={handleAddEditEvent}>{isEdit ? "Editar" : "Adicionar"}</S.AddButton>
    </S.StyledModal>
  );
};

export default AddEventModal;
