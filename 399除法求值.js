var calcEquation = function (equations, values, queries) {
    const graph = {};
    // 构建图
    const buildGraph = () => {
        for (let i = 0; i < equations.length; i++) {
            const [a, b] = equations[i];
            const value = values[i];
            if (!graph[a]) {
                graph[a] = {};
            }
            if (!graph[b]) {
                graph[b] = {};
            }
            graph[a][b] = value;
            graph[b][a] = 1 / value;
        }
    };
    // 深度优先搜索
    const dfs = (start, end, visited) => {
        if (!graph[start] || visited.has(start)) {
            return -1;
        }
        if (start === end) {
            return 1;
        }
        visited.add(start);
        for (const neighbor in graph[start]) {
            const subResult = dfs(neighbor, end, visited);
            if (subResult!== -1) {
                return subResult * graph[start][neighbor];
            }
        }
        return -1;
    };
    buildGraph();
    const results = [];
    for (const [c, d] of queries) {
        const visited = new Set();
        const result = dfs(c, d, visited);
        results.push(result);
    }
    return results;
};