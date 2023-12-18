// components/AddParticipantModal/AddParticipantModal.tsx
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
  // participants?: ParticipantProps[];
}

interface AddParticipantModalProps {
  isOpen: boolean;
  isEdit?: boolean;
  onRequestClose: () => void;
  updateData: () => void;
  data?: ParticipantData;
}


const AddParticipantModal: React.FC<AddParticipantModalProps> = ({ isOpen, isEdit, onRequestClose, updateData, data }) => {

  const router = useRouter();
  const { eventId, } = router.query;

  const [participantData, setParticipantData] = useState<ParticipantData>({
    id: 0,
    name: '',
    valueWithDrink: 0,
    valueWithoutDrink: 0,
    amountReceived: 0,
  });


  const postParticipant = (participant: ParticipantData) => {
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
        onRequestClose();
        updateData();
        customToast('Participante adicionado com sucesso!', 'success');
      })
      .catch(error => {
        console.error(error, "ERROR RESPONSE RESPONSE");
        customToast('Erro ao adicionar participante!', 'error');
      });
  };

  const updateParticipant = (participant: ParticipantData) => {
    api.put(`/participants/${participant.id}`, {
      data: {
        name: participant.name,
        valueWithDrink: participant.valueWithDrink,
        valueWithoutDrink: participant.valueWithoutDrink,
        paidAmount: participant.amountReceived,
      }
    })
      .then(response => {
        console.log(response.data);
        onRequestClose();

        customToast('Participante editado com sucesso!', 'success');
      })
      .catch(error => {
        console.log(error);
        customToast('Erro ao editar participante!', 'error');
      });
  };

  const deleteParticipant = (participantId: number) => {
    api.delete(`/participants/${participantId}`)
      .then(response => {
        console.log(response.data);
        updateData();
        onRequestClose();
        customToast('Participante deletado com sucesso!', 'success');
      })
      .catch(error => {
        console.log(error);
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
      <S.InputLabel>
        Nome do Participante:
        <S.Input
          type="text"
          value={participantData.name}
          onChange={(e) => setParticipantData({ ...participantData, name: e.target.value })}
        />
      </S.InputLabel>
      <S.FormGroup>
        <S.InputLabel>
          Valor com bebida:
          <S.Input
            type="number"
            value={participantData.valueWithDrink}
            onChange={(e) => setParticipantData({ ...participantData, valueWithDrink: +e.target.value })}
          />
        </S.InputLabel>
        <S.InputLabel>
          Valor sem bebida:
          <S.Input
            type="number"
            value={participantData.valueWithoutDrink}
            onChange={(e) => setParticipantData({ ...participantData, valueWithoutDrink: +e.target.value })}
          />
        </S.InputLabel>
        <S.InputLabel>
          Valor recebido:
          <S.Input
            type="number"
            value={participantData.amountReceived}
            onChange={(e) => setParticipantData({ ...participantData, amountReceived: +e.target.value })}
          />
        </S.InputLabel>
      </S.FormGroup>
      <S.AddButton onClick={handleAddEditParticipant}>{isEdit ? "Editar" : "Adicionar"}</S.AddButton>
      <S.CloseButton onClick={onRequestClose}>Fechar</S.CloseButton>
    </S.StyledModal>
  );
};

export default AddParticipantModal;
