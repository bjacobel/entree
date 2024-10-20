import { Switch } from '@mantine/core';
import NoSleep from 'nosleep.js';
import { useCallback, useMemo, useState } from 'react';

const SleepLock = () => {
  const [noSleepEnabled, setNoSleepEnabled] = useState(false);
  const noSleep = useMemo(() => new NoSleep(), []);

  const toggleNoSleep = useCallback(() => {
    if (noSleepEnabled) {
      noSleep.disable();
    } else {
      noSleep.enable();
    }
    setNoSleepEnabled(!noSleepEnabled);
  }, [noSleep, noSleepEnabled]);

  return <Switch label="Prevent device screen lock" checked={noSleepEnabled} onClick={toggleNoSleep} />;
};

export default SleepLock;
