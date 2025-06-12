class SnapshotArray {
    constructor(length) {
        this.curSnapId = 0;
        this.history = new Map(); // 每个 index 的历史修改记录
    }

    set(index, val) {
        if (!this.history.has(index)) {
            this.history.set(index, []);
        }
        this.history.get(index).push([this.curSnapId, val]);
    }

    snap() {
        return this.curSnapId++;
    }

    get(index, snapId) {
        if (!this.history.has(index)) {
            return 0;
        }
        const h = this.history.get(index);
        const j = this.search(h, snapId);
        return j < 0 ? 0 : h[j][1];
    }

    // 返回最大的下标 i，满足 h[i][0] <= x
    // 如果不存在则返回 -1
    search(h, x) {
        // 开区间 (left, right)
        let left = -1;
        let right = h.length;
        while (left + 1 < right) { // 区间不为空
            // 循环不变量：
            // h[left][0] <= x
            // h[right][1] > x
            const mid = Math.floor((left + right) / 2);
            if (h[mid][0] <= x) {
                left = mid; // 区间缩小为 (mid, right)
            } else {
                right = mid; // 区间缩小为 (left, mid)
            }
        }
        // 根据循环不变量，此时 h[left][0] <= x 且 h[left+1][0] = h[right][0] > x
        // 所以 left 是最大的满足 h[left][0] <= x 的下标
        // 如果不存在，则 left 为其初始值 -1
        return left;
    }
}