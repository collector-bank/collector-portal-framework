import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Card } from './';
import { Button, H3, Text } from '../../../components';
import { CardGroup } from './CardGroup';
import notes from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add(
    'Card',
    () => {
        return (
            <>
                <Card
                    body={
                        <div style={{ minHeight: 120 }}>
                            <H3>{text('Title', 'My title')}</H3>
                            <Text>{text('Body', 'Här kommer det in mer text')}</Text>
                        </div>
                    }
                    subBody={
                        <>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Button onClick={() => null}>Button</Button>
                                <Button type="text" onClick={() => null}>
                                    Avbryt
                                </Button>
                            </div>
                        </>
                    }
                    color="yellow"
                    heading={text('Heading', 'Card 1 heading')}
                    onDismiss={boolean('Dismissable', false) ? () => console.log('Card dismissal event') : undefined}
                />

                {boolean('Show cardgroup', false) && (
                    <CardGroup>
                        <Card
                            body={
                                <div style={{ minHeight: 120 }}>
                                    <H3>{text('Title', 'My title')}</H3>
                                    <Text>{text('Body', 'Här kommer det in mer text')}</Text>
                                </div>
                            }
                            subBody={
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                        <Button onClick={() => null}>Button</Button>
                                        <Button type="text" onClick={() => null}>
                                            Avbryt
                                        </Button>
                                    </div>
                                </>
                            }
                            color="primary"
                            heading="Label 2"
                        />

                        <Card
                            body={
                                <div style={{ minHeight: 120 }}>
                                    <H3>{text('Title', 'My title')}</H3>
                                    <Text>{text('Body', 'Här kommer det in mer text')}</Text>
                                </div>
                            }
                            subBody={
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                        <Button onClick={() => null}>Button</Button>
                                        <Button type="text" onClick={() => null}>
                                            Avbryt
                                        </Button>
                                    </div>
                                </>
                            }
                            color="red"
                            heading="Label 3"
                        />
                    </CardGroup>
                )}
            </>
        );
    },
    { notes }
);
