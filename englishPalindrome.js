
module.exports = function isPalindrome(str) {
    var j = str.length-1
    for(var i=0; i<str.length/2; i++){
        if(str[i]!=str[j]){
            return false;
        }
        j--;
    }
    return true;
}
