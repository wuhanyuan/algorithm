// 力扣 130. 被围绕的区域

// 时间复杂度，O(m * n) 因为每个点最多访问一次
// 空间复杂度， O(m * n), 访问每个点都进行了一次内存开辟

 function solve(board: string[][]): string[][] {
    const rows = board.length;
    const columns = board[0].length;
    // 定义方向数组
    const dx = [-1, 0, 0, 1];
    const dy = [0, -1, 1, 0];

    // 从二维矩阵的四条边开始扫描
    // 列不变，行变
    for (let i = 0; i < rows; i++) {
        dfs(i, 0);
        dfs(i, columns - 1);
    }

    // 行不变，列变
    for (let k = 0; k < columns; k++) {
        dfs(0, k);
        dfs(rows - 1, k);
    }


    function dfs(x: number, y: number): void {
        if (board[x][y] !== 'O') {
            return;
        }
        board[x][y] = 'visisted';
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (vaild(nx, ny) && board[nx][ny] === 'O') {
                dfs(nx, ny);
            }
        } 
    }

    function vaild(i: number, j: number): boolean {
        return i >=0 && i < rows && j >= 0 && j < columns;
    }

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            if (board[x][y] === 'visisted') {
                board[x][y] = 'O';
            } else if (board[x][y] = 'O') {
                board[x][y] = 'X';
            }
        }
    }

    return board;
    
};