let total = 0;

/*
process.argv.forEach((item, index)=> {
  if(index >= 2){
    total += Number(item);

  }

});

console.log(total);
*/

for(let i = 2; i < process.argv.length; i++){
  total += Number(process.argv[i]);
}
 console.log(total);
