import React from 'react';
import Grid from '../foundation/layout/Grid';
import Button from '../commons/Button';
import Modal from '../commons/Modal';
import MessageForm from '../MessageForm';

export default function ContactBox() {
  const [isContactModalOpen, setStateContactModalState] = React.useState(false);

  return (
    <div>
      <Grid.Row
        justifyContent="center"
      >
        <Grid.Col
          padding={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          marginTop={30}
        >
          <Button
            display="block"
            variant="primary.main"
            onClick={() => setStateContactModalState(!isContactModalOpen)}
          >
            Entre em contato
          </Button>
        </Grid.Col>
      </Grid.Row>
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => {
          setStateContactModalState(false);
        }}
        border="1px solid white"
      >
        {(ModalProps) => (
          <MessageForm modalProps={ModalProps} />
        )}
      </Modal>
    </div>
  );
}
