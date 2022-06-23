-- Liste de vehicules qui partent a un certain moment (ici, date = 2007-06-22 | heure de départ = '16:00')
select ve.matricule from vehicule ve inner join voyage vo on vo.id_vehicule = ve.id_vehicule where vo.date_voyage = '2007-06-22';
select ve.matricule from vehicule ve inner join voyage vo on vo.id_vehicule = ve.id_vehicule where vo.heure_dep = '16:00';
