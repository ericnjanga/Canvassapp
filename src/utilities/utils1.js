

/**
 * Return a random item from @arr as long as this one is different from @val
 * @param {*} arr 
 * @param {*} val 
 */
export const getRandomItem = (arr, val) => {
  if(!arr) {
    return false;
  }

  let finalVal = arr[Math.floor(Math.random() * arr.length)]; 
  while(finalVal===val) {
    finalVal = arr[Math.floor(Math.random() * arr.length)];
  }
  return finalVal;
}