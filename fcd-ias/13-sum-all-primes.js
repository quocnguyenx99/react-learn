function sumPrimes(num) {
  // my solution
  let arr = [];
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, cur) => acc + cur);
}
console.log(sumPrimes(977));

//sumPrimes(977) should return 73156.

// Solution 1:
// Check all numbers for primality
// let primes = [];
// for (let i = 2; i <= num; i++) {
//   if (primes.every((prime) => i % prime !== 0)) primes.(i);
// }
// return primes.reduce((sum, prime) => sum + prime, 0);
