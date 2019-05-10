const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/world', (req, res) => {


    const url = 'https://gateway-lon.watsonplatform.net/personality-insights/api';
    const key = 'your_key_here';

    let PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
    let PersonalityTextSummaries = require('personality-text-summary');
    let v3EnglishTextSummaries = new PersonalityTextSummaries({locale: 'en', version: 'v3'});


    let personalityInsights = new PersonalityInsightsV3({
        version_date: '2017-10-13',
        iam_apikey: key,
        url: url
    });

    let profileParams = {
        // Get the content from the JSON file.
        content: req.body.user_text,
        content_type: 'text/plain',
        consumption_preferences: true,
        raw_scores: true
    };


    personalityInsights.profile(profileParams, function (error, profile) {
        if (error) {
            res.send(error);
        } else {
            res.send({personality: profile.personality, summary: v3EnglishTextSummaries.getSummary(profile)});
        }
    });

});

app.listen(port);
