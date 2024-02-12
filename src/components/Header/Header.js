import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader/>
			<MainHeader>
				<LogoWrapper>
					<Logo/>
				</LogoWrapper>
				<DesktopNav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</DesktopNav>
				<MobileNav>
					<Icon id="shopping-bag" strokeWidth={1}/>
					<Icon id="search" strokeWidth={1}/>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu" strokeWidth={1}/>
					</UnstyledButton>
				</MobileNav>
				<Filler/>
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	);
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};

    @media ${QUERIES.tabletAndSmaller} {
        border-top: 4px solid ${COLORS["gray"]["900"]};
        justify-content: space-between;
        align-items: center;
    }

    @media ${QUERIES.phoneAndSmaller} {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: 48px;
    margin: 0 48px;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const MobileNav = styled.nav`
    display: none;

    @media ${QUERIES.tabletAndSmaller} {
        display: flex;
        gap: 32px;
    }
    @media ${QUERIES.phoneAndSmaller} {
        gap: 16px;
    }
`

const LogoWrapper = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        flex: revert;
    }
`;

const Filler = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const MobileLink = styled.div`
    display: none;

    @media ${QUERIES.laptopAndSmaller} {
        display: flex;
        gap: clamp(8px, 12vh - 1.5rem, 32px);
    }
`

export default Header;
