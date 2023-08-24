function countChange(money, coins) {
    const dp = new Array(money + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
        for (let i = coin; i <= money; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[money];
}


var countChange1 = function(money, coins) {
    if(money < 0 || coins.length === 0)
      return 0
    else if(money === 0)
      return 1
    else
      return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}

console.log(countChange(0, [1, 2]))
console.log(countChange(4, [1, 2]));
console.log(countChange(10, [5, 2, 3]))
console.log(countChange(11, [5, 7]));

