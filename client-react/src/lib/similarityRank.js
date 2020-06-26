const fuzz = require('fuzzball');

const similarityRank = (str, src) => {

    const options = {
            scorer: fuzz.partial_ratio,
            processor: choice => choice.email,
            cutoff: 90 //acceptance criteria
    };
    
    return  fuzz.extract(str, src, options);
}

module.exports = similarityRank;
