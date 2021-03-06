import React, {Component} from 'react';

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text,
    Item,
    Icon,
    Thumbnail,
    Button,
    Segment,
    Left,
    Right
} from 'native-base';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {text: "CSD"};
      this.onSettingsButtonClicked = this.onSettingsButtonClicked.bind(this)
      this.onContactsButtonClicked = this.onContactsButtonClicked.bind(this)
      this.onCollLogButtonClicked = this.onCollLogButtonClicked.bind(this)
    }

    onSettingsButtonClicked()
    {
        const {text} = this.state

        this.setState({text: "Settings"})
    }

    onContactsButtonClicked()
    {
        const {text} = this.state

        this.setState({text: "Contacts"})
    }

    onCollLogButtonClicked()
    {
        const {text} = this.state

        this.setState({text: "Call Log"})
    }
    render()
    {
        const {text} = this.state

        return (
            <Container>
                <Header hasSegment>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent><Icon name="people"/></Button>
                    </Right>
                </Header>
                <Segment>
                    <Button first onPress={this.onSettingsButtonClicked}><Text>Settings</Text></Button>
                    <Button last active onPress={this.onContactsButtonClicked}><Text>Contacts</Text></Button>
                    <Button last onPress={this.onCollLogButtonClicked}><Text>Call log</Text></Button>
                </Segment>
                <Content>
                    <Text>{text}</Text>
                </Content>
            </Container>
        )
    }
}
