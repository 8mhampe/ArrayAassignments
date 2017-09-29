let oz = [8,12,16,20,24,32];
let sizes = ["xs","s","m","l",'xl'];
let prices = [4.99,9.99,19.99,49.99];
let speeds = [93,99,95,96,97,99];
let pings = [45,60,120,80,155,160,220,110];
let bits = [1,1,0,1,0,0,1,0,0,1];

function example1(){
	let ounces =[];
	for(let z=0; z< oz.length; z++){
		if(oz[z] <= 20){
			ounces.push(oz[z]);
		}
	}
	return ounces;
}

function example2(){
    let total=0;
    for(let b=0;b<bits.length;b++){
        total = total+ bits[b];
        //new = old + current #
    }
    return total;
}

function example3(){
	let avg=0
	for(p=0; p<pings.length; p++){
	avg=avg+pings[p];
	}
	avg=avg/pings.length;
	return avg
}

function example4(){
	for(let s=0; s<speeds.length; s++){
	if(speeds[s]>95){
		return s;
		}
	}
}

let first = [2,4,6,8,10]

let second = [20,40,60,80,100]

let third = []

let fourth = []
for(let f=0;f<first.length;f++){
	third.push(first[f]+second[f]);
}
for(let t=0;t<first.length;t++){
	fourth.push(first[t]);
}
for(let c=0;c<first.length;c++){
	fourth.push(second[c]);

}


//Creating test code
function main(){
    console.log(example1());
    console.log("The total # of bits is "+example2());
    console.log("Your average ping for internet is "+example3());
    console.log("The first pitch thrown above 95 was pitch-index "+example4());
		console.log(third);
		console.log(fourth);
}
//run test code with CTRL + SHIFT + B
main();
