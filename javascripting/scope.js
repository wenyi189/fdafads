let a = 1, b = 2, c = 3;
(function firstFunction(){
  let b = 5, c = 6;

  (function secondFunction(){
    let b = 8;
    console.log("a: "+a+", b: "+b+", c: "+c);

    (function thridFunction(){
      let a = 7, c = 9;

      (function forthFunction(){
        let a = 1, c = 8;

      })();
    })();
  })();
})();
