<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: {}


<i>Explanation: There is a typographical error where the variable name "greetign" is mistakenly used instead of "greeting." Consequently, an empty object {} is assigned to this incorrect variable. When you print the value of "greeting" using console.log(greeting), it will display an empty object as the output.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>Explanation: The code defines a JavaScript function named "sum" that takes two parameters, "a" and "b," and returns the result of adding these parameters together using the + operator. When the function is called with the arguments 1 and "2", JavaScript performs type coercion, converting the number 1 to a string and then concatenating it with the string "2". Consequently, the function returns the string "12" as the result.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>Explanation: The code initializes an array food with emojis and creates an object info with a property favoriteFood initially set to "🍕". Later, info.favoriteFood is changed to "🍝". However, printing the food array using console.log(food) will still display the original array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>Explanation: The code defines a function sayHi(name) that expects a name parameter to create a greeting message. When sayHi() is called without an argument, name inside the function is undefined, leading to the output "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>Explanation: The code initializes count to 0 and then iterates through the nums array. For each element in the array that is truthy (not equal to 0), it increments the count variable by 1. Since there are three truthy elements (1, 2, and 3) in the nums array, the final value of count is 3, and that's what gets printed to the console.</i>

</p>
</details>
