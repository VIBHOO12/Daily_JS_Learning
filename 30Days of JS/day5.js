
// 2666. Allow One Function Call - LeetCode
var once = function(fn){

    let called = false;
    let result;
     return function(...args){
        if(!called){
            called = true;
            return fn(...args);
            
        } 
        return result;
     }
};

 let fn = (a,b,c) => (a * b * c)
 let onceFn = once(fn)

 console.log(onceFn(5,2,3)); // 6
 console.log(onceFn(2,3,6)); // returns undefined without calling fn
