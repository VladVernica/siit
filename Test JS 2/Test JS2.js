/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////Rezolvati exercitiile urmatoare si salvati-le aici si la link-ul urmator: https://goo.gl/tJdzvx
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Scrieti o functie JS care primeste ca parametri doua numere si returneaza media aritmetica a acestora.
function avgTwoNumbers(a, b) {
	return (a+b)/2;
}

// 2. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza media aritmetica a acestora.
function avgMultipleNumbers(arrayNr) {
	var sum=0;
	for(let i=0; i<arrayNr.length; ++i) {
		sum=sum+arrayNr[i];
	}
	return sum/arrayNr.length;
}

// 3. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza suma numerelor impare din array.
function sumOfTheOddNumbers(arrayNr) {
	var sum=0;
	for(let i=0; i<arrayNr.length; ++i) {
		if(arrayNr[i]%2!=0) sum=sum+arrayNr[i];
	}
	return sum;
}

// 4. Scrieti o functie JS care primeste ca parametru un string si returneaza numarul aparitiilor literei "m".
function noOfOccurance(str) {
	var count=0;
	for(let i=0; i<str.length; ++i) {
		if(str[i]=="m") count++
	}
	return count;
}

// 5. Scrieti o functie JS care primeste ca parametru un array de numere nesortate de la 1 la n si returneaza unicul numar lipsa.
function missingNumber(nr, arrayNr) {
	for(let i=0; i<arrayNr.length-1; ++i) {
		for(let j=i+1; j<arrayNr.length; ++j) {
			if(arrayNr[i]>arrayNr[j]) {
				let sw=arrayNr[i];
				arrayNr[i]=arrayNr[j];
				arrayNr[j]=sw;
			}
		}
	}
	if (arrayNr[0]==2) return 1;
	for(let i=0; i<arrayNr.length-1; ++i) {
		if(arrayNr[i]+1!=arrayNr[i+1]) return arrayNr[i]+1;
	}
	return arrayNr[arrayNr.length-1]+1;
}

// 6. Scrieti o functie JS care primeste ca parametru un string si ii dubleaza litera "b" si returneaza noul string.
// Exemplu: pentru stringul "biblioteca" va returna "bbibblioteca"
function doubleB(str) {
	var newStr="";
	for(let i=0; i<str.length; ++i) {
		if(str[i]=="b") newStr=newStr+str[i]+str[i];
		else newStr=newStr+str[i];
	}
	return newStr;
}

// 7. Scrieti o functie JS care primeste ca parametru un string si elimina toate aparitiile literelor "a", "r" si "m" si returneaza stringul rezultat.
//Exemplu: pentru stringul "important" va returna "iportnt"
function eliminateARM(str) {
	var newStr="";
	for(let i=0; i<str.length; ++i) {
		if((str[i]!="a")&&(str[i]!="r")&&(str[i]!="m")) newStr=newStr+str[i];
	}
	return newStr;
}

// 8. Scrieti o functie JS care primeste ca parametru un numar si returneaza cifrele acestuia intr-un array.
function digitsOfNumber(nr) {
	var arr=[];
	var arrInv=[];
	var dubluraNr=nr;
	while(dubluraNr!=0) {
		arr.push(dubluraNr%10);
		dubluraNr=parseInt(dubluraNr/10);
	}
	for(let i=arr.length-1; i>=0; --i) {
		arrInv.push(arr[i]);
	}
	return arrInv;
}

function digitsOfNumber(nr) {
	var arr=[];
	while(nr!=0) {
		arr.push(nr%10);
		nr=parseInt(nr/10);
	}
	return arr;
}

// 9. Scrieti o functie JS care primeste ca parametru un numar si verifica daca este palindrom.
// Va returna true sau false.
// Exemplu: "12321" este palindrom "12345" nu este palindrom
function isPalindrom(nr) {
	var invers=0;
	var dubluraNr=nr;
	while(dubluraNr!=0) {
		invers=(invers*10)+(dubluraNr%10);
		dubluraNr=parseInt(dubluraNr/10);
	}
	if(invers==nr) return true;
	else return false;
}

function isPalindrom(nr) {
	var invers=0;
	while(nr!=0) {
		invers=(invers*10)+(nr%10);
		nr=parseInt(nr/10);
	}
	if(invers==nr) return true;
	else return false;
}

// 10. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza acel array sortat descrescator.
function sortDesc(arrayNr) {
	for(let i=0; i<arrayNr.length-1; ++i) {
		for(let j=i+1; j<arrayNr.length; ++j) {
			if(arrayNr[i]<arrayNr[j]) {
				let sw=arrayNr[i];
				arrayNr[i]=arrayNr[j];
				arrayNr[j]=sw;
			}
		}
	}
	return arrayNr;
}