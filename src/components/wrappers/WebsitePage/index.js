/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import MessageForm from '../../MessageForm';
import SEO from '../../commons/SEO';
import GitHubCorner from '../../commons/GitHubCorner';

export const WebsitePageContext = React.createContext({
  toggleModalContact: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalContact: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        backgroundImage="url(/images/background.png)"
        {...pageBoxProps}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
          border="1px solid white"
        >
          {(propsDoModal) => (
            <MessageForm propsDoModal={propsDoModal} />
          )}
        </Modal>
        {menuProps.display && (
          <Menu
            profilePic={menuProps.profilePic}
            toggleModalContact={() => setModalState(true)}
          />
        )}
        {children}
        <Footer />
        <GitHubCorner projectUrl="https://github.com/adrielerodr" />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
    profilePic: false,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
    profilePic: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
