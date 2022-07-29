let data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

const maxAmount = 52.36
const maxPixels = 150

//Zadanie: Stwórz w html kolumny na podstawie danych w zmiennej data
// Przejdz po elementach zmiennej data (pętla)
data.forEach(drawColumn);

// Dla każdego elementu stworz kolumnę w html 
function drawColumn(element) {

    // Pobierz div days po id
    let container = document.getElementById('days')

    // Wylicz wysokość słupka
    let height = (element.amount * maxPixels) / maxAmount

    // Zmień kolor słupka dla bieżącego dnia tygodnia
    let highlitedClass = ''

    const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const d = new Date();
    let day = weekday[d.getDay()];

    if (element.day === day) {
        highlitedClass = 'highlite_color'
    }

    const column = `
    <div>
        <div class="popup">$${element.amount}</div>
        <div class="bar ${highlitedClass}" style="height: ${height}px;"></div>
        <p>${element.day}</p>
    </div>`

    container.innerHTML += column
}

// Wyświetl brązowy box z kwotą po kliknięciu
const bars = document.querySelectorAll('.bar')
bars.forEach(addPopupEvent)

function addPopupEvent(element) {
    element.addEventListener('click', function (event) {
        // Wyczyść wszystkie popupy z klasą active
        let allPopups = document.querySelectorAll('.popup')
        allPopups.forEach(function (e) {
            e.classList.remove('active')
        })
        // Dodaj klasę active do popupu nad klikniętym słupkiem/barem
        let popup = event.target.parentElement.querySelector('.popup')
        popup.classList.add('active')
    })
}

