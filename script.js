console.log('Guess Who?')
//belox is the tooggle Eliminated function which allows the cards to turn on/off 20% opactity when clicked
function toggleEliminated(element) {
    element.classList.toggle('eliminated')
}
// below is the characters array
let cards = [
    {
        name: 'Sakura',
        image: 'images/characters_01.jpg'
    },
    {
        name: 'Kaede',
        image: 'images/characters_02.jpg'
    },
    {
        name: 'Aya',
        image: 'images/characters_03.jpg'
    },
    {
        name: 'Yuuki',
        image: 'images/characters_04.jpg'
    },
    {
        name: 'Mikoto',
        image: 'images/characters_05.jpg'
    },
    {
        name: 'Ren',
        image: 'images/characters_06.jpg'
    },
    {
        name: 'Ryo',
        image: 'images/characters_07.jpg'
    },
    {
        name: 'Yori',
        image: 'images/characters_08.jpg'
    },
    {
        name: 'Hana',
        image: 'images/characters_09.jpg'
    },
    {
        name: 'Tatsuya',
        image: 'images/characters_10.jpg'
    },
    {
        name: 'Haro',
        image: 'images/characters_11.jpg'
    },
    {
        name: 'Mai',
        image: 'images/characters_12.jpg'
    },
    {
        name: 'Emiko',
        image: 'images/characters_13.jpg'
    },
    {
        name: 'Ayumi',
        image: 'images/characters_14.jpg'
    },
    {
        name: 'Hotaru',
        image: 'images/characters_15.jpg'
    },
    {
        name: 'Haru',
        image: 'images/characters_16.jpg'
    },
    {
        name: 'Kazuya',
        image: 'images/characters_17.jpg'
    },
    {
        name: 'Akira',
        image: 'images/characters_18.jpg'
    },
    {
        name: 'Saki',
        image: 'images/characters_19.jpg'
    },
    {
        name: 'Kazuo',
        image: 'images/characters_20.jpg'
    },
]

//random number between 0 and 19
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 19)//Math.floor seems to turn the Math.random into a whole integer
    let randomCardIndex = randomCard//the random number generated correlates to a index postion which is placed in this var
    let selectedCard = cards[randomCardIndex]// calling the above variable(random index postion) on the cards array and declaring it as selectedCard
    let mysterySpan = document.querySelector('.mystery-card span')
        mysterySpan.innerhtml = selectedCard.name
    let mysteryImg = document.querySelector('.mystery-card img')
        mysteryImg.src = selectedCard.image
}
getRandomCard(cards)

//function to inject data(characters) directly into the html from js
function populateCards() {
        let cardsBox = document.querySelector('.cards')// targeted .cards html div and assigned them to a variable
        let injection = '' // created a variable that holds an empty string value that will be used to hold that for loop string injection

        for (let card of cards){
            injection += `
            <div class="card" onclick="toggleEliminated(this)">
                <img src="${card.image}" />
                <span>${card.name}</span>
            </div>
            `
        }
        cardsBox.innerHTML = injection
}
/* the above funcitons for loop is a for..of loop which let me declare a variable card which is of the cards
array it iterates through them it, takes the current value of the variable (which is nill in this case),
it adds or 'concantenates' a new value to the current value, and it assigns the results back to the variable. 
I used Template literals(`` aka backticks) to embed the html into the injection variable
and a template literal placeholder `${..}` inside the html that holds the location of the injected source */
populateCards(cards)