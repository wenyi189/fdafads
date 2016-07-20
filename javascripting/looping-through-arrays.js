let pets = ['cat', 'dog', 'rat'];

pets.forEach((item, index, array) => {
  array[index] = array[index] + 's';
  
});

console.log(pets);
