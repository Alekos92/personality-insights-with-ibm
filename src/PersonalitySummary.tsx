import * as React from 'react';
import {inject, observer} from 'mobx-react';


@inject('state')
@observer
export default class PersonalitySummary extends React.Component<any> {


    render() {
        const {state} = this.props;
        return <div>
            <div><b>Your personality summary:</b></div>
            <div className={'summary'}>{state.personality_summary}</div>
        </div>
    }
}