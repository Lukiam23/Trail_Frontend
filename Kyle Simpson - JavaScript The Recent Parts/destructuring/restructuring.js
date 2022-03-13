let obj1 = {
    url: 'www.google.com',
    data: '23-12-1996'
}

let obj2 = {
    nome: "Matheus",
    idade: 25
}

let joined = {...obj1, ...obj2}

console.log(joined)