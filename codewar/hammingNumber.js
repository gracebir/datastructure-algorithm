function nthHammingNumber(n) {
    if (n <= 0) return 0; // Handle invalid input
  
    // Initialize a priority queue with the first Hamming number (1)
    const priorityQueue = [1];
  
    // Define the prime factors for 2, 3, and 5
    const primes = [2, 3, 5];
  
    // Set to store unique Hamming numbers
    const uniqueHammingNumbers = new Set([1]);
  
    // Loop until we find the nth smallest Hamming number
    let currentNumber;
    for (let i = 0; i < n; i++) {
      // Extract the smallest Hamming number from the priority queue
      currentNumber = priorityQueue.shift();
  
      // Generate new Hamming numbers by multiplying with 2, 3, and 5
      for (const prime of primes) {
        const nextHammingNumber = currentNumber * prime;
  
        // If it's not already in the set, add it to the set and the priority queue
        if (!uniqueHammingNumbers.has(nextHammingNumber)) {
          uniqueHammingNumbers.add(nextHammingNumber);
          priorityQueue.push(nextHammingNumber);
        }
      }
  
      // Sort the priority queue to maintain the order
      priorityQueue.sort((a, b) => a - b);
    }
  
    return currentNumber;
  }

  console.log(nthHammingNumber(19))