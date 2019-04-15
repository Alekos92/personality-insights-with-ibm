import * as React from 'react';
import {action} from "mobx";
import {inject, observer} from 'mobx-react';

import {FormGroup, Label, Input} from 'reactstrap';

@inject('state')
@observer
export default class TextArea extends React.Component<any> {

    @action.bound
    handleChange(e) {
        const {state} = this.props;
        state.updateUserText(e.target.value)
    }


    render() {
        return <FormGroup>
            <Label for="userText"><b>Write about your feelings</b></Label>
            <Input type="textarea" rows={10} name="text" id="userText" onChange={this.handleChange}/>
        </FormGroup>
    }
}