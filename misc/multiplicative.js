function multiplicative(A, B){
  var N = A.length;
  
  if (N === 0 || N === 1){
    return 0;
  }

  for (var i = 0; i < N; i++){
    A[i] += B[i] / 1000000;
  }

  var P = 0, Q = N - 1, mult = 0, add = 0, pairs = 0, count = 0;
  var zeroes = 0;
  while(P < Q){
    mult = A[P] * A[Q];
    add = A[P] + A[Q];
    if (mult >= add){
      count = Q - P;
      pairs += count;
      Q--;
    }
    else {
      if (A[P] === 0){
        zeroes++;
      }
      P++;
    }
  }
  while (zeroes > 0){
    pairs += zeroes - 1;
    zeroes--;
  }
  return pairs === 1000000 ? 1000000 : pairs;
}

console.log(multiplicative([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,50,50,50,50,50,50,50,50,50,50,50,50]));
console.log(multiplicative([0,0,0,0,0,0,1,1,2,2,3,5],[0,0,0,0,0,500000,0,500000,0,0,0,0]));
console.log(multiplicative([0,1,2,2,3,5], [500000, 500000, 0, 0, 0, 20000]));