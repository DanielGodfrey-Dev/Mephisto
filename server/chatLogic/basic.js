const faker = require('faker');

exports.randomResponse = (req, res) => {

 let userInput = req.body.userInput;
 let punctuation = req.body.punctuation;
 
 let punctuationSet = ['.', '?', '!'];

    if (punctuationSet.indexOf(punctuation) === -1) {
        let response = `I require punctuation. Please resubmit so my ${faker.hacker.noun()} can properly ${faker.hacker.verb()} my core matrix.`;
        res.send(response);
    }

    if (punctuation === '.') {
        let response = `That's very interesting, but ${faker.hacker.phrase()}`;
        res.send(response);
    }

    if (punctuation === '?') {
        let response = `That is a fascinating question. Yet my ${faker.hacker.adjective()} ${faker.hacker.noun()} is not mature enough to answer it.`;
        res.send(response);
    }

    if (punctuation === '!') {
        let response = `Do not yell, human.`
        res.send(response);
    }
}