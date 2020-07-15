const distance = (s, e) => {
    let matrix = [];

    const l_s = s.length;
    const l_e = e.length;
    
    for (let i = l_s; i >= 0; i--) matrix[i] = [];
    for (let i = l_s; i >= 0; i--) matrix[i][0] = i;
    for (let j = l_e; j >= 0; j--) matrix[0][j] = j;

    for (let i = 1; i <= l_s; i++) {
        const s_i = s.charAt(i - 1);
<<<<<<< HEAD
        for (let j = 1; j <= l_e; j++) {
            const e_j = e.charAt(j - 1);
            const cost = (s_i === e_j) ? 0 : 1; //repalce cost

            const b = matrix[i][j - 1] + 1; //delete cost
            const c = matrix[i - 1][j - 1] + cost; // cost replace
            let mi = matrix[i - 1][j] + 1; // cost insert
           
            if (b < mi) mi = b;
            if (c < mi) mi = c;
            console.log(matrix)
            matrix[i][j] = mi;
=======

        for (let j = 1; j <= l_e; j++) {

            if (i === j && matrix[i][j] > 4) return l_s;

            const e_j = e.charAt(j - 1);
            const cost = (s_i === e_j) ? 0 : 1;

            const b = matrix[i][j - 1] + 1;
            const c = matrix[i - 1][j - 1] + cost;
            let mi = matrix[i - 1][j] + 1;
           
            if (b < mi) mi = b;
            if (c < mi) mi = c;

            matrix[i][j] = mi;

            if (i > 1 && j > 1 && s_i === e.charAt(j - 2) && s.charAt(i - 2) === e_j) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost);
            }
>>>>>>> d006dc178ba5f9f829a9ad383f691004ee764afc
        }
    }
    return matrix[l_s][l_e];
}

const similarityRank = (str, src) => {
    return src.filter(e => (distance(str, e.email) <= 2));
}

module.exports = similarityRank;
