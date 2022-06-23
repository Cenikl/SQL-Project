--le nombre de voiture en panne (à l'heure actuelle)
select count(id_vehicule) from vehicule where status = 'false';