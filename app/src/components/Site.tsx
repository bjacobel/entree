import { styled } from '@linaria/react';
import { memo } from 'react';

const PrettyURL = memo(({ url }: { url: string }) => {
  const { hostname } = new URL(url);
  return <span>{hostname.startsWith('www.') ? hostname.slice(4) : hostname}</span>;
});

const HostnameDisplay = styled.p`
  color: grey;
  font-size: 0.9em;
  font-style: italic;
  margin: 0;
`;

const Site = ({ url, linked }: { url: string; linked?: boolean }) => {
  const display = (
    <HostnameDisplay>
      <PrettyURL url={url} />
    </HostnameDisplay>
  );

  return linked ? (
    <a href={url} target="_blank" rel="noreferrer">
      {display}
    </a>
  ) : (
    display
  );
};

export default Site;
