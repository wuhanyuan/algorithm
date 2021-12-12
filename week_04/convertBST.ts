// 538. 把二叉搜索树转换为累加树

// 时间和空间复杂度都是O(n)

function convertBST(root: TreeNode | null): TreeNode | null {
    let sum = 0;
    function traverse(root: TreeNode | null) {
        if (root == null) {
            return;
        }
        traverse(root.right);
        sum += root.val;
        root.val = sum;
        traverse(root.left);
    }

    traverse(root);
    return root;
};