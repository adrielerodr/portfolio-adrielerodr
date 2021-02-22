import React from 'react';
import Text from '../foundation/Text';

export default function Cover() {
  return (
    <div>
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
      >
        Olá, sou Adriele Rodrigues!
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.main"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
      >
        Muito prazer em te conhecer. Seja bem vindo ao meu portfólio.
      </Text>
    </div>
  );
}
