export interface PortalMenu {
    homeUrl: string;
    topItems: PortalMenuItem[];
    asideGeneralItems: PortalMenuItem[];
    asidePortalItems: PortalMenuItem[];
}

export interface PortalMenuItem {
    icon: string;
    url: string;
    label?: string;
    isMsg?: boolean;
    hasExternalUrl?: boolean;
    id?: number,
    subpages: PortalMenuItem[];
}

export interface PortalMenuTreeNode {
    index: number,
    url: string,
    id: number
}

export const createMenuTreeBy = (menu: any, hostname: string, menuItemStartId = 0): any => {
    for (let key in menu) {
        const isSubmenu = menu[key] instanceof Array;
        if (isSubmenu) {
            menu[key].forEach((menuItem: any) => {
                const urlHostname = getHostnameFrom(menuItem.url);
                const isSameHostname = (urlHostname === hostname);
                menuItem.id = ++menuItemStartId;
                if (isSameHostname) {
                    menuItem.url = transformUrlToPath(menuItem.url, hostname);
                }
                menuItem.hasExternalUrl = !isSameHostname;

                if (menuItem.subpages.length > 0) {
                    createMenuTreeBy(menuItem, hostname, menuItemStartId);
                }
            });
        }
    }
    return menu;
};

const transformUrlToPath = (url: string, hostname: string): string => {
    const indexAt = url.indexOf(hostname);
    return url.substring(indexAt).substring(hostname.length);
}

const getHostnameFrom = (url: string): string => {
    let hostname = url.indexOf('//') > -1 ? url.split('/')[2] : url.split('/')[0];
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}

export const traverse = (menuItem: PortalMenuItem, hostname: string, nodes: any[]): any => {
    if (menuItem.url === hostname) {
        return [];
    } else if (menuItem.hasOwnProperty('subpages') && menuItem.subpages.length > 0) {
        for (let i = 0; i < menuItem.subpages.length; i++) {
            let path = traverse(menuItem.subpages[i], hostname, nodes);
            if (path !== null) {
                nodes.push({
                    index: i,
                    url: menuItem.subpages[i].url,
                    id: menuItem.subpages[i].id,
                })
                path.unshift(i);
                return path;
            }
        }
    }
    return null;
};

export const getTraversedMenuNodes = (menuItems: PortalMenuItem[], hostname: string, isDropdown = false, setActiveUrl?: Function): PortalMenuTreeNode[] => {
    let nodes: any[] = [];
    menuItems.forEach((menuItem: any, index: number) => {
        const path = traverse(menuItem, hostname, nodes);
        if (path) {
            path.unshift(index)
            nodes.push({
                index: index,
                url: menuItem.url,
                id: menuItem.id,
            })
        }
    });
    nodes = nodes.reverse();
    if(setActiveUrl && nodes.length > 0 && !isDropdown) {
        setActiveUrl(nodes[nodes.length - 1].url);
    }

    if(isDropdown) {
        nodes.pop();
    }
    return nodes;
}
