




n = 4;
let i=0
function nQueens() {
  let C = new Array(n + 1).fill(0);
  findQueens(C, 1);
  console.log(i);
}


function colorNormal(x, y, color) {
  var chessBoard = document.getElementById("chessBoardNormal");
  for (var i = 0; i < x; i++) {
    
      var row = chessBoard.appendChild(document.createElement("div"));
      for (var j = 0; j < y; j++) {
          var span = document.createElement('span');
          if(i & 1){ // odd
              if(j & 1){ // white

              } else { // black
                  span.style.backgroundColor = color;
              }
          } else {  // even
              if(j & 1){ // black
                  span.style.backgroundColor = color;        
              }
          }
          row.appendChild(span);
         
          
        }
        if(i==x-1){
          row.className = "space"
        }
       
  }
}






function findQueens(C, k) {
  if (k == n + 1) {
    if(n<10){
    console.log(C);
    colorNormal(n, n, 'black');
  }
    i++
    return;
  }
  for (let i = 1; i <= n; i++)
    if (check(C, k, i)) {
      C[k] = i;
      findQueens(C, k + 1);
    }
}
function check(C, k, i) {
  for (let j = 
    1; j < k; j++) {
    if (C[j] == i || Math.abs(C[j] - i)==(Math.abs(j - k)))
     return false;
  
    }
  return true;
}

nQueens();
