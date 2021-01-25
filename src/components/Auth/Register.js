import React from "react";
import {Grid, Header, Icon, Form, Segment, Button, Message} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Register extends React.Component {
    state = {}
    handlerChange = () => {
    }

    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle" className="App">
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange"/>
                        Register for DevChat ^^
                    </Header>
                    <Form size="large">
                        <Segment stacked>
                            <Form.Input fuild name="username"
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="Username"
                                        type="text"
                                        onChange={this.handlerChange}/>
                            <Form.Input fuild name="email"
                                        icon="paper plane outline"
                                        iconPosition="left"
                                        placeholder="Email Address"
                                        type="email"
                                        onChange={this.handlerChange}/>
                            <Form.Input fuild name="password"
                                        icon="key"
                                        iconPosition="left"
                                        placeholder="Password"
                                        type="password"
                                        onChange={this.handlerChange}/>
                            <Form.Input fuild name="passwordConfirm"
                                        icon="repeat"
                                        iconPosition="left"
                                        placeholder="Password confirmation"
                                        type="password"
                                        onChange={this.handlerChange}/>
                                        <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already a user? <Link to="/login">Login</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;
