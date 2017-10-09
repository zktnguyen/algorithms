function multiplicative(A, B){

  // N is the amount of elements in a 0-indexed array.
  var N = A.length;

  // Check for length of array A, 0 pairs if less than 2.
  if (N < 2){
    return 0;
  }

  // Create C Array by adding B[i] / 1,000,000 to A[i]
  for (var i = 0; i < N; i++){
    A[i] += B[i] / 1000000;
  }

  /** Initialize P and Q (Indices in which 0 <= P < Q)
  * mult = C[P] * C[Q]
  * add = C[P] + C[Q]
  * pairs = number of multiplicative pairs
  * count = number of indices P such that 0 <= P < Q and mult < add
  * Edge case: 0s must be counted since 0 * 0 >= 0 + 0 */
  var P = 0, Q = N - 1, mult = 0, add = 0, pairs = 0, count = 0, zeroes = 0;

  /**Condition to keep looping through the C array for pairs.
   * P starts at 0, while Q starts at N - 1 */
  while(P < Q){
    // Insert formula to calculate the condition.
    mult = A[P] * A[Q];
    add = A[P] + A[Q];

    /**Increment pairs by count amount if mult >= add.
    * All pairs with Q have been counted, so decrement Q. 
    Continue with the same P to see if Q - 1 is a matching pair. */
    if (mult >= add){
      count = Q - P;
      pairs += count;
      Q--;
    }
    /** If there are 0s (should be in the front of the array)
     * Please increment zeroes counter. 0 can ONLY pair with
     * each other so the algorithm above does not work for 0s.
     * Increment P for every Q that it does NOT pair with.
     * Continue with the same Q to see if P + 1 is a matching pair.
     */
    else {
      if (A[P] === 0){
        zeroes++;
      }
      P++;
    }
    // Loop stops when P >= Q since P,Q s.t. 0 <= P < Q
  }

  // add the amount of pairs of 0s there are.
  while (zeroes > 0){
    pairs += zeroes - 1;
    zeroes--;
  }
  return pairs >= 1000000 ? 1000000 : pairs;
}

/** Complexity: O(N) run-time (1 for loop = N, 2 while loops = 2N)
* O(1) space (no additional storage besides input arrays)
* I could have both the for loop and second while loop, but for logical purposes,
* and readability purposes, I did not.*/

/* Some tests:
console.log(multiplicative([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,50,50,50,50,50,50,50,50,50,50,50,50])); //outputs 6.
console.log(multiplicative([0,0,0,0,0,0,1,1,2,2,3,5],[0,0,0,0,0,500000,0,500000,0,0,0,0])); //outputs 18.
console.log(multiplicative([0,1,2,2,3,5], [500000, 500000, 0, 0, 0, 20000])); //outputs 8. */