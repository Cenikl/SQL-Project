-- 60 les depenses de chaque voiture
select
    ve.matricule,
    de.essence,
    de.maintenance
from
    vehicule ve
    join recevoir re on re.id_vehicule = ve.id_vehicule
    join depense de on re.id_depense = de.id_depense;
