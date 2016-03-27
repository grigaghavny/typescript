var example = require('..');
//var myPage = require('../../src/example/GeneratorImpl/MyOwnPage')

example.Greeter.sayHello('World!');
console.log('Meaning of life is ' + new example.DeepThought().result + " " + new example.MyOwnPage().getGenerator());
