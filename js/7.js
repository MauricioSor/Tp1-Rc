let num= parseInt(prompt(`Ingrese un numero:`));
let num2= parseInt(prompt(`Ingrese otro numero:`));
let num3= parseInt(prompt(`Ingrese un numero mas:`));
if(num>num2 && num>num3){
    document.write(`El mayor es: ${num}`);
}if(num2>num && num2>num3){
    document.write(`El mayor es: ${num2}`);
}if(num3>num && num3>num2){
    document.write(`El mayor es: ${num3}`)
}