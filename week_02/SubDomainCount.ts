// 子域名访问计数

function subdomainVisits(cpdomains: string[]): string[] {
    let map: Map<string, number> = new Map();
    for (let str of cpdomains) {
        // 按照空格进行拆分
        const splitList = str.split(' ');
        const num = splitList[0];
        const domain = splitList[1];
        const domainList = domain.split('.');
        while (domainList.length !== 0) {
            const item = domainList.join('.');
            if (map.has(item)) {
                let count = map.get(item);
                map.set(item, count + Number(num));
            } else {
                map.set(item, Number(num));
            }
            domainList.shift();
        }  
    }
    let result: string[] = [];
    for (let key of map.keys()) {
        result.push(`${map.get(key)} ${key}`);
    }
    return result;
};