var isBipartite = function (graph) {
    const n = graph.length;
    // 颜色数组，-1表示未染色，0和1表示两种不同颜色
    const colors = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if (colors[i] === -1) {
            // 从节点i开始进行深度优先搜索染色
            if (!dfs(i, 0, graph, colors)) {
                return false;
            }
        }
    }
    return true;
};

const dfs = (node, color, graph, colors) => {
    // 将当前节点染成指定颜色
    colors[node] = color;
    const neighbors = graph[node];
    for (const neighbor of neighbors) {
        if (colors[neighbor] === -1) {
            // 对未染色的邻居节点，染成相反颜色并继续递归
            if (!dfs(neighbor, 1 - color, graph, colors)) {
                return false;
            }
        } else if (colors[neighbor] === color) {
            // 如果邻居节点颜色相同，说明不是二分图
            return false;
        }
    }
    return true;
};