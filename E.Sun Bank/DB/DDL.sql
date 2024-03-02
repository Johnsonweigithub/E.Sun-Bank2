CREATE DATABASE LibrarySystem

CREATE TABLE LibraryUser (
    UserID VARCHAR(20),
    PhoneNumber INT,
    UserPassword INT,
    UserName VARCHAR(20),
    RegistrationTime TIME,
    LastLoginTime TIME
);

CREATE TABLE Inventory(
    InventoryID VARCHAR(20),
    ISBN INT,
    StoreTime TIME,
    InventoryStatus VARCHAR(20)
);

CREATE TABLE Book(
        ISBN VARCHAR(20),
        BookName VARCHAR(50),
        Author VARCHAR(20),
        Introduction VARCHAR(500)        
);

CREATE TABLE BorrowingRecord(
    UserID VARCHAR(20),
    InventoryID VARCHAR(20),
    BorrowingTime TIME,
    ReturnTime TIME
);