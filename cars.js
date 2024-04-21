const cars = [
    {
        id: 11,
        make: "Mercedes",
        model: "G63",
        year: 2024,
        color: "black"
    },
    {
        id: 22,
        make: "BMW",
        model: "X6",
        year: 2020,
        color: "white"
    },
    {
        id: 33,
        make: "Audi",
        model: "Q8",
        year: 2022,
        color: "grey"
    },
];

function getCars() {
    return cars;
}

function getCarInformation(id) {
    const car = cars.find(car => car.id === id);
    if (car) {
        return `Make: ${car.make}, 
                Model: ${car.model}, 
                Year: ${car.year}, 
                Color: ${car.color}.`;
    } else {
        return "Car doesn't exist";
    }
}

function getCarAge(id) {
    const car = cars.find(car => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`;
    } else {
        return "Car doesn't exist";
    }
}

module.exports = {
    getCars,
    getCarInformation,
    getCarAge
};
