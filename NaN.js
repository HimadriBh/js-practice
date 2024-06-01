// NaN: global property is a value representin not a number.

// 1. Failed number conversion

parseInt("hello");
Number(undefined);
Math.abs(undefined);


// 2. indeterminate value
0 * Infinity
1 ** Infinity
Infinity / Infinity
Infinity - Infinity

// 3. Method or expression coerced to NaN

7 ** NaN
7 * "some_string"


// 4. Invalid value is to be represented as numbers

Date("blaba").getTime();
"".charCodeAt(1);


// escaping NaN

NaN ** 0 === 1;
