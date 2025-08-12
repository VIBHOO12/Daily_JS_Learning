
// 2631. Group By - LeetCode
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item)=>{
        const key = fn(item);
        if(!grouped[key]){
            grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped;
    }, {});
};
const arr = [1,2,3,4];
console.log(arr.groupBy(String)) // {"1":[1],"2":[2],"3":[3],"4":[4]}
 