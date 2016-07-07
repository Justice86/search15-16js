function Human()  {
    this.name = 'Mark';
    this.age = 30;
    this.sex = 'male';
    this.height = 177;
    this.weight = 75;
}
var newHuman = new Human();

function  Worker() {
    this.workAt = 'Work';
    this.pay = 30000;
    this.work = function () {
        alert('I am working');
    }
}
function Student()  {
    this.studyAt = 'University';
    this.grant = 1000;
    this.watchSerials = function () {
        alert('I am watching serial!');
    }
}
Worker.prototype = newHuman;
Student.prototype = newHuman;
var worker1 = new Worker();
var worker2 = new Worker();
var student1 = new Student();
var student2 = new Student();
console.log(worker1);
console.log(worker2);
console.log(student1);
console.log(student2);