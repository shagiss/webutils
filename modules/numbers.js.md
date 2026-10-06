# Numbers
## Functions
### rand
**`rand(maximum = 100)`** - Returns a random number that is smaller than the maximum. If maximum is NOT defined then maximum is set to 100

Usage:
    
```javascript
import { rand } from "/modules/numbers.js"
const random_number = rand(10);
console.log(`A random number: ${random_number} <= 10`);
```

### randbetween
**`randbetween(maximum = 100, minimum = 0)`** - A random number between the minimum and the maximum.
First argument is maximum. if that argument is NOT set, then it's 100.
Second argument (and last) is minimum. if not set, then it's 0.

Usage:
```javascript
import { randbetween } from "/modules/numbers.js"
console.log(randbetween(5, 2)) // generate a random number between 2 and 5
```

### range
**`range(start, end)`** - Generate a range of numbers between start and end.

Usage:

```javascript
import { range } from "/modules/numbers.js"
console.log(range(0,7)) // Generate a range of numbers between 0 to 7
```

### percentage
**`percentage.to(number1, number2)`**;
**`percentage.from(percentage, number2)`**
-- two functions to calculate percentage.
The first function converts number to percentage,
the last function converts percentage back to a number.

Usage:
```javascript
import { percentage as percent } from "modules/numbers.js"
console.log(
    percent.to(25, 100),  // ?% is 25 within 100?
    percent.from(25, 100) // 25% of 100 is ?
);
```
