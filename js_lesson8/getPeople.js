// Начальник цеха пригласил людей на совещание
// Каждый, кто входит в кабинет пожимает руки всем присутствующим
// Сколько человек зашло в кабинет, если известно, что всего произошло 120 рукопожатий.
function getPeople(handshake) {
    let people = 1
    let hand = 0
        while(hand != handshake){
            people++;
            hand += (people-1);
        }
    return people
}

console.log( getPeople(0) );
console.log( getPeople(3) );
console.log( getPeople(6) );
console.log( getPeople(10) );
console.log( getPeople(15) );
console.log( getPeople(120) );