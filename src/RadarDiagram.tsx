import * as React from 'react';
import {inject, observer} from 'mobx-react';
import Radar from 'react-d3-radar';


@inject('state')
@observer
export default class RadarDiagram extends React.Component<any> {


    render() {
        const {state} = this.props;
        return <div>
            <div><b>Big 5 personality traits:</b></div>
            <div>
                <Radar
                    width={250}
                    height={250}
                    padding={25}
                    domainMax={1}
                    highlighted={null}
                    data={{
                        variables: [
                            {key: 'Openness', label: 'Openness'},
                            {key: 'Conscientiousness', label: 'Conscientiousness'},
                            {key: 'Extraversion', label: 'Extraversion'},
                            {key: 'Agreeableness', label: 'Agreeableness'},
                            {key: 'Neuroticism', label: 'Neuroticism'},
                        ],
                        sets: [
                            {
                                key: 'user',
                                label: 'User Scores',
                                values: {
                                    Openness: state.big5.Openness,
                                    Conscientiousness: state.big5.Conscientiousness,
                                    Extraversion: state.big5.Extraversion,
                                    Agreeableness: state.big5.Agreeableness,
                                    Neuroticism: state.big5.Neuroticism,
                                }
                            }
                        ],
                    }}
                />
            </div>
        </div>
    }
}