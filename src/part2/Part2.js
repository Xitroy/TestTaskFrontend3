function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomString(len) {
  let res = "";
  for (let i = 0; i < len; i++) {
    res = res.concat(String.fromCharCode(getRandomInt(1072, 1103)).toString());
  }
  return res;
}

function createArrayOfStrings(k = 10000000) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(createRandomString(7))
  }
  return arr;
}

function substrInArr(stringToSearch, array) {
  let words = [];
  for (let i = 0; i<array.length; i++) {
    let str = array[i];
    if (str.includes(stringToSearch)) {
      words.push(str);
    }
  }
  return words;
}

// first argument is a string which you want to find in array
// other arguments are arrays
function pickInArrays(stringToSearch) {
  let founded = [];
  for (let i = 1; i < arguments.length; i++) {
    founded = founded.concat(substrInArr(stringToSearch, arguments[i]))
  }

  return founded;
}

//Комментарий к заданию:
// Есть несколько вариантов трактовки, но ни один из них не кажется мне адекватным
// Вариант 1: Нам нужно найти все вхождения данной подстроки в строки массивов и вывести эти строки массивом
// Вариант 2: Нам нужно найти первый массив, в котором в какой-то из строк находится подстрока и вывести его (очень странно называть это фильтром, но ктож вас знает...)
// Вариант 3: Самое забавное, что по такой спецификации нам подойдет функция, которая просто вернёт массив из одного элемента - строки, которую мы ищем.
// function filter(stringToSearch){
//   return [stringToSearch];
// }
// Если вчитаться в задание - это вообще одно из лучших решений ибо делает действительно то, что просят безо всяких допущений ради здравого смысла
// Вариант 4: "массив, элементы которого  имеют совпадение с указанной строкой фильтрации." можно читать как "массив, ВСЕ элементы которого  имеют совпадение с указанной строкой фильтрации."
// Но в этом случае это всё равно больше похоже на поиск... причем, на поиск с чертовски маленькой вероятностью найти хоть какое-то значение
// Я решил реализовать первый вариант, как наиболее близкий к моему ощущению адекватности.

let a1 = createArrayOfStrings();
let a2 = createArrayOfStrings();
console.log(pickInArrays("ахах", a1, a2));
