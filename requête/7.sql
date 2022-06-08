-- Liste des voyages et leurs destinations (id des voyages et leur ville d'arriver)
select id_voyage, nom_ville from voyage inner join ville on id_ville_arrivee = id_ville;
