let num = parseInt(prompt("Introduce un número:"));
if(num!=null){
document.write(`${num} es divisible por: `);
    if(num%2===0){
        document.write(" ,2");
    }
    if(num%3===0){
        document.write(" ,3");
    }
    if(num%5===0){
        document.write(" ,5");
    }
    if(num%7===0){
        document.write(" ,7");
    }
}else{
    document.write(`${num} no es divisible por 2,3,5,7`);
}