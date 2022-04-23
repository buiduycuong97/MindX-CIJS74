const people = [{
    "id": 1,
    "first_name": "Cynthy",
    "last_name": "Blunsden",
    "email": "cblunsden0@tuttocitta.it",
    "gender": "Female"
}, {
    "id": 2,
    "first_name": "Anna-diana",
    "last_name": "Whitlock",
    "email": "awhitlock1@go.com",
    "gender": "Female"
}, {
    "id": 3,
    "first_name": "Aurora",
    "last_name": "Lawrance",
    "email": "alawrance2@google.com.hk",
    "gender": "Female"
}, {
    "id": 4,
    "first_name": "Netti",
    "last_name": "McDonnell",
    "email": "nmcdonnell3@tmall.com",
    "gender": "Female"
}, {
    "id": 5,
    "first_name": "Elfie",
    "last_name": "McGinnis",
    "email": "emcginnis4@un.org",
    "gender": "Female"
}, {
    "id": 6,
    "first_name": "Eugine",
    "last_name": "Wyndham",
    "email": "ewyndham5@tinyurl.com",
    "gender": "Genderfluid"
}, {
    "id": 7,
    "first_name": "Franky",
    "last_name": "Reiner",
    "email": "freiner6@gov.uk",
    "gender": "Polygender"
}, {
    "id": 8,
    "first_name": "Amity",
    "last_name": "Luparto",
    "email": "aluparto7@eventbrite.com",
    "gender": "Female"
}, {
    "id": 9,
    "first_name": "Vivien",
    "last_name": "Tolle",
    "email": "vtolle8@mapquest.com",
    "gender": "Female"
}, {
    "id": 10,
    "first_name": "Arnoldo",
    "last_name": "Deval",
    "email": "adeval9@google.fr",
    "gender": "Male"
}]

///Sử dụng map để chuyển đổi từ mảng đã cho về 1 mảng chỉ gồm first_name của từng person trong mảng
let a = people.map((value, index) => value.first_name + ',' + index);
console.log(a);

///Sử dụng map để chuyển đổi từ mảng đã cho về 1 mảng gồm các đối tượng gồm fullname (= first_name + last_name) và gender của từng phần tử trong mảng
let b = people.map((value) => `fullname : ${value.first_name} ${value.last_name} , gender : ${value.gender}`);
console.log(b);

///Sử dụng filter để lọc từ mảng đã cho những person có id > 5
let c = people.filter((value) => value.id > 5)
console.log(c);