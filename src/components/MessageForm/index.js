import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Button from '../commons/Button';
import TextField from '../forms/TextField';
import Box from '../foundation/layout/Box';
import Text from '../foundation/Text';
import errorAnimation from '../../../public/images/animations/error.json';
import successAnimation from '../../../public/images/animations/success.json';
import postMessage from '../../requests/postMessage';

const formStates = {
  DEFAULT: 'DEFAULT',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [messageInfo, setMessageInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function emailIsInvalid() {
    return messageInfo.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(messageInfo.email);
  }

  function handlePostMessage() {
    const messageDTO = {
      name: messageInfo.name,
      email: messageInfo.email,
      message: messageInfo.message,
    };

    return postMessage(messageDTO)
      .then(() => {
        setSubmissionStatus(formStates.DONE);
        setMessageInfo({
          name: '',
          email: '',
          message: '',
        });
      }).catch(() => {
        setSubmissionStatus(formStates.ERROR);
      }).finally(() => setTimeout(() => setSubmissionStatus(formStates.DEFAULT), 10000));
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setMessageInfo({
      ...messageInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = messageInfo.email.length === 0
    || messageInfo.name.length === 0
    || messageInfo.message.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmited(true);
        handlePostMessage();
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
        >
          Envie sua mensagem
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.main"
          marginBottom="32px"
        >
          Vamos criar algo incrível juntos!
        </Text>

        <div>
          <TextField
            placeholder="Nome"
            name="name"
            value={messageInfo.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            placeholder="Email"
            name="email"
            type="email"
            value={messageInfo.email}
            onChange={handleChange}
          />
          { emailIsInvalid() && (
            <Text
              variant="smallestException"
              tag="p"
              color="tertiary.main"
              marginBottom="32px"
            >
              Email inválido!
            </Text>
          ) }
        </div>

        <div>
          <TextField
            placeholder="Mensagem"
            name="message"
            value={messageInfo.message}
            onChange={handleChange}
          />
        </div>

        <Button
          variant="primary.main"
          type="submit"
          disabled={isFormInvalid}
          fullWidth
        >
          Enviar
        </Button>

        { isFormSubmited && submissionStatus === formStates.DONE && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginTop={30}
          >
            <Lottie
              width="50px"
              height="50px"
              config={{ animationData: successAnimation, loop: false, autoplay: true }}
            />
            <Text
              variant="smallestException"
              tag="p"
              color="tertiary.main"
              marginBottom="32px"
            >
              Mensagem enviada com sucesso! Até breve!
            </Text>
          </Box>
        )}

        { isFormSubmited && submissionStatus === formStates.ERROR && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginTop={30}
          >
            <Lottie
              width="50px"
              height="50px"
              config={{ animationData: errorAnimation, loop: false, autoplay: true }}
            />
            <Text
              variant="smallestException"
              tag="p"
              color="tertiary.main"
              marginBottom="32px"
            >
              Erro ao enviar mensagem, tente novamente!
            </Text>
          </Box>
        )}
      </Box>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function MessageForm({ propsDoModal }) {
  return (
    <Box
      boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      flex={1}
      padding={{
        xs: '16px',
        md: '35px',
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      <FormContent />
    </Box>
  );
}
