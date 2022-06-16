--Le nombre de voyages effectué tel ou tel jour, à tel ou tel endroit
select count(id_voyage), 
        v1.nom_ville as ville_depart,
        v2.nom_ville as ville_arrivee
from voyage 
inner join ville as v1 on voyage.id_ville_depart = v1.id_ville
inner join ville as v2 on voyage.id_ville_arrivee = v2.id_ville
where date_voyage = '22-06-05'
group by v1.nom_ville,v2.nom_ville
    ;