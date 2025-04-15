/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) {
        return null;
    }
    // 使用Map来存储已经克隆过的节点，避免重复克隆
    const map = new Map();
    // 辅助函数进行深度优先遍历克隆图
    const dfs = (n) => {
        if (map.has(n)) {
            return map.get(n);
        }
        // 创建新节点
        const newNode = new _Node(n.val);
        map.set(n, newNode);
        // 遍历邻居节点并克隆
        for (const neighbor of n.neighbors) {
            newNode.neighbors.push(dfs(neighbor));
        }
        return newNode;
    };
    return dfs(node);
};