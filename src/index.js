module.exports = function check(str, bracketsConfig) {
    str.split('');
    let start = [];
    let end = [];
    let similar = [];
    let template = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let k = 0; k < 1; k++) {
            if (bracketsConfig[i][k] === bracketsConfig[i][k + 1]) {
                similar.push(bracketsConfig[i][k]);
            } else {
                start.push(bracketsConfig[i][k]);
                end.push(bracketsConfig[i][k + 1]);
            }
        }
    }

    for (let i = 0; i < str.length; i++) {
        startIndex = "" + start.indexOf(str[i]);
        startSimilarIndex = "" + similar.indexOf(str[i]);
        if (startIndex !== "-1") {
            template.push("" + startIndex);
            continue;
        } else if (startSimilarIndex !== "-1") {
            if (!template.includes(similar.indexOf(str[i]) + "o")) {
                template.push(("" + similar.indexOf(str[i]) + "o"));
                continue;
            }
        }

        endIndex = "" + end.indexOf(str[i]);
        endSimilarIndex = "" + similar.indexOf(str[i]);
        if (endIndex !== "-1") {
            startIndex = template.pop();
            if (endIndex !== startIndex) {
                return false;
            }
        } else if (endSimilarIndex !== "-1") {
            startSimilarIndex = template.pop();
            if (endSimilarIndex.charAt(0) !== startSimilarIndex.charAt(0)) {
                return false;
            }
        }
    }

    if (template.length !== 0) {
        return false;
    }

    return true;
}
