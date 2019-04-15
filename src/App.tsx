import * as React from 'react'
import {Container, Row, Col, FormGroup} from 'reactstrap';
import TextArea from './TextArea'
import SubmitButton from './SubmitButton'
import PersonalitySummary from './PersonalitySummary'
import RadarDiagram from "./RadarDiagram";

export default class App extends React.Component {
    render() {
        return <FormGroup>
            <Container>
                <Row>
                    <Col>
                        <TextArea/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={'2'}>
                        <SubmitButton/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={'5'}>
                        <PersonalitySummary/>
                    </Col>
                    <Col sm={'2'}> </Col>
                    <Col sm={'5'}>
                        <RadarDiagram/>
                    </Col>
                </Row>
            </Container>
        </FormGroup>
    }
}