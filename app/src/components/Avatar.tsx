import { useEffect, useMemo, useState } from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { Avatar as MantineAvatar, Menu } from '@mantine/core';

import useSupabaseSession from '../hooks/useSupabaseSession';
import { blue } from '../stylesheets/colors.css';
import { shadow } from '../stylesheets/shared.css';

const StyledAvatar = styled(MantineAvatar)`
  ${shadow}
  cursor: pointer;
`;

const alignRight = css`
  text-align: right;
`;

const sha256 = async (message: string) => {
  const msgBuffer = new TextEncoder().encode(message.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const Avatar = () => {
  const [opened, setOpened] = useState(false);

  const { session } = useSupabaseSession();
  const [sha, setSha] = useState<string | undefined>();
  useEffect(() => {
    if (session && session.user.email) {
      sha256(session.user.email).then(setSha);
    }
  }, [setSha, session]);
  const initials = useMemo(() => {
    if (session?.user.email) return session.user.email.slice(0, 2);
    return '';
  }, [session]);

  if (!session) return null;

  return (
    <Menu
      classNames={{ item: alignRight }}
      shadow="md"
      position="bottom-end"
      withArrow
      opened={opened}
      onChange={setOpened}
    >
      <Menu.Target>
        {sha ? (
          <StyledAvatar src={`https://gravatar.com/avatar/${sha}`} radius="xl" />
        ) : (
          <StyledAvatar color={blue.color} radius="xl">
            {initials}
          </StyledAvatar>
        )}
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Account</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red">Log out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Avatar;
