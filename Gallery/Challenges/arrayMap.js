function subArray(arr, target) {
  let currentSum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];
    
    // Shrink the window as long as the currentSum exceeds the target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // Check if the currentSum equals the target
    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
console.log(subArray(arr, 3)); // Outputs: true
