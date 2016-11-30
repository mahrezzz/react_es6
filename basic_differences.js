//1-let keyword:   this is block scope:   var is function scope

let sum=(a,b)=>a+b;
let extract=(a,b)=>a-b;
let square=x=>x*x;
let test=()=>5;


console.log(square(5)); // 25
console.log(sum(3, 4)); // 7
console.log(test()); // 3.1415

var j=4;


for (let i = 0; i <10; i++) {
	j+=5;
}


try {
  console.log(j);  //will log no problem because var local function scope but 
  console.log(i);  //will throw exception 
} catch(e) {
  console.log(
    'i does not exist here!'
  );
}

//----------------------------------------------------------------------
//2- lets make js  a little OO    by using special keywords.

class Animal {
	var specialName;
	constructor(name) {
	  	this.name=name;
	  	this.specialName="*****" + this.name+ "********";
	}
	sayName(){
		console.log("My name is:" + name);
	}

}
class Cat extends Animal{
	constructor(name) {
		this.name=name;
		super(name);
	}

	sayYourName(){
		return this.specialName;
	}

}

let tom=new Cat("Tom");
tom.sayName();
console.log(tom.sayYourName());

//----------------------------------------------------------------------
//3- Default Parameters nice one bro....

sayMessage(message='This is default message...'){
	console.log(message);
}

sayMessage();
sayMessage('Bu dolu gitsin....');


//----------------------------------------------------------------------
//3- Generators...

function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

for (let i of range(0, 10, 2)) {
  console.log(i);
}



