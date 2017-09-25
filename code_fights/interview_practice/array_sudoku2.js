function check3by3(grid, grid_num) {
  var numbers = [0,0,0,0,0,0,0,0,0,0];
  if (grid_num <= 2){
      for (var i = 0; i < 3; i++){
          for (var j = grid_num * 3; j < grid_num * 3 + 3; j++){
              if (grid[i][j] !== '.'){
                  var num = parseInt(grid[i][j]);
                  if (numbers[num] > 0){
                      return false;
                  }
                  else {
                      numbers[num]++;
                  }
              }
          }
      }
  }
  else if (grid_num <= 5){
      for (var i = 3; i < 6; i++){
          for (var j = (grid_num - 3) * 3; j < (grid_num - 3) * 3 + 3; j++){
              if (grid[i][j] !== '.'){
                  var num = parseInt(grid[i][j]);
                  if (numbers[num] > 0){
                      return false;
                  }
                  else {
                      numbers[num]++;
                  }
              }
          }
      }
  }
  else if (grid_num <= 8){
      for (var i = 6; i < 9; i++){
          for (var j = (grid_num - 6) * 3; j < (grid_num - 6) * 3 + 3; j++){
              if (grid[i][j] !== '.'){
                  var num = parseInt(grid[i][j]);
                  if (numbers[num] > 0){
                      return false;
                  }
                  else {
                      numbers[num]++;
                  }
              }
          }
      }
  }
  return true;
}

function checkRow(grid, row) {
  var numbers = [0,0,0,0,0,0,0,0,0,0];
  for (var i = 0; i < 9; i++){
      if (grid[row][i] !== '.'){
          var num = parseInt(grid[row][i]);
          if (numbers[num] > 0){
              return false;
          }
          else {
              numbers[num]++;
          }
      }
  }
  return true;
}

function checkColumn(grid, col) {
  var numbers = [0,0,0,0,0,0,0,0,0,0];
  for (var i = 0; i < 9; i++){
      if (grid[i][col] !== '.'){
          var num = parseInt(grid[i][col]);
          if (numbers[num] > 0){
              return false;
          }
          else {
              numbers[num]++;
          }
      }
  }
  return true;
}

function sudoku2(grid) {
  for (var i = 0; i < 9; i++){
      if (!checkRow(grid,i)){
          return false;
      }
      if (!checkColumn(grid, i)){
          return false;
      }
      if (!check3by3(grid, i)){
          return false;
      }
      
  }
  
  
  return true;
}
