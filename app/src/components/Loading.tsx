import { LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';

const Loading = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  useEffect(() => {
    let mounted = true;
    let timeoutId: NodeJS.Timeout;
    if (mounted) {
      timeoutId = setTimeout(() => setShouldDisplay(true), 300);
    }
    return () => {
      if (mounted && timeoutId) {
        mounted = false;
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return <LoadingOverlay visible={shouldDisplay} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />;
};

export default Loading;
