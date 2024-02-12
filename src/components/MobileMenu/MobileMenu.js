/* eslint-disable no-unused-vars */
import React from 'react';
import {DialogContent, DialogOverlay} from '@reach/dialog';
import styled from 'styled-components/macro';
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";
import {WEIGHTS} from "../../constants";

const MobileMenu = ({isOpen, onDismiss}) => {

	return (
		<Overlay isOpen={isOpen} onDismiss={onDismiss}>
			<Content>
				<CloseButtonWrapper onClick={onDismiss}>
					<VisuallyHidden>Dismiss menu</VisuallyHidden>
					<Icon id="close"/>
				</CloseButtonWrapper>
				<Filler/>
				<Nav>
					<a href="/sale">Sale</a>
					<a href="/new">New&nbsp;Releases</a>
					<a href="/men">Men</a>
					<a href="/women">Women</a>
					<a href="/kids">Kids</a>
					<a href="/collections">Collections</a>
				</Nav>
				<Footer>
					<a href="/terms">Terms and Conditions</a>
					<a href="/privacy">Privacy Policy</a>
					<a href="/contact">Contact Us</a>
				</Footer>
			</Content>
		</Overlay>
	);
};
const Overlay = styled(DialogOverlay)`
    position: fixed;
    inset: 0;
    background-color: var(--color-backdrop-gray);
    display: flex;
    justify-content: end;
`

const Content = styled(DialogContent)`
    background-color: white;
    width: 300px;
    height: 100%;
	display: flex;
	flex-direction: column;
	padding: 32px;
`

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 22px;
	
	& a {
		text-decoration: none;
        text-transform: uppercase;
		color: var(--color-gray-900);
		font-size: ${18 / 16}rem;
		font-weight: ${WEIGHTS.medium};
    }
	
	& a:first-of-type {
		color: var(--color-secondary)
	}
`
const Footer = styled.footer`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: end;
	gap: 14px;

    & a {
        text-decoration: none;
        color: var(--color-gray-700);
		font-size: ${14 / 16}rem;
    }
`

const Filler = styled.div`
	flex: 1;
`

const CloseButtonWrapper = styled.button`
	border: none;
    background-color: white;
	position: absolute;
	top: 10px;
	right: 0;
	padding: 16px;
`

export default MobileMenu;
