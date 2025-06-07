var isValid = function(s) {
    if (s.length % 2) { // s 长度必须是偶数
        return false;
    }
    const mp = {')': '(', ']': '[', '}': '{'};
    const st = [];
    for (const c of s) {
        if (!mp.hasOwnProperty(c)) { // c 是左括号
            st.push(c); // 入栈
        } else if (st.length === 0 || st.pop() !== mp[c]) { // c 是右括号
            return false; // 没有左括号，或者左括号类型不对
        }
    }
    return st.length === 0; // 所有左括号必须匹配完毕
};