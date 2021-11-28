// 和为 K 的子数组

function subarraySum(nums: number[], k: number): number {

    const size = nums.length;
    let sums: number[] = [];
    sums[0] = 0;
    // 先求出前缀和
    for (let i = 1; i <= size; i++) {
        sums[i] = sums[i - 1] + nums[i - 1];
    }

    const map: Map<number, number> = new Map();
    let result = 0;
    for (let i = 0; i <= size; i++) {
        if (map.has(sums[i] - k)) {
            result += map.get(sums[i] - k)
        }

        if (map.has(sums[i])) {
            let count = map.get(sums[i]);
            count++;
            map.set(sums[i], count);
        } else {
            map.set(sums[i], 1);
        }
        
    }
    return result;
};