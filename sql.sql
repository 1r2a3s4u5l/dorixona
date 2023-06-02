CREATE DATABASE dorixona;
CREATE TABLE region(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50)
);
CREATE TABLE district(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    region_id INT NOT NULL
);
CREATE TABLE medicineType(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);
CREATE TABLE Stock(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pharmacy_id INT,
    medicine_id INT,
    quantity INT
);
CREATE TABLE medicines(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    manufacturer VARCHAR(255),
    madicine_type_id INT,
    price FLOAT,
    expiry_date DATE,
    info TEXT
);
CREATE TABLE pharmacy(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    region_id INT,
    district_id INT
);