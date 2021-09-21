import { experimentalStyled } from '@material-ui/core/styles';

const LogoRoot = experimentalStyled('svg')``;

const Logo = (props) => (
  <LogoRoot {...props} />
);

export default Logo;
