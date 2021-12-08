// 课程表II
// 时间复杂度O(m * n)
// 空间复杂度O(m * n)


function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    // 图的存储，先生成一个出边数组
    const to: number[][] = [];
    for (let i = 0; i < numCourses; i++) {
        const list = [];
        to.push(list);
    }
    
    // 定义每个点的度数, 最开始每个点的入度都是0
    let inDeg: number[] = new Array(numCourses).fill(0);
    
    // 遍历整个课程数组，填充出边数组
    for (const pre of prerequisites) {
        // 要学课程y，必须先学课程x，也就是x -> y
        const [y, x] = pre;
        to[x].push(y);
        inDeg[y]++;
    }
    
    // BFS需要用的队列
    let queue: number[] = [];
    
    // 拓扑排序的第一步,从0入度点出发
    for (let i = 0; i < inDeg.length; i++) {
        if (inDeg[i] === 0) {
            queue.push(i);
        }
    }
    
    let visited: number[] = [];
    
    while (queue.length > 0) {
        const x = queue[0];
        queue.shift();
    
        // 访问了这个点，就把这个点push进去
        visited.push(x);
        for (const y of to[x]) {
            inDeg[y]--;
            if (inDeg[y] === 0) {
                queue.push(y);
            }
        }
    }
    return visited.length === numCourses ? visited : [];
};