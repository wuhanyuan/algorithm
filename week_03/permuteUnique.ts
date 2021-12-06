// 全排列II

// 时间复杂度是O(n!), 先是前面进行了排序，然后for循环遍历的时候，n * n - 1 ....... 1，这是n!
// 空间复杂度是O(1)，全局共享一个变量。

function permuteUnique(nums: number[]): number[][] {
    const size = nums.length;
    let result: number[][] = [];
    let temp: number[] = [];
    let used: boolean[] = new Array(size).fill(false);
    
    function recur(nums: number[], cursor: number) {
        // 退出递归
        if (cursor === size) {
            result.push(temp.slice());
            return;
        }
        // 每一层的逻辑
        for (let i = 0; i < size; i++) {
            // 剪枝操作，重复数字只需要用一次
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }   
            if (!used[i]) {
                temp.push(nums[i]);
                used[i] = true;
                recur(nums, cursor + 1);
                used[i] = false;
                temp.pop();
            }
        }
    }
    
    
    // 先将包含重复数字的数组进行排序
    const list = nums.sort((a, b) => a - b);
    
    recur(list, 0);
    return result;
};
    
    
    
    
    