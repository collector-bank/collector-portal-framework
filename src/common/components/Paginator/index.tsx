import React from 'react';
import styled from '../../../';

const leftChevron =
    "'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 86.001 86.001%22%3E%3Cpath d=%22M64.998 80.095a3.484 3.484 0 0 1 0 4.893 3.401 3.401 0 0 1-4.844 0l-39.151-39.54a3.486 3.486 0 0 1 0-4.895l39.15-39.539a3.4 3.4 0 0 1 4.844 0A3.487 3.487 0 0 1 65 5.907L29.294 43.001l35.704 37.094z%22 fill=%22%236B1FAF%22/%3E%3C/svg%3E'";
const rightChevron =
    "'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 512 512%22%3E%3Cpath d=%22M367.954 213.588L160.67 5.872c-7.804-7.819-20.467-7.831-28.284-.029-7.819 7.802-7.832 20.465-.03 28.284l207.299 207.731c7.798 7.798 7.798 20.486-.015 28.299L132.356 477.873c-7.802 7.819-7.789 20.482.03 28.284A19.935 19.935 0 0 0 146.513 512c5.125 0 10.25-1.958 14.157-5.873l207.269-207.701c23.394-23.394 23.394-61.459.015-84.838z%22 fill=%22%236B1FAF%22/%3E%3C/svg%3E'";

export interface PaginatorProps {
    numberOfItems: number;
    pageSize: number;
    activePage: number;
    numbersInMiddle: number;
    onChange: (activePage: number) => void;
}

interface ChevronProps {
    direction: 'left' | 'right';
    enabled: boolean;
}

const Chevron = styled.a<ChevronProps>(({ direction, enabled, theme }) => ({
    width: 20,
    height: 24,
    paddingLeft: 2,
    paddingRight: 2,
    display: 'inline-block',
    color: theme.colors.primary,
    background: `url(${direction === 'left' ? leftChevron : rightChevron}) no-repeat center center`,
    backgroundSize: 12,
    opacity: enabled ? 1 : 0.3,
    cursor: enabled ? 'pointer' : 'default',
}));

const Ellipses = styled.span(({ theme }) => ({
    width: 20,
    display: 'inline-block',
    paddingLeft: 6,
    paddingRight: 6,
    textAlign: 'center',
    fontSize: 18,
    color: theme.colors.darkGray,
}));

const Page = styled.a<{ active: boolean }>(({ active, theme }) => ({
    paddingLeft: 6,
    paddingRight: 6,
    width: 20,
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer',
    color: active ? theme.colors.black : theme.colors.primary,
    fontWeight: active ? 700 : 400,
}));

const PaginatorContainer = styled.div({
    userSelect: 'none',
    display: 'flex',
    fontSize: 18,
});

export class Paginator extends React.Component<PaginatorProps, {}> {
    lastPage = () => Math.ceil(this.props.numberOfItems / this.props.pageSize);
    center = () => Math.floor(this.props.numbersInMiddle / 2);

    render() {
        if (this.lastPage() === 1 || this.lastPage() === 0) return null;

        return (
            <PaginatorContainer>
                <Chevron direction="left" enabled={this.props.activePage !== 1} onClick={() => this.handleClick(this.previousPage())} />
                {!this.isWithinInitialRange() && this.renderJumpToStart()}

                {this.getPages().map(page => (
                    <Page onClick={() => this.handleClick(page)} key={page} active={page === this.props.activePage}>
                        {page}
                    </Page>
                ))}

                {!this.isWithinEndRange() && this.renderJumpToEnd()}
                <Chevron
                    direction="right"
                    enabled={this.props.activePage !== this.lastPage()}
                    onClick={() => this.handleClick(this.nextPage())}
                />
            </PaginatorContainer>
        );
    }

    private nextPage = () => {
        const nextPage = this.props.activePage + 1;

        return nextPage <= this.lastPage() ? nextPage : this.props.activePage;
    };

    private previousPage = () => {
        const previousPage = this.props.activePage - 1;

        return previousPage >= 1 ? previousPage : this.props.activePage;
    };

    private handleClick = (activePage: number) => {
        this.props.onChange(activePage);
    };

    private renderJumpToStart = () => {
        return (
            <>
                <Page onClick={() => this.handleClick(1)} key={'start'} active={false}>
                    1
                </Page>
                <Ellipses>&#8230;</Ellipses> {/* html ellipsis*/}
            </>
        );
    };

    private renderJumpToEnd = () => {
        return (
            <>
                <Ellipses>&#8230;</Ellipses>
                <Page onClick={() => this.handleClick(this.lastPage())} key={'end'} active={false}>
                    {this.lastPage()}
                </Page>
            </>
        );
    };

    private getPages = () => {
        return Array(this.props.numbersInMiddle)
            .fill(undefined)
            .map(this.isWithinInitialRange() ? this.fillStart : this.getActivePages)
            .filter(page => page !== undefined)
            .sort((a: number, b: number) => a - b) as number[];
    };

    private fillStart = (_: number, index: number) =>
        this.props.numbersInMiddle - index <= this.lastPage() ? this.props.numbersInMiddle - index : undefined;

    private fillEnd = (_: number, index: number) => this.lastPage() - index;

    private getActivePages = (_: number, index: number) => {
        if (this.props.activePage + this.props.numbersInMiddle - this.center() > this.lastPage()) {
            return this.fillEnd(_, index);
        }

        let nextNumber = this.props.activePage - index;

        if (index > this.center()) {
            // If we're at or past the middle
            if (this.props.activePage + index - this.center() <= this.lastPage()) {
                nextNumber = this.props.activePage + index - this.center();
            }
        }

        return nextNumber <= this.lastPage() ? nextNumber : undefined;
    };

    private isWithinInitialRange = () =>
        this.props.activePage <= this.props.numbersInMiddle - this.center() || this.props.numbersInMiddle >= this.lastPage();

    private isWithinEndRange = () =>
        this.props.activePage + this.props.numbersInMiddle - this.center() > this.lastPage() ||
        this.props.numbersInMiddle >= this.lastPage();
}
