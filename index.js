/*
    我打算遍历英语词典，寻找所有的满足回文字符串规则的英语单词。大概要遍历几十万个英语单词，
    刚好可以熟悉下node.js的fs模块。
*/
// 1. 安装必要的依赖包
const fs = require('fs');
const englishPalindrome = require('./englishPalindrome');

// 2. 读取 TXT 文件
fs.readFile('words.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // 3. 判断单词是否为回文
  const palindromeWords = [];
  let lines = data.split('\n');
  let wordCount = 0;

  lines.forEach(line => {
    const words = line.split(' ');
    wordCount += words.length;

    words.forEach(word => {
      // 如果单词是回文，记录到数组中
      if (englishPalindrome(word)) {
        palindromeWords.push(word);
      }
    });
  });
  // 4. 记录回文单词
  console.log(`共有 ${wordCount} 个单词，其中回文单词有：${palindromeWords.length}`);
  fs.writeFile('ALLpalindromeWord.txt',palindromeWords.join(' '),function(err){
         if(err) {
            return console.error(err);
         }
  })
});