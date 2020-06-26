const frequencyChar = (str) => {
    if(!str) return {}
    let dic = {}

    str.split('').forEach(c => {
        if(dic[c]){
            dic[c] += 1
        }else{
            dic[c] = 1
        }
    });
    let result = Object.keys(dic).map((k) => {return [k, dic[k]] });
    result.sort((f, s) => { return s[1] - f[1] });
    return result
}

module.exports = frequencyChar;
