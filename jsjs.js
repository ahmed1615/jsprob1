//1  1) Ingresar dos números y al mayor restarle el menor.
x=prompt("enter your first number");
y=prompt("enter your sc number");
var result;
if(x>y){
    result=x-y;
}
else{
    result=y-x;
}
alert("your result is "+result);
//2 2) Ingresar tres números, a la suma de los dos menores restarle el mayor.
var x=parseInt(prompt("enter your first number"));
var y=parseInt(prompt("enter your sc number"));
var z=parseInt(prompt("enter your th number "));
var result;
if((x>y)&&(x>z)){
    result=x-(y+z);
    
}

else if(y>x&&y>z){
    result=y-(x+z);
   
}
else if(z>y&&z>x){
    result=z-(y+x);
   
}
else{
    result=("your numbers have the same value "+x);
   
}
alert(result);
//3 3) Ingresar tres números, mostrar el mayor y el menor.

var x=parseInt(prompt("enter your first number"));
var y=parseInt(prompt("enter your sc number"));
var z=parseInt(prompt("enter your th number "));
    


 var t1=Math.max(x,y,z);
 var t2=Math.min(x,y,z);

 
 alert(`${t1} and ${t2}`);
//4  4) Dados tres números, al mayor restarle el menor y elevarlos al restante.
var x=parseInt(prompt("enter your first number"));
var y=parseInt(prompt("enter your sc number"));
var z=parseInt(prompt("enter your th number "));


var t=Math.max(x,y,z)-Math.min(x,y,z);//4-2=2
var arr=[x,y,z];
const index = arr.indexOf(Math.max(x,y,z));
if (index > -1) {
  arr.splice(index, 1);
}
const index1 = arr.indexOf(Math.min(x,y,z));
if (index1 > -1) {
  arr.splice(index1, 1);
}
alert(Math.pow(arr,t));
//5 5) Dados cuatro números sumar los dos primeros, sumar los dos últimos y al

var arr=[2,4,6,8,10,12,14];
let t1=arr[0]+arr[1];
let t2=arr[5]+arr[6];
var t3;
if(t1>t2){
    t3=arr[3]+arr[4]-t1;
}
else{
    t3=arr[3]+arr[4]-t2;
}
console.log(t3);
//6 6) Dado el importe de una factura se desea saber si la misma es mayor que $100,00 y menor que $180,00.
var fac=150;
if (fac>=100.00&&fac<=180.00){
    console.log("your fac between 100 and 180");
}
else if(fac>180.00){
    console.log("your fac more than 180.00");
}
else{console.log("your fac less than 100.00 ");}
//7 7) Ingresar un número y determinar si es par o impar.
var x=parseInt(prompt("enter your first number"));
if(x%2==0){
    alert("your number is odd");
}
else{
    alert("your number is even");
}

//8 8) Dados tres números distintos y mostrarlos de mayor a menor.
var x=parseInt(prompt("enter your first number"));
var y=parseInt(prompt("enter your sc number"));
var z=parseInt(prompt("enter your th number "));

var t = [x,y,z];
t.sort(function(a, b) {
  return a - b;
});

alert(t);
//9 9) Ingresar las cuatro notas de un alumno y luego de promediarlas, determinar si está o no aprobado (siete, es la nota de aprobación).

var x=parseInt(prompt("enter your first degree in arabic"));
var y=parseInt(prompt("enter your sc degree in english"));
var z=parseInt(prompt("enter your th degree in spanish"));
var v=parseInt(prompt("enter your th degree in math"));
var t=[x,y,z,v]
var zer=0;
for(let i=0; i < t.length; i++){
    zer+=t[i]
    avg=zer/(t.length)}
    if(avg>=7){
        alert("you are successed");
    }
    else{
        alert("you are faild");
    }
//1010) Dados los importes de cuatro facturas, determinar cual es el promedio de venta y la factura de mayor importe.
var fac=[100,200,300,400];
var zer=0;
console.log(Math.max(100,200,300,400));
for (let i = 0; i < fac.length; i++) {
    console.log(fac[i]);
    zer+=fac[i];
    var avg=zer/(fac.length);
}
console.log(avg);





 