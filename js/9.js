let frase = prompt("Escriba una frase :");
if(frase!=""){
    document.write("Aparecen las vocales:");
    for(let i=0;i<=frase.length;i++){
        if(frase.charAt(i)=="a" || frase.charAt(i)=="A"){
            document.write("a");
        }else if(frase.charAt(i)=="e" || frase.charAt(i)=="E"){
            document.write("e");
        }else if(frase.charAt(i)=="i" || frase.charAt(i)=="I"){
            document.write("i");
        }else if(frase.charAt(i)=="o" ||frase.charAt(i)=="O"){
            document.write("o");
        }else if(frase.charAt(i)=="u" || frase.charAt(i)=="U"){
            document.write("u");
        }
        }
}else {
    document.write("No hay vocales en la frase")
}
