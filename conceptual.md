### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

	JWT stands for json web token, and is comprised of a header, payload and a signature

- What is the signature portion of the JWT?  What does it do?

	It is the version of header & payload that is signed with a secret key. It uses an algorithm specified in the header

- If a JWT is intercepted, can the attacker see what's inside the payload?

	Yes, as anyone can use online tools to decrypt the information

- How can you implement authentication with a JWT?  Describe how it works at a high level.

	You use a middleware function to verify the hashed password and if so, you return json saying the correct info was passed in

- Compare and contrast unit, integration and end-to-end tests.

	In unit testing you replace other objects by mock that simulate their behavior. Continuous integration testing is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle. End to end testing tests an applications flow from start to end, and its purpose is to simulate an entire real user scenario

- What is a mock? What are some things you would mock?

	A mock is an object tunder test that may have dependencies on other complex objects. You would mock if there are real objects that are impractical to incorporate into a unit test

- What is continuous integration?

	Continuous integration testing is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- What is an environment variable and what are they used for?

	An environment variable is used to store information that the whole application has access to

- What is TDD? What are some benefits and drawbacks?

	TDD is test driven development. You only need to write the necessary code to get the tests to pass, howeveer the more you write code the more you need to keep running tests to make sure they are passing

- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?
	
- What does `RETURNING` do in SQL? When would you use it?

	It avoids performing an extra database query to collect the data, and is used to identify modified rows

- What are some differences between Web Sockets and HTTP?

	

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

	No, because when using flask the error handler it is much more cryptic than express is.
