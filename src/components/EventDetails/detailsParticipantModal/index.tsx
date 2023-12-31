import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles';
import api from '@/services/api';
import { customToast } from '@/utils/customToast';
import { useRouter } from 'next/router';

interface ParticipantData {
  id: number;
  name: string;
  valueWithDrink: number;
  valueWithoutDrink: number;
  amountReceived: number;
}

interface DetailsParticipantModalProps {
  isOpen: boolean;
  isEdit?: boolean;
  onRequestClose: () => void;
  updateData: () => void;
  data?: ParticipantData;
}


const DetailsParticipantModal: React.FC<DetailsParticipantModalProps> = ({ isOpen, isEdit, onRequestClose, updateData, data }) => {

  const router = useRouter();
  const { eventId, } = router.query;

  const [participantData, setParticipantData] = useState<ParticipantData>({
    id: 0,
    name: '',
    valueWithDrink: 0,
    valueWithoutDrink: 0,
    amountReceived: 0,
  });

  const validateFields = (participant: ParticipantData) => {
    console.log(participant)
    if (participant.name === '') {
      customToast('Nome do participante é obrigatório!', 'error');
      return;
    }
    if (participant.valueWithDrink === 0) {
      customToast('Valor com bebida é obrigatório!', 'error');
      return;
    }
    if (participant.valueWithoutDrink === 0) {
      customToast('Valor sem bebida é obrigatório!', 'error');
      return;
    }
    if (participant.amountReceived === 0) {
      customToast('Valor pago é obrigatório!', 'error');
      return;
    }

    return;
  }

  const postParticipant = (participant: ParticipantData) => {
    validateFields(participant);

    api.post('/participants', {
      data: {
        name: participant.name,
        valueWithDrink: participant.valueWithDrink,
        valueWithoutDrink: participant.valueWithoutDrink,
        paidAmount: participant.amountReceived,
        events: eventId,
      }
    })
      .then(response => {
        setParticipantData({
          id: 0,
          name: '',
          valueWithDrink: 0,
          valueWithoutDrink: 0,
          amountReceived: 0,
        });
        updateData();
        customToast('Participante adicionado com sucesso!', 'success');
        onRequestClose();
      })
      .catch(error => {
        customToast('Erro ao adicionar participante!', 'error');
      });
  };

  const updateParticipant = (participant: ParticipantData) => {
    validateFields(participant);

    api.put(`/participants/${participant.id}`, {
      data: {
        name: participant.name,
        valueWithDrink: participant.valueWithDrink,
        valueWithoutDrink: participant.valueWithoutDrink,
        paidAmount: participant.amountReceived,
      }
    })
      .then(response => {
        setParticipantData({
          id: 0,
          name: '',
          valueWithDrink: 0,
          valueWithoutDrink: 0,
          amountReceived: 0,
        });
        updateData();
        customToast('Participante editado com sucesso!', 'success');
        onRequestClose();
      })
      .catch(error => {
        customToast('Erro ao editar participante!', 'error');
      });
  };

  const deleteParticipant = (participantId: number) => {
    api.delete(`/participants/${participantId}`)
      .then(response => {
        updateData();
        customToast('Participante deletado com sucesso!', 'success');
        onRequestClose();
      })
      .catch(error => {
        customToast('Erro ao deletar participante!', 'error');
      });
  }


  const handleAddEditParticipant = () => {
    if (participantData.name.trim() !== '') {
      isEdit ? updateParticipant(participantData) : postParticipant(participantData);
    }
  };

  useEffect(() => {
    if (data) {
      setParticipantData(data);
    }
  }, [data]);

  return (
    <S.StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adicionar Participante"
    >
      <S.ModalHeader>
        <S.ModalTitle>{isEdit ? "Editar" : "Adicionar"} Participante</S.ModalTitle>
        {isEdit && <S.DeleteButton onClick={() => deleteParticipant(participantData.id)}>Excluir</S.DeleteButton>}
      </S.ModalHeader>
      <S.FormGroup>
        <S.InputLabel>Nome:</S.InputLabel>
        <S.Input
          type="text"
          value={participantData.name}
          onChange={(e) => setParticipantData({ ...participantData, name: e.target.value })}
        />
      </S.FormGroup>
      <S.FormGroupValues>
        <S.FormGroup>
          <S.InputLabel>Valor com bebida:</S.InputLabel>
          <S.Input
            type="number"
            value={participantData.valueWithDrink}
            onChange={(e) => setParticipantData({ ...participantData, valueWithDrink: +e.target.value })}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.InputLabel>Valor sem bebida:</S.InputLabel>
          <S.Input
            type="number"
            value={participantData.valueWithoutDrink}
            onChange={(e) => setParticipantData({ ...participantData, valueWithoutDrink: +e.target.value })}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.InputLabel>Valor pago:</S.InputLabel>
          <S.Input
            type="number"
            value={participantData.amountReceived}
            onChange={(e) => setParticipantData({ ...participantData, amountReceived: +e.target.value })}
          />
        </S.FormGroup>
      </S.FormGroupValues>
      <S.CloseButton onClick={onRequestClose}>Fechar</S.CloseButton>
      <S.AddButton onClick={handleAddEditParticipant}>{isEdit ? "Editar" : "Adicionar"}</S.AddButton>
    </S.StyledModal>
  );
};

export default DetailsParticipantModal;
