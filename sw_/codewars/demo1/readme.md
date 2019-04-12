[twitter]()
写一个函数 参数为 一句话 英文的 将
- 如果字符超过140字 , 返回false
- 如果是空字符,返回false
- 以#开始
- 每个单词首字母大写

split() 将字符串拆分为单词 
map() 
charAt(0) 单词的第一个字母
toUpperCase()
slice() 字符串切割
join()
'hello world miss'.split('').map(w => w.charAt(0).toUpperCase+w.slice(1).jion(' '))