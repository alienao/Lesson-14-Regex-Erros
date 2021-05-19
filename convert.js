//3. Convert the code using try...catch.
// function reverseString(s) {
//   typeof s !== "string"
//     ? console.log("s.split is not a function")
//     : (s = s.split("").reverse().join(""));
//   console.log(s);
// }

const reverseString = (s) => {
  try {
    let reverseStr = s.split("").reverse().join("");
    console.log(reverseStr);
  } catch (e) {
    throw Error("s.split is not a function");
  }
};
reverseString(3454);
