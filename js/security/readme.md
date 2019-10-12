前端安全

表单 sql注入(sqlinjection)
form -> 触发onsubmit事件 -> url
POST data:{email:'zm@163.com',password:'123456'}

后端 登入过程  sql查找的过程
SELECT *
  FROM users
 WHERE email = 'user@email.com'
   AND pass  = 'password'' LIMIT 1  

 多了一个'(sql语法报错) 破坏服务器的运行 造成错误

 - 用户的输入不可信任
    password' 导致了sql的提前结束或多了一个' 500 语法错误 
    - 后端编码解码
 - 登入帐号             
   SELECT *
     FROM users
    WHERE email = 'user@email.com'
      AND pass  = '' or 1=1--' LIMIT 1 
      --表示不管后面什么情况where语句为真

- SELECT * from user
    WHERE email = 'user@email.com'
        AND password ='password%27'

     >>escape("password'") 
     "password%27" 编码 
     >>unescape("password%27")
     "password'" 解码