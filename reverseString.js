// 1.Complete the reverseString function, it has one parameter s. You must perform the following actions:
// . Try to reverse string s using the split,reverse, and join methods.
// . If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// . Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception
// was thrown, this should be the original string.
// Input Format
// Locked stub code in the editorreads variable s from stdin and passes it to the function.
const reverseString = (s) => {
  try {
    let reverseStr = s.split("").reverse().join("");
    console.log(reverseStr);
  } catch (e) {
    throw Error("s.split is not a function");
  }
};
reverseString(3454);
