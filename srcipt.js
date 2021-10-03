class Question {
    constructor(id, question) {
        if (question == undefined) { question = 'unknown' }
        this._id = id;
        this._question = question
    }
    get id() {
        return this._id;
    }
    get question() {
        return this._question;
    }
    set id(id) {
        this._id = id;
    }
    set question(question) {
        if (question.trim() == '') { question = 'unknown' }
        this._question = question;
    }
}

const quest1 = new Question(1, 'ทำไมหมาถึงร้องโฮ่ง');
const quest2 = new Question(2);
const quest3 = new Question(3);

console.log(quest1);
console.log(quest2);
quest3.question = '   ';
console.log(quest3);

// constructor(id) {
//     this(id, 'Unknown');
// }

let arr = [1, 0, 2];
let arr0 = [5, 0, 2];
arr0 = arr;
arr[0] = 6;
console.log(arr);