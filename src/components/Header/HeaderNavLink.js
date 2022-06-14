import {css} from 'styled-components';
import styled from 'styled-components/macro';
import {DNavLink} from '../defaultStyles';

export const HeaderNavLink = styled(DNavLink)`
  height: 100%;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 2.7px;
  color: inherit;
  display: flex;
  align-items: center;
  
  ${({$viewSize}) => $viewSize === 'tablet' ? tabletNavLink : ''}
`;


const tabletNavLink = css`
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 2.3px;
`
