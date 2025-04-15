var networkDelayTime = function (times, n, k) {
    const INF = 1e9;
    const dist = new Array(n + 1).fill(INF);
    dist[k] = 0;
    for (let i = 1; i < n; i++) {
        for (const [u, v, w] of times) {
            if (dist[u]!== INF && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === INF) {
            return -1;
        }
        maxTime = Math.max(maxTime, dist[i]);
    }
    return maxTime;
};