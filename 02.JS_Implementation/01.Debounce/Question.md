<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JavaScript Debounce Interview Questions (Machine Coding Style)

Below is a set of debounce-related interview questions phrased exactly as they might be asked in a JavaScript machine coding or frontend interview. These progress from basic to advanced variations, based on common questions from sources like GreatFrontEnd, LeetCode, GeeksforGeeks, and interview experiences at companies such as Flipkart, Google, Meta, and Amazon. I've included standard and recent variations, focusing solely on the question statements.

***

## Question 1: Basic Debounce

Implement a function `debounce(func, delay)` that returns a debounced version of `func`. The debounced function should only invoke `func` after `delay` milliseconds have passed since the last time it was called. For example, if called multiple times within the delay period, it should reset the timer and execute `func` only after the final call plus the delay.

***

## Question 2: Debounce with Immediate (Leading Edge) Execution

Extend the basic debounce function to `debounce(func, delay, immediate)`. If `immediate` is true, execute `func` immediately on the first call and then debounce subsequent calls for the delay period. If false, it should behave like the basic debounce (trailing edge execution). Ensure it handles rapid successive calls correctly.

***

## Question 3: Debounce with Cancel Method

Implement `debounce(func, delay)` that returns a debounced function with an additional `.cancel()` method. Calling `.cancel()` should clear any pending invocation without executing `func`. This is useful for scenarios like canceling a debounced API call when a component unmounts or a user navigates away.

***

## Question 4: Debounce with Flush and Cancel Methods

Build a debounce function `debounce(func, delay)` that includes both `.cancel()` (to abort any pending calls) and `.flush()` (to immediately execute the pending call if one exists, using the most recent arguments and context). This should mimic advanced debounce behaviors seen in libraries like Lodash.

***

## Question 5: Debounce with Promise Return (Async Variation)

Implement an async-friendly `debounce(func, delay)` where the returned debounced function returns a Promise that resolves with the result of `func` after the delay. It should also handle rejections if `func` throws an error, allowing for chaining with async/await or .then() in modern async workflows.

***

## Question 6: Debounce vs. Throttle Comparison (Conceptual with Implementation)

Explain the key differences between debounce and throttle in terms of how they handle frequent function calls. Then, implement a basic throttle function `throttle(func, limit)` that ensures `func` is called at most once every `limit` milliseconds, regardless of how often it's invoked. Provide an example use case where throttle would be preferred over debounce.

***

These questions cover essential debounce concepts and variations commonly asked in interviews. Expect follow-ups like testing edge cases (e.g., delay=0, no calls, or rapid calls) or real-world applications (e.g., in a search input or resize event handler).
<span style="display:none">[^1][^2][^3][^4][^5][^6][^7]</span>

<div align="center">⁂</div>

[^1]: https://www.greatfrontend.com/questions/javascript/debounce

[^2]: https://devtools.tech/resources/s/what-is-debouncing-explain-with-examples---rid---bn9IQcem9rnLw7rT6gqk

[^3]: https://www.geeksforgeeks.org/javascript/debouncing-in-javascript/

[^4]: https://www.youtube.com/watch?v=kCfTEoeQvQw

[^5]: https://www.scribd.com/document/824652116/Debounce-JavaScript-Interview-Questions-with-Solutions

[^6]: https://www.youtube.com/watch?v=KB0IDZdxaPM

[^7]: https://javascript.plainenglish.io/javascript-interview-question-3-implement-debounce-d6a4e952b25f

