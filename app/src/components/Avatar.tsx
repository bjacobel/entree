import { useEffect, useMemo, useState } from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { Avatar as MantineAvatar, Menu } from '@mantine/core';
import { Link } from 'wouter';

import useSupabaseSession from '../hooks/useSupabaseSession';
import { blue } from '../stylesheets/colors.css';
import { shadow } from '../stylesheets/shared.css';
import { useSupabase } from '../contexts/Supabase';

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
  const supabase = useSupabase();
  const { session } = useSupabaseSession();
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>();

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    if (!!session?.user.email && mounted && !avatarUrl) {
      sha256(session.user.email).then(sha =>
        fetch(`https://gravatar.com/avatar/${sha}?d=404`, { method: 'head', signal: controller.signal })
          .then(response => {
            if (response.status < 400) {
              setAvatarUrl(response.url);
            }
          })
          .catch(() => {
            // do nothing
          }),
      );
    }
    return () => {
      if (mounted) {
        mounted = false;
        controller.abort();
      }
    };
  }, [setAvatarUrl, session?.user.email, avatarUrl]);

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
        {avatarUrl ? (
          <StyledAvatar src={avatarUrl} radius="xl" />
        ) : (
          <StyledAvatar color={blue.color} radius="xl">
            {initials}
          </StyledAvatar>
        )}
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Account</Menu.Item>
        <Menu.Item component={Link} href="/add">
          Add recipe
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red" onClick={() => supabase?.auth.signOut()}>
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Avatar;
