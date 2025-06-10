// counts how many times a given character occurs in a string (case-insensitive).
function fun(str,ch){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase() == ch.toLowerCase()){
            count++;
        }
    }
    return count;
}

console.log(fun("GreAtaeaaa", "g"));