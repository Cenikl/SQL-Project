-- Les véhicules qui ont les dépenses les plus elevés pour l'essence.
select ve.matricule from vehicule ve 
    join recevoir re on re.id_vehicule = ve.id_vehicule 
    join depense de on de.id_depense = re.id_depense 
    where de.id_depense = (select id_depense from depense 
    where essence = (select max(essence) from depense));
