CREATE TABLE Billet
(
    film VARCHAR NOT NULL,
    antall INTEGER(255) NOT NULL,
    fornavn VARCHAR(255) NOT NULL,
    etternavn VARCHAR(255) NOT NULL,
    telefonnr INTEGER(8) NOT NULL,
    epost VARCHAR(255) NOT NULL,
    PRIMARY KEY (film)
);