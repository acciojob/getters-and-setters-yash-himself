//complete this code
class Person {
	 _name;
	_age ;
	constructor(name,age){
		this._name = name;
		this._age = age;
	}
	name(){ return this.name}
	age(A){this.age = A;}
}

class Student extends Person {
	constructor(name,age){
		super(_name,_age)
	}
	study(){
			console.log(this._name + " is studying");
		}
}

class Teacher extends Person {
	constructor(name,age){
		super(_name,_age)
	}
	teach(){
			console.log(this._name + " is teaching");
		}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
