import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import Grid from '../../foundation/layout/Grid';

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 100;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

function Modal({ isOpen, onClose, children }) {
  const handleChange = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
    if (!isSafeArea) {
      onClose();
    }
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
    >
      { isOpen && <LockScroll /> }
      <motion.div
        variants={{
          open: {
            y: 0,
          },
          closed: {
            y: '40%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Grid.Row
          flex={1}
          marginLeft={0}
          marginRight={0}
          justifyContent="flex-end"
          backgroundColor="#A96D6D"
          borderRadius={5}
        >
          <Grid.Col
            flex={1}
            display="flex"
            flexDirection="column"
            paddingRight={{ md: '0' }}
          >
            <motion.button
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#A96D6D',
                color: 'white',
                border: 'none',
                borderRadius: 50,
                marginTop: 15,
              }}
              onClick={(event) => {
                handleChange(event);
              }}
            >
              X
            </motion.button>
            { children({ 'data-modal-safe-area': 'true' }) }
          </Grid.Col>
        </Grid.Row>
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
