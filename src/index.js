module.exports = function getZerosCount(number, base) {
  // your implementation
  var a = base;
  var res = 0;
  for(var k = 0; ;k++){
    b = a;
  for (var i=b-1; i>0; i-- ){
    if(Number.isInteger(b/i)){
      a = i;
      break;
    }
  }
  if (a == 1){
    a = b;
    break;
  } 
  }
  for (var c = 0; ;c++){
    if (Number.isInteger(base/a)){
      base = base/a;
    } else break;
  }
  for(var j=1; ;j++){
    b = Math.pow(a,j);
    if(number/b > 1){
    res = res + Math.floor(number/b);
    } else break;
  }
  return(Math.floor(res/c));
}