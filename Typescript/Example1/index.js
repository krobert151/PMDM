/*
//OPTIONAL
const user = {};
si tiene, si tiene, si tiene si tiene......
if (user?.address?.street?.name === 'Plaza España') {
  console.log('Enhorabuena!. Tu envío será gratuito');
} else {
  console.log('Ops!. Te costará 3€ el coste de envío.');
}

//CLASES
class Person{
    private gender : string;
    static age:number;
    readonly activities:string[];
    constructor(gender:string){
        this.gender=gender;
        this.activities = ['sports'];
    }
    public sayHello(){
        console.log('Hello');
    }

    public setGender(gender:string){
        this.gender=gender;
    }
    public getGender(){
        return this.gender;
    }

}
class Moro extends Person{
}

const person = new Person('male');
alert(person.getGender);
person.setGender('Female')
alert(person.getGender);
console.log(Person.age);
console.log(person.activities);


//TIPOS
type Persona = {
    name:String;
    age?:number;
};
const manola:Persona = {
    name: 'Manola',
    age: 3
};

const joe:Persona ={
    name:'Joe',

//INTERFACE
interface Persona{
    name:String;
    age?:number;
}

//RECORD
const Peronsa: Record<string, string> = {};

Peronsa.name = "MANOLA";
Peronsa.apellidos= "MANOLA MANOLA";

//&
type PersonaName={
    name:String;
}

type PersonAge={
    age:number;
}

type Person = PersonaName & PersonAge;

const person: Person ={
    name : "Manola",
    age :34,
}
// |
type PersonaName={
    name:String;
}

type PersonAge={
    age:number;
}

type Person = PersonaName | PersonAge;

const person: Person ={
    name : "Manola",
}
const person2: Person ={
    age :34,
}
const person3: Person ={
    name : "Manola",
    age :34,
}

//Functions
type Persona = {
    name:String;
    age?:number;
};

function manola(): Persona{
    const manola:Persona = {
        name: 'Manola',
        age: 3
    };
    return manola;
}

type Persona = {
    name:String;
    age?:number;
};

function manola(name:string, age:number | undefined): Persona{
    const manola:Persona = {
        name: name,
        age: age,
    };
    return manola;
}

manola("Manola",88);
manola("Manola2",undefined);



function add(a: number, b?: number) {
  return a + (b || 1); // Si no le pasamos B, que el valor a sumar sea 1
}

add(1); //2

function add(a: number, b: number = 1) {
return a + b;
}

add(1); // 2

};*/ 
