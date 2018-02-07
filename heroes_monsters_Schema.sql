CREATE database heroes_monsters_db;

USE monsters;

CREATE TABLE monsters (
    m_name INT NOT NULL,
    class VARCHAR(15),
    con INT NULL,
    str INT NULL,
    dex INT NULL,
    cha INT NULL,
    wis INT NULL,
    gp INT NULL,
    PRIMARY KEY (m_name)
);

CREATE TABLE npcs (
    n_name INT NOT NULL,
    class VARCHAR(15),
    con INT NULL,
    str INT NULL,
    dex INT NULL,
    cha INT NULL,
    wis INT NULL,
    gp INT NULL,
    PRIMARY KEY (n_name)
);

CREATE TABLE characters (
    c_name INT NOT NULL,
    class VARCHAR(15),
    con INT NULL,
    str INT NULL,
    dex INT NULL,
    cha INT NULL,
    wis INT NULL,
    gp INT NULL,
    PRIMARY KEY (c_name)
);

SELECT * FROM monsters;
SELECT * FROM npcs;
SELECT * FROM characters;