const add = (a, b) => a + b;

test('should add two numbers', () =>{
  const result = add(3, 4);
  expect(result).toBe(7);
  if(result !== 7){
    throw new Error(`this doesn't equal 7 dog. The result was ${result}`)
  }
});

const generateGreeting = (name = 'Anon') => `Hello, ${name}!`;
//this is testing to make sure adding a value to the name variable will return hello name!
//res as a const is the same as result

test('should retun Hello, name!', () =>{
  const res = generateGreeting('Erin');
  console.log(res);
  expect(res).toBe('Hello, Erin!');
});

test('Should return greeting for no name', () =>{
  const res = generateGreeting();
  expect(res).toBe('Hello, Anon!');
})