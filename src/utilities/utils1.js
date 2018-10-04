

export const getRandomItem = (arr, val) => {
  console.log('---q', val)
  if(!arr) {
    return false;
  }

  let finalVal = arr[Math.floor(Math.random() * arr.length)]; 
  while(finalVal===val) {
    finalVal = arr[Math.floor(Math.random() * arr.length)];
  }
  return finalVal;
}