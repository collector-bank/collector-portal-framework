import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Card } from './';
import { Button, H3, Text } from '../../../components';
import { CardGroup } from './CardGroup';
import notes from './README.md';
import { BrowserRouter } from 'react-router-dom';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add(
    'Card',
    () => {
        return (
            <div style={{ padding: 24 }}>
                <Card
                    body={
                        <div style={{ minHeight: 50 }}>
                            <H3>{text('Title', 'My title')}</H3>
                            <Text>{text('Body', 'Här kommer det in mer text')}</Text>
                        </div>
                    }
                    subBody={
                        <>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Button kind="cta" onClick={() => null}>
                                    Button
                                </Button>
                            </div>
                        </>
                    }
                    color="yellow"
                    heading={text('Heading', 'Card 1 heading')}
                    onDismiss={boolean('Dismissable', false) ? () => console.log('Card dismissal event') : undefined}
                />

                {boolean('Show cardgroup', true) && (
                    <CardGroup>
                        <Card
                            body={
                                <div style={{ minHeight: 50 }}>
                                    <H3>{text('Title', 'My title')}</H3>
                                    <Text>{text('Body', 'Här kommer det in mer text')}</Text>
                                </div>
                            }
                            subBody={
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                        <Button onClick={() => null}>Button</Button>
                                    </div>
                                </>
                            }
                            color="pink"
                            heading="Label 2"
                        />

                        <BrowserRouter>
                            <Card
                                body={
                                    <div style={{ minHeight: 120 }}>
                                        <H3>{text('Title', 'My title')}</H3>
                                        <Text>
                                            <span>Det här är en länk knapp.</span>
                                            <br />
                                            <br />
                                            <span>Trycker man på det här hamnar man dock ingenstans</span>
                                        </Text>
                                    </div>
                                }
                                location="/#"
                                color="red"
                                heading="Label 3"
                            />
                        </BrowserRouter>
                    </CardGroup>
                )}
            </div>
        );
    },
    { notes }
);
