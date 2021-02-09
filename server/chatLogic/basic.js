

exports.randomResponse = (req, res) => {

 let userInput = req.body.userInput;
 let punctuation = req.body.punctuation;
 
 let punctuationSet = ['.', '?', '!'];

 if (punctuationSet.indexOf(punctuation) === -1) {
     res.send('I require punctuation');
 }

}