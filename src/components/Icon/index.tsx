import TwitterIcon from './src/TwitterIcon';
import YoutubeIcon from './src/YoutubeIcon';

enum IconName {
  twitter = 'twitter',
  youtube = 'youtube',
}

const iconMap: { [key in IconName]: React.ReactNode } = {
  [IconName.twitter]: <TwitterIcon />,
  [IconName.youtube]: <YoutubeIcon />,
};

type Props = {
  name: IconName;
  color?:
    | 'accent'
    | 'accent-dark'
    | 'auxiliary'
    | 'text'
    | 'line'
    | 'white'
    | 'black';
  size?:
    | 'max-large'
    | 'middle-large'
    | 'large'
    | 'small'
    | 'middle-small'
    | 'min-small';
};

const Icon = ({ name, color, size }: Props) => {
  const classColor = `${color ? `icon--${color}` : ''}`;
  const classSize = `${size ? `icon--${size}` : ''}`;
  return (
    <span className={`icon ${classColor} ${classSize}`}>{iconMap[name]}</span>
  );
};

export default Icon;
export { IconName };
