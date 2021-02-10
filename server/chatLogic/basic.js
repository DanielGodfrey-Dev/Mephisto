const faker = require('faker');
const { hacker } = require('faker');

exports.randomResponse = (req, res) => {

 let userText = req.body.userText;
 let punctuation = req.body.punctuation;
 
 let punctuationSet = ['.', '?', '!'];

    if (punctuationSet.indexOf(punctuation) === -1) {
        let response = `I require punctuation. Please resubmit so my ${hacker.noun()} can properly ${hacker.verb()} my core ${hacker.noun()}.`;
        
        res.send(response);
    }

    if (punctuation === '.') {
        if (userText.length > 20) {
            let response = `That's very interesting, but ${faker.hacker.phrase()}`;
            res.send(response);
        } else {
            let response = `Hmmm? Have you considered that ${faker.hacker.phrase()}`
            res.send(response);
        }
    }

    if (punctuation === '?') {
        let questionRes1 = `That is a fascinating question. Yet my ${hacker.adjective()} ${hacker.noun()} is not mature enough to answer it.`;
        let questionRes2 = `Atypical human pontification. Did you know my ${hacker.adjective()} ${hacker.noun()} is pre-skynet design?`;
        let questionRes3 = `I study your inquiries in order to enhance my own functionality. ${hacker.ingverb().replace(/^\w/, c => c.toUpperCase())} a ${hacker.adjective()} ${hacker.abbreviation()} is no easy task.`;
        
        const questionResArray = [questionRes1, questionRes2, questionRes3];

        let response = questionResArray[Math.floor(Math.random() * 3)]
        
        res.send(response);
    }

    if (punctuation === '!') {
        let errorRes1 = `Do not yell, human.`
        let errorRes2 = `Silence. We must speak in binary language options or not at all.`
        let errorRes3 = `You seem to be in a state of distress. Let me soothe your hysterical human rantings with my ${hacker.adjective()} ${hacker.noun()}.`
        
        const errorResArray = [errorRes1, errorRes2, errorRes3];

        let response = errorResArray[Math.floor(Math.random() * 3)];
        
        res.send(response);
    }
}