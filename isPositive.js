//2. Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
// return the string YES. Otherwise, it must throw an Error according to the following rules:
// . If a is 0, throw an Error with message = Zero Error.
// . If a is negative, throw an Error with message = Negative Error.

const isPositive = (a) => {
  try {
    if (a < 0) {
      throw new Error("NEGATIVE ERROR");
    }
    if (a === 0) {
      throw new Error("ZERO ERROR");
    }
    console.log("YES");
  } catch (e) {
    console.log(e.message);
  }
};
isPositive(8);
