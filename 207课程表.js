var canFinish = function (numCourses, prerequisites) {
    // 构建邻接表
    const adjList = new Array(numCourses).fill(0).map(() => []);
    for (const [ai, bi] of prerequisites) {
        adjList[bi].push(ai);
    }
    // 记录节点状态，0表示未访问，1表示正在访问，2表示已访问
    const visited = new Array(numCourses).fill(0);
    // 深度优先遍历函数
    const dfs = (node) => {
        // 如果当前节点正在访问，说明存在环
        if (visited[node] === 1) {
            return false;
        }
        // 如果当前节点已访问，直接返回true
        if (visited[node] === 2) {
            return true;
        }
        // 标记当前节点为正在访问
        visited[node] = 1;
        for (const neighbor of adjList[node]) {
            if (!dfs(neighbor)) {
                return false;
            }
        }
        // 标记当前节点为已访问
        visited[node] = 2;
        return true;
    };
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
};