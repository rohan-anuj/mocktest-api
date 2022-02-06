--Up 
CREATE TABLE user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    password TEXT,
    test INTEGER DEFAULT 0,
    tallyscore INTEGER DEFAULT 0,
    cccscore INTEGER DEFAULT 0,
    dtpscore INTEGER DEFAULT 0,
    excelscore INTEGER DEFAULT 0

);

CREATE TABLE tallyqna(
    Question TEXT,
    rightans TEXT,
    wrongans1 TEXT,
    wrongans2 TEXT,
    wrongans3 TEXT
    
);

CREATE TABLE cccqna(
    Question TEXT,
    rightans TEXT,
    wrongans1 TEXT,
    wrongans2 TEXT,
    wrongans3 TEXT
    
);
 
CREATE TABLE dtpqna(
    Question TEXT,
    rightans TEXT,
    wrongans1 TEXT,
    wrongans2 TEXT,
    wrongans3 TEXT
);

CREATE TABLE excelqna(
    Question TEXT,
    rightans TEXT,
    wrongans1 TEXT,
    wrongans2 TEXT,
    wrongans3 TEXT
);





--Down




