var numero1 = Math.round(Math.random()*100);
var numero2 = Math.round(Math.random()*100);
var numero3 = Math.round(Math.random()*100);

while(numero1 == numero2 || numero1 == numero3) {
    numero1 = Math.round(Math.random()*100);
}

while(numero2 == numero1 || numero2 == numero3) {
    numero2 = Math.round(Math.random()*100);
}

while(numero3 == numero1 || numero3 == numero2) {
    numero2 = Math.round(Math.random()*100);
}

document.write("El primer numero elegido al azar es "+numero1)
document.write ("<br>");
document.write("El segundo numero elegido al azar es "+numero2)
document.write ("<br>");
document.write("El tercer numero elegido al azar es "+numero3)
document.write ("<br>");
