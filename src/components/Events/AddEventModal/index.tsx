import React, { useEffect, useState } from 'react';
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

  const [eventData, setEventData] = useState<EventData>({
    id: 0,
    date: '',
    name: '',
    description: '',
  });

  const handleValidateFields = (event: EventData) => {
    if (event.date === '') {
      customToast('Data do evento é obrigatória!', 'error');
      return;
    }
    if (event.name === '') {
      customToast('Nome do evento é obrigatório!', 'error');
      return;
    }
    if (event.description === '') {
      customToast('Descrição do evento é obrigatória!', 'error');
      return;
    }

    return;
  }

  const postEvent = (event: EventData) => {
    handleValidateFields(event);

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
    handleValidateFields(event);

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
        <S.InputLabel>Data</S.InputLabel>
        <S.Input
          type="date"
          value={eventData.date}
          onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
        />
      </S.FormGroup>
      <S.FormGroup>
        <S.InputLabel>Nome</S.InputLabel>
        <S.Input
          type="text"
          value={eventData.name}
          onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
        />
      </S.FormGroup>
      <S.FormGroup>
        <S.InputLabel>Descrição</S.InputLabel>
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
