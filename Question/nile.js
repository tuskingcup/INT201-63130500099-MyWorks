let Question = [{
        "QuestionText": "1+1 ได้เท่าไหร่?",
        "QuestionChoice": { 1: "1", 2: "3", 3: "5", 4: "2" },
        "Answer": 4
    },
    {
        "QuestionText": "คนมีกี่ขา",
        "QuestionChoice": { 1: "7", 2: "23", 3: "55", 4: "2" },
        "Answer": 4
    },
    {
        "QuestionText": "แมวผสมพันธุ์กับแมวจะออกลูกมาเป็นอะไร",
        "QuestionChoice": { 1: "แมว", 2: "หมา", 3: "หมู", 4: "ไก่" },
        "Answer": 1
    }
]

function QuestionAnswer(myname, quest1, quest2, quest3) {
    let score = 0;
    let num_answer = 0;
    let num_answer2 = 0;
    let answer_arr = [quest1, quest2, quest3];
    let num_question = 1;
    let num_choice = 1;
    for (let quest in Question) {
        for (let txt in Question[quest]) {
            if (txt == "QuestionText") {
                console.log(`คำถามข้อที ${num_question}: ${Question[quest][txt]}`);
                num_question++;
            }
            if (txt == "QuestionChoice") {
                for (let choice in Question[quest][txt]) {
                    console.log(`ตัวเลือกที่ ${num_choice}: ${Question[quest][txt][choice]}`);
                    num_choice++;
                    if (num_choice == 5) {
                        num_choice = 1;
                    }
                }
                console.log(`คำตอบของคุณคือข้อ : ${answer_arr[num_answer]}`);
                num_answer++;
            }
            if (txt == "Answer") {
                if (Question[quest][txt] == answer_arr[num_answer2]) {
                    score++;
                }
                num_answer2++;
            }
        }

    }
    return `คุณ ${myname} คุณได้คะแนนทั้งหมด ${score}`;
}

console.log(QuestionAnswer("Chokjaroen", 4, 4, 1));
console.log(QuestionAnswer("Natthakan", 3, 2, 1));
console.log(QuestionAnswer("Nitipoom", 4, 1, 3));