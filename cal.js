// mission 1
function checksize(num1, num2)
{if(num1 > num2) {console.log(num1);}
else if (num2 > num1) {console.log(num2);}
else{console.log(equals)}}
checksize(10, 15);
// mission 2
function checklen(str1, str2, str3, str4)
{let sum = 0
    if(str1.length> 3){sum++}
if(str2.length>3){sum++}
if(str3.length>3){sum++}
if(str4.length>3){sum++}
console.log(sum)
}
checklen('he', 'himaleya', 'they', 'them');
// mission 3 
function replace(){let rep = document.getElementById('res').value;
if(rep.search('a')!=-1){console.log(rep.replace('a','A'));}}
// mission 4
function oddnum(numb1){
if(numb1 % 2 ==0&& numb1 >0 ){console.log('even + positive');}
else if(numb1 % 2 ==0&& numb1 <0 ){console.log('even + negative');}
else if(numb1 % 2 !=0&& numb1 >0 ){console.log('odd + positive');}
else if(numb1 % 2 !=0&& numb1 <0 ){console.log('odd + negative');}
else{console.log('zero')}}
oddnum(7);
oddnum(-4);
// משימה 5
function changefl(letter){if(letter.charAt(0)==letter.charAt(letter.length-1))
   { console.log(letter.slice(1, letter.length-1))}}
   changefl('aloa')
// משימה 6
function change(str5){if(str5.indexOf("*")!=-1){
    
    console.log(str5.slice(0,str5.indexOf('*'))+str5.slice(str5.indexOf("*")+1,str5.length));
}
if(str5.indexOf("@")!= -1){
    console.log("*"+str5+"*");
}
if(str5.indexOf("₪")!=-1){
    console.log("new shekel");
}
}
change('new*world')
change('125new₪')
change('ramaxs@gmail.com')
// calculator
const Dollar = 3.33;
const Pound = 4.17;
const Euro = 3.58;
function convert()
{
if(document.getElementById('converter1').value=='Dollar'){alert (Dollar*document.getElementById('inp').value);}
if(document.getElementById('converter1').value=='Pound'){alert (Pound*document.getElementById('inp').value);}
if(document.getElementById('converter1').value=='Euro'){alert (Euro*document.getElementById('inp').value);}
}