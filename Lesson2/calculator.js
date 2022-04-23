const PI = 3.14;

export function sum(a, b) {
    return a + b
}

export function calculateRectArea(a, b) {
    return a * b
}

export function calculateCircleArea(r) {
    return r * r * PI
}

export default function info(name, country, producer, year) {
    this.name = name;
    this.country = country;
    this.producer = producer;
    this.year = year;
}