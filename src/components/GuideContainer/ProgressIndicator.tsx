import * as React from 'react';
import styled from '../..';

const checkbox = (color: string) =>
    `'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 9.862 8.198%22%3E%3Cpath fill=%22${encodeURIComponent(
        color
    )}%22 d=%22M8.972.188l-5.364 6.72L.883 3.659a.5.5 0 1 0-.766.642l3.117 3.718a.502.502 0 0 0 .383.179h.006a.502.502 0 0 0 .385-.188L9.753.812A.498.498 0 0 0 9.674.11a.498.498 0 0 0-.702.078z%22/%3E%3C/svg%3E%0A'`;

const List = styled.ul({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'stretch',
    textAlign: 'center',
});

interface ItemProps {
    hasCompleted: boolean;
    active: boolean;
    onClick?: () => void;
    itemCount: number;
}

// This breakpoint gives us an approximation of when the indicactor numbers no longer all fit on screen. 120 is the number, 280 is the main menu, 40 is the padding on each side
const progressIndicatorNumberBreakpoint = (itemCount: number) => `@media only screen and (max-width: ${itemCount * 120 + 280 + 40 + 40}px)`;

const Item = styled.li<ItemProps>(({ hasCompleted, active, theme, itemCount }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    flex: '100% 1 1',

    '&:not(:first-child):before /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */': {
        content: '" "',
        width: '100%',
        height: 2,
        background: hasCompleted || active ? theme.colors.green : theme.colors.mediumGray,
        position: 'absolute',
        right: '50%',
        top: 22,

        [progressIndicatorNumberBreakpoint(itemCount)]: {
            top: 16,
        },

        [theme.breakpoints.mobileAndLower]: {
            top: 14,
        },
    },
}));

const Number = styled.div<ItemProps>(({ hasCompleted, active, theme, itemCount }) => ({
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    border: `2px solid ${hasCompleted || active ? theme.colors.green : theme.colors.mediumGray}`,
    borderRadius: 50,
    backgroundColor: active ? theme.colors.green : theme.colors.white,
    backgroundImage: hasCompleted ? `url(${checkbox(theme.colors.green)})` : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 18,
    zIndex: 50,
    fontSize: 21,
    fontWeight: 500,
    color: active ? theme.colors.white : theme.colors.black,

    [progressIndicatorNumberBreakpoint(itemCount)]: {
        fontSize: 16,
        height: 30,
        width: 30,
        marginBottom: 0,
        backgroundSize: 14,
    },

    [theme.breakpoints.mobileAndLower]: {
        fontSize: 16,
        backgroundSize: 12,
        height: 25,
        width: 25,
    },
}));

const Label = styled.div<{ itemCount: number }>(({ itemCount }) => ({
    fontSize: 14,
    paddingLeft: 8,
    paddingRight: 8,

    [progressIndicatorNumberBreakpoint(itemCount)]: {
        display: 'none',
    },
}));

type Key = string | number;

interface Item {
    key: Key;
    label: string;
    onClick: () => void;
}

interface Props {
    items: Item[];
    active?: Key;
}

export const ProgressIndicator: React.StatelessComponent<Props> = ({ items, active }) => {
    const hasCompleted = (index: number) => index < items.findIndex(x => x.key === active);

    return (
        <List>
            {items.map((item, index) => (
                <Item
                    key={item.key}
                    hasCompleted={hasCompleted(index)}
                    active={item.key === active}
                    onClick={hasCompleted(index) ? item.onClick : undefined}
                    itemCount={items.length}
                >
                    <Number itemCount={items.length} hasCompleted={hasCompleted(index)} active={item.key === active}>
                        {!hasCompleted(index) && index + 1}
                    </Number>

                    <Label itemCount={items.length}>{item.label}</Label>
                </Item>
            ))}
        </List>
    );
};
