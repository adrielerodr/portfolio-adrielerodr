import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Box from '../src/components/foundation/layout/Box';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import NotFoundAnimation from '../public/images/animations/404-error.json';

function NotFoundScreen() {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Lottie
        config={{ animationData: NotFoundAnimation, loop: true, autoplay: true }}
      />
    </Box>
  );
}

export default websitePageHOC(NotFoundScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Not Found',
    },
    pageBoxProps: {
      padding: '28px',
      flexWrap: 'wrap',
    },
  },
});
