/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    console.log(String(x).split('').reverse().join(''))
    let is_palindrome = false
    let reverse_number = Number(String(x).split('').reverse().join(''))

    if(reverse_number === x){
        is_palindrome = true
    }

    return is_palindrome
}

console.log(isPalindrome(121))