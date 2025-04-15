var findRedundantConnection = function (edges) {
    const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);
    const find = (x) => {
        if (parent[x]!== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX!== rootY) {
            parent[rootX] = rootY;
        }
    };
    for (const [u, v] of edges) {
        const rootU = find(u);
        const rootV = find(v);
        if (rootU === rootV) {
            return [u, v];
        }
        union(u, v);
    }
};