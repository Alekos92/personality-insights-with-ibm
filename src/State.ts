import {observable, action} from 'mobx';

class State {

    @observable user_text: string = '';
    @observable personality_summary: string = '';
    @observable big5 = {
        'Openness': 0,
        'Conscientiousness': 0,
        'Extraversion': 0,
        'Agreeableness': 0,
        'Neuroticism': 0
    };

    @action.bound
    updateUserText(t: string) {
        this.user_text = t;
        console.log(t);
    }

    @action.bound
    callIBM() {
        fetch('http://localhost:5000/api/world', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user_text: this.user_text})
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                this.personality_summary = res.summary;
                let big5_traits = res.personality;
                for (let i = 0; i < big5_traits.length; i++) {
                    this.big5[big5_traits[i].name] = big5_traits[i].percentile;
                }
            });

    }

}


let state = new State();
// observe(store, () => console.log(JSON.stringify(store.people)));
export default state;