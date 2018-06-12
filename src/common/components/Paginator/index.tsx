import glamorous from 'glamorous';
import * as React from 'react';
import { colors } from '../../../theme';

const leftChevron = require('./left-chevron.svg');
const rightChevron = require('./right-chevron.svg');

export interface PaginatorProps {
    numberOfItems: number;
    pageSize: number;
    numbersInMiddle: number;
    onChange: (activePage: number) => void;
}

export interface PaginatorState {
    activePage: number;
}

interface ChevronProps {
    direction: 'left' | 'right';
    disabled: boolean;
}

const Chevron = glamorous.a<ChevronProps>(
    {
        color: colors.purple,
        width: 20,
        height: 24,
        paddingLeft: 2,
        paddingRight: 2,
        display: 'inline-block',
    },
    ({ direction, disabled }) => ({
        background: `url(${direction === 'left' ? leftChevron : rightChevron}) no-repeat center center`,
        backgroundSize: '14px 18px',
        opacity: disabled ? 1 : 0.3,
        cursor: disabled ? 'pointer' : 'default',
    }),
);

const Ellipses = glamorous.span({
    width: 20,
    display: 'inline-block',
    paddingLeft: 6,
    paddingRight: 6,
    textAlign: 'center',
    fontSize: 18,
    color: colors.darkGray
});

const Page = glamorous.a<PageProps>(
    {
        paddingLeft: 6,
        paddingRight: 6,
        width: 20,
        display: 'inline-block',
        textAlign: 'center',

        '&:hover': {
            cursor: 'pointer',
        }
    },
    ({ active }) => ({
        color: active ? colors.black : colors.purple,
        fontWeight: active ? 600 : 400,
    })
);

const PaginatorContainer = glamorous.div({
    userSelect: 'none',
    display: 'flex',
    fontSize: 18,
});

interface PageProps {
    active: boolean;
}

export class Paginator extends React.Component<PaginatorProps, PaginatorState> {
    state: PaginatorState = {
        activePage: 1,
    };

    private readonly lastPage = Math.floor(this.props.numberOfItems / this.props.pageSize);
    private readonly center = Math.floor(this.props.numbersInMiddle / 2);

    render() {
        return (
            <PaginatorContainer>
                <Chevron direction="left" disabled={this.state.activePage !== 1} onClick={() => this.handleClick(this.previousPage())} />
                {!this.isWithinInitialRange() && this.renderJumpToStart()}

                {this.getPages().map(page => <Page onClick={() => this.handleClick(page)} key={page} active={page === this.state.activePage}>{page}</Page>)}

                {!this.isWithinEndRange() && this.renderJumpToEnd()}
                <Chevron direction="right" disabled={this.state.activePage !== this.lastPage} onClick={() => this.handleClick(this.nextPage())} />
            </PaginatorContainer>
        );
    }

    private nextPage = () => {
        const nextPage = this.state.activePage + 1;

        return nextPage <= this.lastPage ? nextPage : this.state.activePage;
    }

    private previousPage = () => {
        const previousPage = this.state.activePage - 1;

        return previousPage >= 1 ? previousPage : this.state.activePage;
    }

    private handleClick = (activePage: number) => {
        this.setState({ activePage }, () => this.props.onChange(activePage));
    }

    private renderJumpToStart = () => {
        return (
            <>
                <Page onClick={() => this.handleClick(0)} key={'start'} active={false}>1</Page>
                <Ellipses>&#8230;</Ellipses> {/* html ellipsis*/}
            </>);
    }

    private renderJumpToEnd = () => {
        return (
            <>
                <Ellipses>&#8230;</Ellipses>
                <Page onClick={() => this.handleClick(this.lastPage)} key={'end'} active={false}>{this.lastPage}</Page>
            </>);
    }

    private getPages = () => {
        const myArray = Array(this.props.numbersInMiddle)
            .fill(undefined)
            .map(this.isWithinInitialRange() ? this.fillStart : this.getActivePages)
            .filter(page => page !== undefined)
            .sort((a: number, b: number) => a > b ? 1 : 0) as number[];

        return myArray;
    }

    private fillStart = (_: number, index: number) => this.props.numbersInMiddle - index <= this.lastPage ? this.props.numbersInMiddle - index : undefined;
    private fillEnd = (_: number, index: number) => this.lastPage - index;

    private getActivePages = (_: number, index: number) => {
        if (this.state.activePage + this.props.numbersInMiddle - this.center > this.lastPage) {
            return this.fillEnd(_, index);
        }

        let nextNumber = this.state.activePage - index;

        if (index > this.center) { // If we're at or past the middle
            if (this.state.activePage + index - this.center <= this.lastPage) {
                nextNumber = this.state.activePage + index - this.center;
            } else {
                nextNumber = this.state.activePage - index;
            }
        }

        return nextNumber <= this.lastPage ? nextNumber : undefined;
    }

    private isWithinInitialRange = () => this.state.activePage <= this.props.numbersInMiddle - this.center || this.props.numbersInMiddle >= this.lastPage;

    private isWithinEndRange = () => this.state.activePage + this.props.numbersInMiddle - this.center > this.lastPage || this.props.numbersInMiddle >= this.lastPage;
}