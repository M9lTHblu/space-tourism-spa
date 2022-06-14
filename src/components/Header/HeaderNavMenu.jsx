import {motion} from 'framer-motion';
import {useState} from 'react';
import {css} from 'styled-components';
import styled from 'styled-components/macro';
import {DLinkList, DLinkListItem} from '../defaultStyles';
import links from './headerData';
import {HeaderNavLink} from './HeaderNavLink';

export const HeaderNavMenu = ({$viewSize}) => {
  const [current, setCurrent] = useState('home');

  return (
      <LinkList $viewSize={$viewSize}>
        {links.map((link, i) => (
            <LinkListItem
                $viewSize={$viewSize}
                key={i}
                onClick={() => setCurrent(link.path)}
            >
              <span>
                {link.num}
              </span>
              <HeaderNavLink to={link.path}>
                {link.title}
              </HeaderNavLink>
              {current === link.path && <Underline layoutId="underline" />}
            </LinkListItem>
        ))}
      </LinkList>
  );
};

const LinkList = styled(DLinkList)`
  & span {
    font-weight: ${({theme}) => theme.font.weight.bold};
  }
  ${({$viewSize}) => {
    switch ($viewSize) {
      case 'mobile':
        return mobileLinkList;
      case 'tablet':
        return tabletLinkList;
      default:
        return desktopLinkList;
    }
  }}

`;

const mobileLinkList = css`
  flex-direction: column;
  gap: 32px;
`;

const tabletLinkList = css`
  height: 100%;
  justify-content: space-between;
  span {
    display: none;
  }
`;

const desktopLinkList = css`
  height: 100%;
  gap: 48px;
`;

const linkListItemBefore = css`
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    background-color: #FFFFFF;
    opacity: 0.5;
  }
`;

const LinkListItem = styled(DLinkListItem)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 11px;

  :hover {
    ${({$viewSize}) => $viewSize !== 'mobile' ? linkListItemBefore : ''}
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: -6px;
  width: 4px;
  height: 31px;
  background-color: #fff;

  @media (min-width: 767px) {
    width: 100%;
    height: 3px;
    bottom: 0;
  }
`;
