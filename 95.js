const generateTrees = (n) => {
    if (n == 0) return [];
    const getAllBSTs = (low, high) => {
      if (low > high) return [null];
      if (low == high) return [new TreeNode(low)];
      const res = [];
      for (let i = low; i <= high; i++) {
        const leftBSTs = getAllBSTs(low, i - 1);
        const rightBSTs = getAllBSTs(i + 1, high);
        for (const leftBST of leftBSTs) {
          for (const rightBST of rightBSTs) {
            const root = new TreeNode(i);
            root.left = leftBST;
            root.right = rightBST;
            res.push(root);
          }
        }
      }
      return res;
    };
    return getAllBSTs(1, n);
  };
  