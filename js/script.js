document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("s").addEventListener("click",o1);
document.getElementById("r").addEventListener("click",o2);
document.getElementById("d").addEventListener("click",o3);
document.getElementById("m").addEventListener("click",o4);
document.getElementById("sr").addEventListener("click",showResult);
document.getElementById('reset').addEventListener("click",reset);
document.getElementById('por').addEventListener("click",porcento);
document.getElementById('vir').addEventListener("click",virg);


// declaração de resultado
let res1, res2 , operadorv,operadorr,result= 0
operadorv = false


function n1() {
	result += 1 
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n1").innerHTML;
	posigual(actual,soma)
	troca('1')
	

}
function n2() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n2").innerHTML;
	posigual(actual,soma)
	troca('2')
}
function n3() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n3").innerHTML;
	posigual(actual,soma)
	troca('3')
}
function n4() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n4").innerHTML;
	posigual(actual,soma)
	troca('4')
}
function n5() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n5").innerHTML;
	posigual(actual,soma)
	troca('5')
}
function n6() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n6").innerHTML;
	posigual(actual,soma)
	troca('6')
}
function n7() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n7").innerHTML;
	posigual(actual,soma)
	troca('7')
}
function n8() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n8").innerHTML;
	posigual(actual,soma)
	troca('8')
}
function n9() {
	result +=1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n9").innerHTML;
	posigual(actual,soma)
	troca('9')
}
function n0() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("n0").innerHTML;
	posigual(actual,soma)
	troca('0')
}
function virg(){
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = '.';
	posigual(actual,soma)
	troca('.')
}

function o1() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("s").innerHTML;
	document.getElementById('resultado').innerHTML = actual + soma
	operador()
	operadorr = 'soma'
	
	
}

function o2() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("r").innerHTML;
	document.getElementById('resultado').innerHTML = actual + soma
	operador()
	operadorr = 'subtracao'
}

function o3() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("d").innerHTML;
	document.getElementById('resultado').innerHTML = actual + soma
	operador()
	operadorr = 'divisao'
}

function o4() {
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("m").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  soma
	operador()
	operadorr = 'multiplicacao'
}
function porcento(){
	result += 1
	limite()
	let actual = document.getElementById('resultado').innerHTML;
	let soma = document.getElementById("por").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  soma
	operador()
	operadorr = 'porcentagem'
}
function reset(){
	document.getElementById('resultado').innerHTML = 0
	res1=undefined, res2 = undefined
	result = 0
}

function showResult(){
	switch (operadorr){
		case 'soma':
			document.getElementById('resultado').innerHTML = res1=(Number(res1)+ Number(res2))
			res2 = undefined
			operadorv= false
			result = res1.toString.length
		break
		case 'multiplicacao':
			document.getElementById('resultado').innerHTML = res1=Number(res1)*Number(res2)
			res2 = undefined
			operadorv= false
			result = res1.toString.length
		break
		case 'subtracao':
			document.getElementById('resultado').innerHTML = res1=Number(res1)-Number(res2)
			res2 = undefined
			operadorv= false
			result = res1.toString.length
		break
		case 'divisao':
			document.getElementById('resultado').innerHTML = res1=Number(res1)/Number(res2)
			res2 = undefined
			operadorv= false
			result = res1.toString.length
		break
		case 'porcentagem':
			document.getElementById('resultado').innerHTML = Number(res2)*(Number(res1)/100)
			res2 = undefined
			operadorv= false
			result = res1.toString.length
		break


	}
}

function troca (num){
	if (operadorv!=true){
		if (res1 ==undefined){
			res1=num
		}else{
		res1 += num}
	}else{
		if (res2 == undefined){
			res2=num
		}else{
		res2 +=num}
	}
}
function posigual(a,b){
	if (res1 != undefined){
		document.getElementById('resultado').innerHTML = a + b}
		else{
		document.getElementById('resultado').innerHTML = b
		}
}
function operador(){
	operadorv = true

}
function limite(){
	if (result >24){
		document.getElementById('resultado').innerHTML = 'Limite estrapolado pressione reset'
	}
}
