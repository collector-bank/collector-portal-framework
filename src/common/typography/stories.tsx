import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { H1, H2, H3, Text, TextLink, Subtitle } from './';
import notes from './README.md';
import styled from '../..';
import { formatMoney, formatPercentage } from '../../formatters';

const typography = storiesOf('Typography', module);

typography.addDecorator(withKnobs);

const Row = styled.div({
    display: 'flex',
    flexDirection: 'row',
});

const Col = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam bibendum nibh, ut euismod magna. Curabitur
    interdum, metus ac auctor fringilla, leo neque semper leo, non faucibus sapien nisl in dolor. Duis magna turpis,
    congue vel efficitur vitae, elementum eu orci. Etiam augue turpis, malesuada quis tincidunt sed, accumsan ut augue.
    Suspendisse tellus lectus, ullamcorper eget rhoncus sodales, hendrerit quis metus. Sed porta mattis nisl, sed vehicula
    eros elementum vitae. Curabitur sagittis nulla in nisl vulputate, a semper est imperdiet.
`;

typography.add('Heading 1', () => <H1>{text('Heading', 'Heading 1')}</H1>, { notes });

typography.add('Heading 2', () => <H2>{text('Heading', 'Heading 2')}</H2>, { notes });

typography.add('Heading 3', () => <H3>{text('Heading', 'Heading 3')}</H3>, { notes });

typography.add('Body text', () => <Text>{text('Text', loremIpsum)}</Text>, { notes });

typography.add('Text link', () => <TextLink href="#">{text('Link text', 'This is a link')}</TextLink>, { notes });

typography.add('Text swatch', () => (
    <Col>
        <Row style={{ borderBottom: '1px solid #eeeddd', padding: 16 }}>
            <Col style={{ width: 150 }}>
                <Subtitle>Titles</Subtitle>
            </Col>
            <Col>
                <H1>Kreditkort med fördelar</H1>
                <H2>Dina lån</H2>
                <H3>Privatlån</H3>
            </Col>
        </Row>
        <Row style={{ borderBottom: '1px solid #eeeddd', padding: 16 }}>
            <Col style={{ width: 150 }}>
                <Subtitle>Numbers/Price</Subtitle>
            </Col>
            <Col>
                <Text>{formatMoney(20000)}</Text>
            </Col>
        </Row>
        <Row style={{ borderBottom: '1px solid #eeeddd', padding: 16 }}>
            <Col style={{ width: 150 }}>
                <Subtitle>Paragraph</Subtitle>
            </Col>
            <Col>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam bibendum nibh, ut euismod magna. Curabitur
                    interdum, metus ac auctor fringilla, leo neque semper leo, non faucibus sapien nisl in dolor. Duis magna turpis, congue
                    vel efficitur vitae, elementum eu orci. Etiam augue turpis, malesuada quis tincidunt sed, accumsan ut augue. Suspendisse
                    tellus lectus, ullamcorper eget rhoncus sodales, hendrerit quis metus. Sed porta mattis nisl, sed vehicula eros
                    elementum vitae. Curabitur sagittis nulla in nisl vulputate, a semper est imperdiet.
                </Text>
            </Col>
        </Row>
        <Row style={{ borderBottom: '1px solid #eeeddd', padding: 16 }}>
            <Col style={{ width: 150 }}>
                <Subtitle>Subtitles</Subtitle>
            </Col>
            <Col>
                <Subtitle>Ränta: {formatPercentage(0.0285)}</Subtitle>
            </Col>
        </Row>
        <Row style={{ borderBottom: '1px solid #eeeddd', padding: 16 }}>
            <Col style={{ width: 150 }}>
                <Subtitle>Navigation</Subtitle>
            </Col>
            <Col>WIP</Col>
        </Row>
        <Row style={{ borderBottom: '1px solid #eeeddd', padding: 16 }}>
            <Col style={{ width: 150 }}>
                <Subtitle>Section header</Subtitle>
            </Col>
            <Col>WIP</Col>
        </Row>
        <Row style={{ borderBottom: '1px solid #eeeddd', padding: 16 }}>
            <Col style={{ width: 150 }}>
                <Subtitle>General labels</Subtitle>
            </Col>
            <Col>
                <Text>Måndag - fredag</Text>
            </Col>
        </Row>
    </Col>
));
