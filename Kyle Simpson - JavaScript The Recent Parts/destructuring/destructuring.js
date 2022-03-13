let data = {
    a: 10,
    b: [10,50],
    c:{
        nome:"Matheus",
        age: 25
    }
}

let {
    a,
    b: [
        densidade,
        peso
    ],
    c: {
        nome,
        age
    }

} =  data;

console.log(a,densidade, peso, nome, age)