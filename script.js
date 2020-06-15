helloworld='ali';
console.log(helloworld);
// document.querySelector('#para').textContent=helloworld;
// document.querySelector('#para').textContent=helloworld;
var x=document.querySelector('#para').innerHTML;
console.log(x);
//document.querySelector('#para').innerHTML='<b>' +helloworld +'</b>';


// var name_h = 'jahanzeb';
// //console.log(name_h);
// var lastname =' haider naqvi';
// //console.log(lastname);
// var ali =23;
// //console.log(ali);
// console.log( name_h   + lastname + ' ' + ali)
// ali =24;
// name_h='wahab';
// lastname=' ali ';
// alert("hello world")
//  console.log( name_h   + lastname + ' ' + ali)
//  window.alert("haider");
//  var input=prompt("enter your age");
//  console.log("you entred "+ input);
// alert("hello john");
// alert('in which are you born');
// var year=prompt();
// var now = 2020-year;
// console.log("congraturation you are "+ now +" years old");
// alert("hello ali");
// alert('in which are you born');
// var year2=prompt();
// var now2 = 2020-year2;
// console.log("congraturation you are "+ now2 +" years old");
// var greator= now < now2;
// console.log(greator); 
// console.log(typeof greator);
// var x=7;
// x *=2;
// x +=5;


// var johnheight=prompt("enter john height");
// var johnmass=prompt("enter john mass");
// var markheight=prompt("enter john height");
// var markmass=prompt("enter mark mass");
// var height=johnheight*johnheight;
// var result1=johnmass/height;
// var result2=markmass/(markheight*markheight);
// console.log(result1);
// console.log(result2);
// if(result1>result2)
// {
//     console.log("john has a high BMI");
// }
// else if(result1===result2)
// {
//     console.log("same");
// }
// else 
// {
//     console.log("mark has a great BMI");
// }
// var age=56;
// var drink = age <=20 ? 'beer' : 'juce';
// console.log(drink);
// var job='designer';
// switch(job){
// case'teacher':
// console.log("you are a teacher");
// break;
// case'designer':
// console.log("you are  DESIGNER");
// break;
// default:

//     console.log('you are job less');

// }
// var john=(89+120+103)/3;
// console.log(john);
// var mike=(116+94+123)/3;
// console.log(mike);
// var mary=(97+134+105)/3;
// console.log(mary);
// if(john>mike && john > mary){
//     console.log('john');

// }
// else if(mike>john && mike>mary){
//     console.log('mike');

// }
// else if(mary>john &&  mary>mike){
//     console.log('mary');

// }
// else if (john===mike )
// {
//     console.log('their is a draw between john and mike');
// }
// else if (mike===john){

//     console.log('their is a draw between john and mike');
// }
// else if (mike===mery){

//     console.log('their is a draw between mary and mike');
// }
// else if (john===mary )
// {
//     console.log('their is a draw between john and mary');
// }
// else if (mary===john )
// {
//     console.log('their is a draw between john and mary');
// }
// else if (mary===mike )
// {
//     console.log('their is a draw between mike and mary');
// }
// else{
//     console.log('some error occured while calculation');
// }
// function age(year){
//     console.log(y=(2020-year));
//     return y;
// }
// // age(2000);
// function retirement(name)
// {
//    // var a=age(2000);
//    // console.log(a);
//     var r= 65-y;
//     // console.log(""+age);
//     console.log(name + " you have "+" " + r + " years left")
//     return;
// }


//  age(1995);

// retirement('ali');
// function job(job1,firstname){
//     switch(job1){
//         case 'teacher':
//             return firstname + "you are a techer";
//         case 'designer':
//             return firstname +"you are a designer";
//         default:
//             return "you are jobless";
//     }

// }
// console.log(job('teache','ali'));


// 
// function tipcal(bill){
// var per;
// if(bill < 50){
// per=0.2;
// }
// else if (bill >= 50 && bill <= 200){
// per=0.15;
// }
// else{
// per = 0.10;
// }
// return  per * bill;
// }

// bills=[124,48,264];
// console.log(bills);
// var tips=[tipcal(bills[0]),
// tipcal(bills[1]),
// tipcal(bills[2])];
// console.log(tips);
// var fin= [
// bills[0]+tips[0],
// bills[1]+tips[1],
// bills[2]+tips[2]
// ]
// console.log(fin);

// console.log(tips);

//objects

// var ali={

//     firstnme:'jahanzeb',
//     lastname: 'haider',
//     birthyear1: 2000,
//     family:['aliza','baneen','papa'],
//     status:'sINGLE',
//     job:'intern',
//     birthyear:function(year){
//         return 2020-this.birthyear1;

//     }

// };
// console.log(ali.birthyear());
// console.log(ali);

// console.log(ali.firstnme);
// console.log(ali['lastname']);
// ali.firstnme= 'syed';
// console.log(ali);
// ali['lastname']='naqvi';
// console.log(ali);


// problem 4
// var john = new Object()
// john.firstname='john';
// john.lastname='haider';
// john.mass=55;
// john.heigh=1.69;
// john.birthyear=2000;
// john.bmi=function(){
//      return john.mass/(john.heigh*john.heigh);
//   // return this.result;
// }
// john.bmi();
// // console.log(john.result);
// var mike={
// firstname: 'mike',
// lastname: 'tayson',
// mass:60,
// height:1.78,
// BMI:function(){
//     this.report=mike.mass/(mike.height*mike.height)
//     return this.report;
// }

// };
// mike.BMI();
// console.log(mike.report);
// if(john.result>mike.report){
//     console.log("john have high Bmi of " +john.result);
// }
// else{
//     console.log("mike have high bmi" +mike.report );
// }
// console.log(john,mike);

// var loop=['ali','bushra','maha',2000]
// for(var i=0;i<loop.length;i++){
// if(typeof loop[i] === 'string'){
//     console.log(loop[i]);
//     continue;
 
   
// }
// }
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// //   var x = fruits.toString();
//   console.log(fruits);


// var a=1;
// ali();
// function ali(){
//     var b=2;
//     walli();
//      function walli(){
//          var c=3;
//         console.log(a,b,c);
//         zakki();
//      }
// }
// function zakki(){
//     var d=4;
//     console.log(a,b,c,d);
// }
