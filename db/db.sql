
--- in sqllite  

 CREATE TABLE user (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(50),
    nickname varchar(50),
    password varchar(50),
    img varchar(50) ,
    desc varchar(200) ,
    class varchar(50),
    money INTEGER ,
    record INTEGER ,
    state INTEGER ,
    rooms varchar(2000), 
    created_at datetime,  
    updated_at datetime  
);

 CREATE TABLE  room (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
    uid INTEGER,
    name varchar(50),
    desc varchar(200),
    class varchar(50),
    users INTEGER,
    state INTEGER,
    created_at datetime,  
    updated_at datetime  
) ;

 CREATE TABLE  msg (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
    uid INTEGER,
    rid  INTEGER,
    msg varchar(2000),
    state INTEGER,
    created_at datetime,  
    updated_at datetime  
) ;

 CREATE TABLE  report (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
    reporter INTEGER,
    target  INTEGER,
    mid  INTEGER,
    desc varchar(2000),
    disposeer INTEGER,
    state INTEGER,
    created_at datetime,  
    updated_at datetime  
) ;

 CREATE TABLE  permissions (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name varchar(200), 
    desc varchar(2000),
    state INTEGER,
    created_at datetime,  
    updated_at datetime  
) ;


 CREATE TABLE  mapping (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     uid INTEGER, 
     pid INTEGER, 
    created_at datetime,
    updated_at datetime  
) ;


 CREATE TABLE  config (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
    config_key varchar(50),
    config_value varchar(2000),
    created_at datetime,  
    updated_at datetime
);
  -- mysql
   
  CREATE TABLE  user (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50)     COMMENT '名称',
    `number` varchar(50)     COMMENT '账号',
    `password` varchar(50)    COMMENT '密码',
    `nickname` varchar(50)    COMMENT '昵称',
    `img` varchar(200)    COMMENT '头像', 
    `type`   int(11)  COMMENT '类型',    
    `state`  int(11)  COMMENT '状态',     
    `created_at` datetime DEFAULT NULL ,  
    `updated_at` datetime DEFAULT NULL ,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



 