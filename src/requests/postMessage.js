const postMessage = (message) => (
  fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Não foi possível enviar mensagem agora :(');
  }).catch((error) => {
    throw Error(error);
  })
);

export default postMessage;
