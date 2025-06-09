var maximumSwap = function(num) {
    const charArray = [...'' + num];
    const n = charArray.length;
    let maxNum = num;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            swap(charArray, i, j);
            maxNum = Math.max(maxNum, parseInt(charArray.join('')));
            swap(charArray, i, j);
        }
    }
    return maxNum;
}

const swap = (charArray, i, j) => {
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
};
