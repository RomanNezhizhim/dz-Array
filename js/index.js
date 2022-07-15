// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.   concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concattArr = arr1.concat(arr2);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].    reverse
 let reversArr = arr1.reverse();

// push, unshift
// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
arr1 = [1,2,3];
let pushArr = arr1.push(4,5,6);

// console.log(arr1);
// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
arr1 = [1, 2, 3];
let unshiftArr = arr1.unshift(4,5,6);


// shift, pop
// 5. Дан массив ['js', 'css', 'html']. Выведите на экран первый элемент и удалите
// его.
let arr = ['js', 'css', 'html'];
console.log(arr.shift(), arr);


// 6. Дан массив ['js', 'css', 'html']. Выведите на экран последний элемент и
// удалите его.
arr = ['js', 'css', 'html'];
console.log(arr.pop(), arr);


// slice
// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [1, 2, 3].
arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0, 3);
console.log(newArr, arr);


// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [4, 5].
newArr = arr.slice(3,5);
console.log(newArr, arr);


// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив
// в [1, 4, 5].
arr.splice(1, 2);
console.log(arr);


// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый
// массив элементы [2, 3, 4].
arr = [1, 2, 3, 4, 5];
let newSpliceArr = arr.splice(1, 3);
console.log(newSpliceArr);


// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr)


// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arr = [1, 2, 3, 4, 5];
arr.splice(5, 0, 'e');
arr.splice(4, 0, 'c');
arr.splice(1, 0, 'a', 'b');

//изза чего в одну строку не делает?  arr.splice(5, 0, 'e').splice(4, 0, 'c').splice(1, 0, 'a', 'b')
console.log(arr)


// sort
// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
arr = [3, 4, 1, 2, 7];
console.log(arr.sort());




// 1. Необходимо создать функцию hasElem, которая параметрами будет
// принимать массив и строку, и возвращать true, если строка есть в
// массиве, и false - если нет
arr = [2, 4, 'a', 'r'];
let string = 'a';

/**
 * 
 * @param {arrey} arr 
 * @param {string|number} string 
 * @returns {boolean}
 */
const hasElem1 = function(arr, string){
  for(elem of arr){
    if(elem===string){
      return true
    }
  }
  return false
}
console.log(hasElem1(arr, string));

/**
 * 
 * @param {arrey} arr 
 * @param {string|number} string 
 * @returns {boolean}
 */
const hasElem = function(arr, string){
  let rez = false
  arr.forEach((elem) =>{
    // console.log(elem)
    if(elem===string){
      rez = true
    }
  })
  return rez
}
console.log(hasElem(arr, string));


//2. Дан массив с числами. Проверьте, что в этом массиве есть указанное
// число. Если есть - вернуть true, а если нет - вернуть false.

arr = [2, 5, 7, 1, 87, 5];
let num = 5;
console.log(hasElem1(arr, num));
console.log(hasElem(arr, num));


// 3.Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа
// подряд. Если есть - вернуть true[2,2,1], а если нет - вернуть false[1,2,1]
arr = [1,2,1,2];
arr2 = [1,2,2,1];

const twoTogether = function(arr){
  for (let i = 1; i < arr.length; i++) {
    if(arr[i-1] === arr[i] || arr[i] === arr[i+1]){
      return true;
    }
    continue
  }
  return false
}

console.log(twoTogether(arr2))


// 5.Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
