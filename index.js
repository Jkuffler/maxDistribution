
function distributeMostCandy () {
  const M = 3; // ttl kids
  const C = [1, 2, 3, 4, 5, 6, 7];// candy dump
  const N = C.length
  // console.log(N)
  let totalPieces=0;

  for(let i = 0; i < N; i++) {
     totalPieces += C[i];    
  };
   // console.log(totalPieces)
  const bagMax = Math.floor(totalPieces/M)
  // console.log(bagMax)
  const remainingCandyPieces = (totalPieces - (M*bagMax));
  return `Case# x: ${remainingCandyPieces}`
};