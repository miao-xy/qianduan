var findOrder = function (numCourses, prerequisites) {
    // 构建邻接表
    const adjList = new Array(numCourses).fill(0).map(() => []);
    // 记录每个节点的入度
    const inDegree = new Array(numCourses).fill(0);
    for (const [ai, bi] of prerequisites) {
        adjList[bi].push(ai);
        inDegree[ai]++;
    }
    // 入度为0的节点队列
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    const result = [];
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        for (const neighbor of adjList[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    // 如果结果数组长度等于课程数，说明找到了拓扑排序，否则不存在
    return result.length === numCourses? result : [];
};