let person;

console.log(person);

console.log('test');

console.log('드디어 원격에....')
console.log('이건 main에서 작업한 내용이야');

var name = function () {
    console.log('ddd');
};

name();

for (const nameKey in name) {
    console.log(nameKey);
}