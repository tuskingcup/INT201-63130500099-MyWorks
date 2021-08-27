function BMI(name, weight, height) {
    let processBMI = weight / Math.pow(height, 2);
    const bmiString = [
        { max: 18.5, str: "Below normal weight" },
        { min: 18.5, max: 25, str: "Normal weight" },
        { min: 25, max: 30, str: "Overweight" },
        { min: 30, str: "Obesity" },
    ];

    let Myresult = null;
    if (processBMI < bmiString[0].max) {
        Myresult = 0;
    } else if (processBMI > bmiString[2].max) {
        Myresult = 3
    } else {
        Myresult = Math.floor((processBMI - 20) / 5) + 2;
    }
    console.log(`${name} = ${processBMI} ${ bmiString[Myresult].str }`);
}
BMI("Tus", 50, 1.7);