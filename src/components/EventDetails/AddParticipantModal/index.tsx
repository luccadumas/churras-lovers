// components/AddParticipantModal/AddParticipantModal.tsx
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles';

interface ParticipantData {
  name: string;
  valueWithDrink: number;
  valueWithoutDrink: number;
  amountReceived: number;
}

interface AddParticipantModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddParticipant: (participantData: ParticipantData) => void;
  data?: ParticipantData;
}

const AddParticipantModal: React.FC<AddParticipantModalProps> = ({ isOpen, onRequestClose, onAddParticipant, data }) => {
  const [participantData, setParticipantData] = useState<ParticipantData>({
    name: '',
    valueWithDrink: 0,
    valueWithoutDrink: 0,
    amountReceived: 0,
  });

  useEffect(() => {
    if (data) {
      setParticipantData(data);
    }
  }, [data]);

  const handleAddParticipant = () => {
    if (participantData.name.trim() !== '') {
      onAddParticipant(participantData);
      setParticipantData({
        name: '',
        valueWithDrink: 0,
        valueWithoutDrink: 0,
        amountReceived: 0,
      });
      onRequestClose();
    }
  };

  return (
    <S.StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adicionar Participante"
    >
      <S.ModalTitle>Adicionar Participante</S.ModalTitle>
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
      <S.AddButton onClick={handleAddParticipant}>Adicionar</S.AddButton>
      <S.CloseButton onClick={onRequestClose}>Fechar</S.CloseButton>
    </S.StyledModal>
  );
};

export default AddParticipantModal;
