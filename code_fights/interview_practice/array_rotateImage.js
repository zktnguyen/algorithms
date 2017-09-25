function rotateImage(a) {
  var n = a.length;
  var rotateBy = n - 1;
  var mid = (n + 1) / 2 -1;
  var swap = function(i1, j1, i2, j2){
      var temp = a[i1][j1];
      a[i1][j1] = a[i2][j2];
      a[i2][j2] = temp;
  }
  
  for (var i = 0; i < rotateBy; i++){
      for (var j = i + 1; j < n ; j++){
          swap(i, j, j, i);
      }
  }
  
  for (var i = 0; i < n; i++){
      for (var j = 0; j <= mid; j++){
          swap(i, j, i, rotateBy - j);
      }
  }
  
  return a;
}
