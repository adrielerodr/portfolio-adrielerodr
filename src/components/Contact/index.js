import React from 'react';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';
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
        >
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'center',
            }}
          >
            Entre em contato
          </Text>
          <Button
            display="block"
            variant="primary.main"
            onClick={() => setStateContactModalState(!isContactModalOpen)}
          >
            +
          </Button>
        </Grid.Col>
      </Grid.Row>
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => {
          setStateContactModalState(false);
        }}
      >
        {(ModalProps) => (
          <MessageForm modalProps={ModalProps} />
        )}
      </Modal>
    </div>
  );
}
