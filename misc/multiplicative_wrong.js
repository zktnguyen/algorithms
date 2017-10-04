function multiplicativePairs(A, B){
  // check length of either, since they are equal length
  var N = A.length;
  if (N === 0){
    return 0;
  }
  
  var count = 0, pairs = 0, bIterator = 0;
  A[N - 1] += B[N-1] / 1000000;
  if (A[N-1] !== 0 && A[N-1] !== 1){
    B[N - 1] = -1;
  }
  else {
    B[N - 1] = A[N - 1];
  }

  for (var i = 0; i < N-1; i++){
    A[i] += B[i] / 1000000;
    if (A[i] > 1){
      B[i] = A[i] / (A[i] - 1);
    }
    else {
      if (A[i] === 1){
        B[i] = 1;
      }
      else if (A[i] === 0){
        B[i] = 0;
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
    else if (B[bIterator] === 0) {
      
    }
  }

  console.log(A);
  console.log(B);
  i = N - 1;
  while(bIterator < i){
    if (B[bIterator] === 1 || B[bIterator] === 0){
      if (B[bIterator] === A[i]){
        count = i - bIterator;
        pairs += count;
      }
    }
    else if (B[bIterator] <= A[i]){
      count = i - bIterator;
      pairs += count;
    }
    else {
      bIterator++;
      i++;
    }
    console.log(bIterator, ":", i, ":", pairs);
    i--;
  }

  return pairs > 1000000 ? 1000000 : pairs;
}