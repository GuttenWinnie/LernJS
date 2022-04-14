const people = [
    {name: 'Юля', age: 22, budget: 1000},
    {name: 'Сергей', age: 21, budget: 1200},
    {name: 'Андрей', age: 20, budget: 0},
    {name: 'Тимур', age: 20, budget: 700}
]
//forEach

people.forEach(person => console.log('Массив: ', person))

///Map

const newPeople = people.map(person => `${person.name} (${person.age})`)
console.log('Map: ',newPeople)

//filter

const adults = people.filter(person => person.age >= 18)
console.log('Фильтр по возврасту: ', adults)
    
//Reduce

const amount = people.reduce((total,  person) => total + person.budget,0)
console.log('Сумма: ',amount)

//find

const name = people.find(person => person.name === 'Сергей')
console.log('Поиск по имени: ',name)