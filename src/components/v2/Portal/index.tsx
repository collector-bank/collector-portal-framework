import React, { useEffect, useState } from 'react';
import { svg } from './portalIcons';
import { PortalAsideMenu } from './PortalAsideMenu';
import { createMenuTreeBy, PortalMenu } from './portalMenu';
import { PortalTopMenu } from './PortalTopMenu';
import styled from '../../../';

const Overlay = styled.section({
    zIndex: 1,
    position: 'fixed',
    width: '100vw',
    height: '100vh'
});

interface PortalProps {
    portalMenu: PortalMenu;
    menuFooter?: JSX.Element,
    nrOfUnreadMessages?: number,
}

const portalMenuInit = {
    homeUrl: '',
    topItems: [],
    asideGeneralItems: [],
    asidePortalItems: [],
}

export const Portal: React.FC<PortalProps> = ({
    portalMenu,
    children,
    menuFooter,
    nrOfUnreadMessages= 0,
}) => {
    const [menuTree, setMenuTree] = useState<PortalMenu>(portalMenuInit);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    useEffect(() => {
        const hostname = window.location.hostname;
        let clonedMenu = JSON.parse(JSON.stringify(portalMenu));
        const menuTree = createMenuTreeBy(clonedMenu, hostname);
        setMenuTree(menuTree);
    }, [portalMenu]);

    useEffect(() => {
        const smallDeviceBreakpoint = 768;
        if(window.innerWidth < smallDeviceBreakpoint) {
            isHamburgerMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
        }
    }, [isHamburgerMenuOpen]);

    const toggleHamburgerClick = (): void => {
        setIsHamburgerMenuOpen(prevHamburgerMenuOpen => !prevHamburgerMenuOpen);
    };

    return (
        <>
            <nav className="cui-top-nav">
                <button className={'cui-menu-btn'} onClick={toggleHamburgerClick}>
                    <div className={`cui-menu-btn-bar ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`} />
                    <div className={`cui-menu-btn-bar ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`} />
                    <div className={`cui-menu-btn-bar ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`} />
                    <div className={`cui-menu-btn-bar ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`} />
                </button>
                <figure className="cui-logo">
                    {menuTree && menuTree.homeUrl ? <a href={menuTree.homeUrl}>{svg.collectorLogo}</a> : <>{svg.collectorLogo}</>}
                </figure>

                {menuTree && menuTree.topItems
                    ? <PortalTopMenu submenu={menuTree.topItems} nrOfUnreadMessages={nrOfUnreadMessages} />
                    : ''}
            </nav>
            <section className="cui-middle-content">
                {menuTree ? <PortalAsideMenu    menuTree={menuTree}
                                                isNavMenuOpen={isHamburgerMenuOpen}
                                                menuFooter={menuFooter}
                                                toggleHamburgerClick={toggleHamburgerClick}
                                                nrOfUnreadMessages={nrOfUnreadMessages}/>
                            : ''}
                <section className="cui-site-content">{children}</section>
                {isHamburgerMenuOpen && (
                    <Overlay onClick={toggleHamburgerClick} />
                )}
            </section>
        </>
    );
};

