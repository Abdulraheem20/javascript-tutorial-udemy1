let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// BMI = mass/height**2
//data type1
let johnBMI = (78/(1.69 ** 2));
console.log(johnBMI);
let markBMI = (92/(1.95 ** 2));
console.log(markBMI);
let markHigherBMI = (johnBMI > markBMI);
console.log(markHigherBMI);

//data type2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

johnBMI = (95/(1.88 ** 2));
console.log(johnBMI);
markBMI = (85/(1.76 ** 2));
console.log(markBMI);
markHigherBMI = (johnBMI > markBMI);
console.log(markHigherBMI);