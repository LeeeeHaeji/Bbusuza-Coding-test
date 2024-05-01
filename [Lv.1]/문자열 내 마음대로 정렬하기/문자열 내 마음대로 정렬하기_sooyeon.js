function solution(strings, n) {
    strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b);
        }
        return a[n].localeCompare(b[n]);
    });
    
    return strings;
}
