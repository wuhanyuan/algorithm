// 从中序与后序遍历序列构造二叉树

/*
    分析一下时间，空间复杂度
    中序和后序的数组长度都是一样的都是n

    构建n的tree节点，
    空间复杂度是o(n)
    时间复杂度也是o(n)，因为要遍历每个节点



 */



/**
* Definition for a binary tree node.
* class TreeNode {
* val: number
* left: TreeNode | null
* right: TreeNode | null
* constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
* this.val = (val===undefined ? 0 : val)
* this.left = (left===undefined ? null : left)
* this.right = (right===undefined ? null : right)
* }
* }
*/

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

function recur(left1: number, right1: number, left2: number, right2: number): TreeNode | null {
    if (left2 > right2) {
    return null;
    }
    let root = new TreeNode(postorder[right2]);

    /*
    left1 中序的起点
    right1 中序的终点
    left2 后序的起点
    right2 后序的终点
    */
    let mid = left1;
    while (inorder[mid] !== root.val) {
    mid++;
    }
    // left1~mid-1 左子树中序 mid+1~right1 右子树中序
    // left2~m 左子树后序，这个m，就是left2 + (mid - 1 - left1),一个区间是r-l
    // k~right2-1 右子树后序，这个K由刚刚计算的左子树后序的m+1就是了
    root.left = recur(left1, mid - 1, left2, left2 + mid - left1 - 1);
    root.right = recur(mid + 1, right1, left2 + mid - left1, right2 - 1);

    return root;
    }

    const head = recur(0, inorder.length - 1, 0, postorder.length - 1);
    return head;
};