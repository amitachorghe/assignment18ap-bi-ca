   //Open Inspect
let calculate={

    'mul_first':function(a,b,c){
        let result = a * b  *c;
        console.log(result);
     },

        'sum_first':function(a,b,c){
            let result=a +b +c;
            console.log(result);
        },

    'sum':function(){
        let  result=this.num1+this.num2;
        console.log(result);
    },
    'mul':function(){
        let  result=this.num1*this.num2;
        console.log(result);
    },
    'div':function(){
        let  result=this.num1/this.num2;
        console.log(result);
    },
    'sub':function(){
        let  result=this.num1-this.num2;
        console.log(result);
    },
    'mod':function(){
        let  result=this.num1%this.num2;
        console.log(result);
    }
};

var set1={
    'num1':14,

    'num2':23,
};

var set2={
     arr:[15,25,55],
};

var set3={
    'num1':67,

    'num2':78,
}

console.log("Apply call : ");
console.log("sum of three numbers");
calculate.sum_first.apply(set1,set2.arr);
console.log("multiply of three numbers ");
calculate.mul_first.apply(set2,set2.arr);




console.log("Apply bind call  : ");
console.log("sum of 67 and 78 using bind");
let new_sum=calculate.sum.bind(set3);
new_sum();
console.log("multiply of 67 and 78 using bind");
let new_mul=calculate.mul.bind(set3);
new_mul();
console.log("substraction of 67 and 78 using bind");
let new_diff=calculate.sub.bind(set3);
new_diff();
console.log("mod of 67 and 78 using bind");
let new_mod=calculate.mod.bind(set3);
new_mod();