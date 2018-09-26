import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Card } from './';
import { Button, H3, Text } from '../../../components';
import { CardGroup } from './CardGroup';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);
components.add('Card', () => {
    return (
        <>
            <Card
                body={
                    <div style={{ minHeight: 120 }}>
                        <H3>{text('Heading', 'My title')}</H3>
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
                heading="Label"
            />

            {boolean('Show cardgroup', false) && <CardGroup>
                <Card
                    body={
                        <div style={{ minHeight: 120 }}>
                            <H3>{text('Heading', 'My title')}</H3>
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
                            <H3>{text('Heading', 'My title')}</H3>
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
            </CardGroup>}
        </>
    );
});
