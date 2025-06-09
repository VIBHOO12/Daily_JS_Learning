//1- reverse of string

let str = "hello";
let reverse = "";
for(let i=str.length-1; i>=0; i--){
    reverse = reverse +  str[i];
}
console.log(reverse);

//2- number of char
let str1 = "apple";
let newstr = [];
for(let i = 0; i<str.length; i++){
    let temp = str[i];
    let first = str.indexOf(temp);
    let last = str.lastIndexOf(temp);
    i = last;
    let final = last-first+1;
    // console.log(final);
    newstr.push(`${temp}:${final}`);
}
console.log(newstr);


//3- Goal: Find the first character that appears only once in a string.
let str2 = "aabbddd";
let res  = "";
for(let i=0; i<str2.length; i++){
    if(str.indexOf(str[i]) == str.lastIndexOf(str2[i])){
        // console.log(str[i]);
        res = str2[i];
        break;
    }
}
if (res) {
    console.log("First non-repeating character:", res);
} else {
    console.log("No unique character found.");
}


//4-Use a loop to group consecutive same letters together.

// Input: "aaabbccccdd"
// Output: ["aaa", "bb", "cccc", "dd"];
var arr = [aaa,bb,cccc,dd];
var str3 = "aaabbccccdd";
for(var i = 0 ; i<str3.length; i++){
    var firstIndex = str3.indexOf(str3[i]);
    var lastIndex = str3.lastIndexOf(str3[i]);
    i = lastIndex;
    arr.push(str3.slice(firstIndex,lastIndex+1));
};
console.log(arr);