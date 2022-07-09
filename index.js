
function distributeMostCandy () {
  let M = 3; // ttl kids
  let N = 7; // ttl bags candy
  let C = [1, 2, 3, 4, 5, 6, 7];// candy dump
  let totalPieces=0;

  for(let i=0; i < C.length; i++) {
     totalPieces += C[i];    
  };
  let bagMax = totalPieces/M;
  Math.floor(bagMax)
  console.log(bagMax)
  let remainingCandyPieces = totalPieces - (M*N);
  return `Case# x: ${remainingCandyPieces}`
};