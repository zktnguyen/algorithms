(function(){
  'use strict';
  /*
  1.7
    Write an algorithm such that if an element in an MxN matrix is 0, its entire row
    and column are set to 0.
      idea:
      iterate through matrix
      find 0s
      store the values of the columns and rows that are zeroes
      iterate through matrix again
      change values of the rows and columns that have 0s (recorded above) to 0s

   */
  function setZeros(matrix){
    var row = [];
    var column = [];
    
    for (var i = 0; i < matrix.length; i++){
      for (var j = 0; j< matrix[i].length; j++){
        if (matrix[i][j] === 0){
          if (row.indexOf(i) === -1){
            row.push(i);
          }
          if (column.indexOf(j) === -1){
            column.push(j);
          }
        }
      }
    }

    for (i = 0; i < matrix.length; i++){
      if (row.indexOf(i) !== -1){
        for (var k = 0; k < matrix[i].length; k++){
          matrix[i][k] = 0;
        }
      }
      for (var c = 0; c < matrix[i].length; c++){
        if (column.indexOf(c) !== -1){
          for (var r = 0; r < matrix.length; r++){
            matrix[r][c] = 0;
          }
        }
      }
    }
    return matrix;
  }
  console.log(setZeros([
                        [1,2,3,9],
                        [3,4,0,7],
                        [5,3,1,0]
                      ]));
}());