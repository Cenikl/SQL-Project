CREATE DATABASE toky_trans2;

\c toky_trans2;

-- Table client
CREATE TABLE client(
    id_client bigserial primary key,
    nom varchar(150) not null,
    prenom varchar(150),
    cin varchar(12),
    contact varchar(15)
);

-- Table chauffeur
CREATE TABLE chauffeur (
    id_chauffeur serial primary key, 
    nom varchar(150) not null,
    prenom varchar(150),
    cin varchar(12),
    contact varchar(15),
    email varchar(150) not null
);

-- Table offre
CREATE TABLE offre(
  id_offre serial primary key,
  tarif int not null check(tarif > 0),
  label varchar(100) not null
);

-- Table ville 
CREATE TABLE ville(
    id_ville serial primary key,
    nom_ville varchar(100) not null
);

-- Table vehicule
CREATE TABLE vehicule(
    matricule varchar(8) primary key,
    nb_place int not null, 
    status boolean
);

-- Table voyage
CREATE TABLE voyage(
    id_voyage bigserial primary key,
    date_voyage date not null, 
    heure_dep time not null, 
    nb_place_dispo int check(nb_place_dispo > 0),
    id_offre int REFERENCES offre(id_offre), 
    matricule varchar(8) REFERENCES vehicule(matricule),
    id_ville_depart int not null REFERENCES ville(id_ville),
    id_ville_arrivee int not null REFERENCES ville(id_ville)
);

-- Table reserver 
CREATE TABLE reserver(
    id_client int not null REFERENCES client(id_client),
    id_voyage int REFERENCES voyage(id_voyage),
    date_reservation date DEFAULT current_date,
    place int not null, 
    montant_paye int check (montant_paye > 0) DEFAULT 0
);

-- Table conduire
CREATE TABLE conduire(
    id_chauffeur int not null REFERENCES chauffeur(id_chauffeur) not null,
    matricule varchar(8) not null REFERENCES vehicule(matricule)
);

-- Table depense 
CREATE TABLE depense(
    id_depense serial primary key, 
    essence float, 
    maintenance int
);

-- Table recevoir 
CREATE TABLE recevoir(
    matricule varchar(8) not null REFERENCES vehicule(matricule),
    id_depense int not null REFERENCES depense(id_depense)
);