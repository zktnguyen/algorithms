function multiplicativePairs(A, B){
  // check length of either, since they are equal length
  var N = A.length;
  if (N === 0){
    return 0;
  }
  
  var count = 0, pairs = 0, bIterator = 0;
  A[N - 1] += B[N-1] / 1000000;
  B[N-1] = 0;
  for (var i = 0; i < N-1; i++){
    A[i] += B[i] / 1000000;
    if (A[i] > 1){
      B[i] = A[i] / (A[i] - 1);
    }
    else {
      if (A[i] === 1){
        B[i] = 1;
      }
      /** 
       * Larger than largest value A[i] can be
       * since it will not be multiplicative with any pair
      */
      else {
        B[i] = 1020;
      }
    }

    // Skip over any values too large to find a pair with
    if (i > 0 && B[bIterator] > A[N-1]){
      bIterator++;
    }
  }
  console.log(A);
  console.log(B);
  i = N - 1;
  while(bIterator < i){
    if (B[bIterator] === 1 && A[i] === 1){
      count = i - bIterator;
      pairs += count;
    }
    else if (B[bIterator] <= A[i]){
      count = i - bIterator;
      pairs += count;
    }
    else {
      bIterator++;
      i++;
    }
    i--;
  }

  return pairs > 1000000 ? 1000000 : pairs;
}

console.log(multiplicativePairs([0, 1, 2, 2, 3, 5],[500000, 500000, 0, 0, 0, 20000]));