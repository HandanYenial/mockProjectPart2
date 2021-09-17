const people = ["Greg" , "Mary" , "Devon" , "James"];
undefined
//1
undefined
people.shift();
'Greg'
people;
(3) ['Mary', 'Devon', 'James']
//2
undefined
people.pop();
'James'
people;
(2) ['Mary', 'Devon']
//3
undefined
people.unshift("Matt");
3
people;
(3) ['Matt', 'Mary', 'Devon']
//4
undefined
people.push("Handan");
4
people
(4) ['Matt', 'Mary', 'Devon', 'Handan']
//5
undefined
people.slice(2);
(2) ['Devon', 'Handan']
people;
(4) ['Matt', 'Mary', 'Devon', 'Handan']
//6
undefined
people.indexOf("Mary");
1
//7
undefined
people.indexOf("Foo");
-1
//8
undefined
let people=["Greg" , "Mary" , "Devon" , "James"];
VM3483:1 Uncaught SyntaxError: Identifier 'people' has already been declared
let others = ["Greg" , "Mary" , "Devon" , "James"];
undefined
others.splice(2,1,"Elizabeth" , "Artie");
['Devon']
others;
(5) ['Greg', 'Mary', 'Elizabeth', 'Artie', 'James']
//9
undefined
let withBob = others.concat("Bob");
undefined
withBob;
(6) ['Greg', 'Mary', 'Elizabeth', 'Artie', 'James', 'Bob']
