import React, {Component} from "react";
import {Container, Form} from "react-bootstrap";

import SettingsForm from "./SettingsForm";

class Settings extends Component {
    render() {
        return (
            <Container>
                <SettingsForm/>
            </Container>
        );
    }
}

export default Settings;
