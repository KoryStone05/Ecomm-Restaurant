import React from 'react';
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarMenu,
	SideBarLink,
	SideBarRoute,
	SideBtnWrap,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SideBarMenu>
				<SideBarLink to='/'>Pizza</SideBarLink>
				<SideBarLink to='/'>Desserts</SideBarLink>
				<SideBarLink to='/'>Full Menu</SideBarLink>
			</SideBarMenu>
			<SideBtnWrap>
				<SideBarRoute to='/'>Order Now</SideBarRoute>
			</SideBtnWrap>
		</SideBarContainer>
	);
};

export default Sidebar;
