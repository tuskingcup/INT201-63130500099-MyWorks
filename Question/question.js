class Question { //สร้าง class Question เพื่อเก็บ คำถาม,คำตอบ,คำตอบที่ถูกต้อง
    constructor(title, choice, trueAnswer) {
        this._title = title; //เก็บคำถาม
        this._choice = choice; //เก็บตัวเลือกหรือคำตอบ
        this._trueAnswer = trueAnswer; //เก็บคำตอบที่ถูกต้องของคำถามนั้น
    }
    toString() { //เอาไว้ return ข้อมูลของคำถาม 
        return `${this._title}
A.${this._choice['A']}
B.${this._choice['B']}
C.${this._choice['C']}
D.${this._choice['D']}`;
    }
}


class QuestionSet { //เป็น class ที่รวบรวม question หลายๆ question มาไว้ด้วยกัน
    constructor() { //constructor จะไม่รับ parameter แต่จะกำหนดค่าเริ่มต้นให้
        this._count = 0; //เก็บว่าตอนนี้มีกี่คำถามแล้ว
        this._questions = []; //เก็บ Array ของคำถามหรือ question
    }

    addQuestion(title, choice1, choice2, choice3, choice4, trueAnswer) { // เป็น function ที่เอาไว้เพิ่มคำถามลงใน Array
        let choiceList = { //ทำเป็น object ที่เก็บคำตอบหลายคำตอบเพื่อเอามาใช้สร้าง object ของ Question
            A: choice1,
            B: choice2,
            C: choice3,
            D: choice4
        }
        this._questions[this._count] = new Question(title, choiceList, trueAnswer); //สร้าง object ของ Question ขึ้นใหม่เพื่อเอามาเก็บใน Array
        this._count++;
    }

    getQuestion(num) { // เป็น function ที่เอาไว้เรียกหาคำถามโดยใช้เลขข้อคำถาม
        return this._questions[num - 1];
    }

    toString() { //เอาไว้ return เป็นข้อมูลของ QuestionSet
        let result = "";
        let count = 0;
        for (let quiz of this._questions) { //loop คำถามทุกคำถามเพื่อเอามาเก็บไว้ใน result
            result +=
                `----------------Question ${count+1}----------------\n${quiz}\n`;
            count++;
        }
        return result;
    }
}

class Player { //สร้าง class Player เพื่อเก็บข้อมูลผู้เล่น โดยจะเก็บ ชื่อ,คำถามที่เลือก,คะแนน
    constructor(name) {
        this._name = name; //เก็บชื่อ Player
        this._selectedQuestion = []; //เก็บคำถามที่ Player เลือก
        this._score = 0; //เก็บคะแนนของ Player
    }

    answer(question, selectedChoice) { //function เอาไว้ใช้ให้ Player ตอบคำถามโดยรับ question คือคำถามที่เลือกที่เป็น object และ selectedChoice คือคำตอบของ player
        this._selectedQuestion[this._selectedQuestion.length] = question; //เก็บคำถามที่ player ตอบใน _selectedQuestion
        if (selectedChoice == question._trueAnswer) { //เช็คว่าคำตอบที่ player เลือกมาถูกไหมโดยเช็คจาก selectedChoice และ _trueAnswer ใน object question
            this._score++; //ถ้าถูกให้เพิ่มคะแนน 1
            return 'correct'; //และ return 'correct'
        }
        return 'incorrect'; //ถ้าไม่ถูกให้ return 'incorrect'
    }

    toString() { //เอาไว้ return เป็นข้อมูลของ player
        let result = `name: ${this._name}\nscore: ${this._score}\n`;
        for (let question of this._selectedQuestion) { //loop ทุกตัว array this._selectedQuestion 
            result += `${question._title}\n`; //และให้เก็บคำถามทุกคำถามลงไปใน result
        }
        return result;
    }
}

function setUp(questionSet) { //Function เอาไว้เพิ่มคำถามเริ่มต้นให้ questionSet

    questionSet.addQuestion("What is the size of long variable?", //คำถามของข้อที่1
        "8 bit", //ตัวเลือก A
        "16 bit", //ตัวเลือก B
        "32 bit", //ตัวเลือก C
        "64 bit", //ตัวเลือก D
        "D" // ตัวเลือกที่เป็นคำตอบที่ถูกต้อง
    );
    questionSet.addQuestion("What does GUI stand for?", //หมือนกับข้างบนเลยครับ
        "Graphical User Interface",
        "Gimme Ur Internet",
        "Grand User Interface",
        "Graphical Useful Interface",
        "A"
    );
    questionSet.addQuestion("What is a data type ? ",
        "The calculator of the CPU.",
        "A portion of the main memory used to store data.",
        "A special scheme to represent values ??in bit patterns.",
        "The collection of variables that a program uses.",
        "C"
    );
    questionSet.addQuestion("How will you describe Java?",
        "Programming Language",
        "Platform",
        "Both Programming Language and Platform",
        "Abstract Machine",
        "C"
    );
    questionSet.addQuestion("What is the keyword used in java to create an object?",
        "new",
        "new()",
        "Sync",
        "This",
        "A"
    );
    questionSet.addQuestion("What is a primitive data type in Java ? ",
        "A method to represent values ??that are so useful that they are an integral part of the language.",
        "An easy way to represent numbers.",
        "The part of Java that matches the older programming languages.",
        "A data type that can not be used as part of an object.",
        "A"
    );
    questionSet.addQuestion("What is NOT a name of a primitive data type in Java?",
        "int",
        "float",
        "boolean",
        "string",
        "D"
    );
}


let questionSet = new QuestionSet(); //สร้างชุดคำถามมา
setUp(questionSet); // เพิ่มคำถามเริ่มต้น
//คำสั่งด้านล่างเอาไว้แสดงชุดำถามทั้งหมดที่มี
// console.log(questionSet.toString());

let player1 = new Player("Tus"); //สร้าง object player1 จาก Class Player มีการส่ง parameter name 
console.log(player1.answer(questionSet.getQuestion(1), "A")); //เรียกใช้ object player1 ที่สร้าง และเรียกใช้ method answer เพื่อเลือกคำถามและเลือกข้อที่จะตอบ
console.log(player1.answer(questionSet.getQuestion(2), "B"));
console.log(player1.answer(questionSet.getQuestion(3), "D"));
console.log(player1.toString()); //แสดงแสดงข้อมูล playper1

let player2 = new Player("Phai"); //สร้าง object player2 จาก Class Player มีการส่ง parameter name 
console.log(player2.answer(questionSet.getQuestion(4), "A")); //เรียกใช้ object player2 ที่สร้าง และเรียกใช้ method answer เพื่อเลือกคำถามและเลือกข้อที่จะตอบ
console.log(player2.answer(questionSet.getQuestion(5), "A"));
console.log(player2.answer(questionSet.getQuestion(6), "D"));
console.log(player2.toString()); //แสดงข้อมูล playper2

let player3 = new Player("Gus"); //สร้าง object player3 จาก Class Player มีการส่ง parameter name 
console.log(player3.answer(questionSet.getQuestion(5), "A")); //เรียกใช้ object player3 ที่สร้าง และเรียกใช้ method answer เพื่อเลือกคำถามและเลือกข้อที่จะตอบ
console.log(player3.answer(questionSet.getQuestion(2), "A"));
console.log(player3.answer(questionSet.getQuestion(7), "D"));
console.log(player3.toString()); //แสดงข้อมูล playper3