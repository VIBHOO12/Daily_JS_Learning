let arr = [0,1,1,1,0,0,0,1,1,0];

 var zeros = 0;
 var ones = 0;
 arr.map((value)=>{
     if(value == 0 ) zeros++;
     else ones++;
 });
 