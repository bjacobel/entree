import { styled } from '@linaria/react';

const Card = styled.div<{ $src?: string }>`
  width: 100%;
  height: 300px;
  --image-radius: var(--mantine-radius-md);
  background-image: ${props => `url(${props.$src})` || 'initial'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const PhotoCard = ({ src }: { src?: string }) => <Card $src={src} />;

export default PhotoCard;
