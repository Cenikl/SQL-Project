-- 62 : afficher tous les matricule des voitures qui vont à une certaine ville,
--      et leur état.(notion de voyage inclus ?)
select
    ve.matricule,
    ve.status
from
    vehicule ve
    join voyage vo on vo.id_vehicule = ve.id_vehicule
    join ville vi on vi.id_ville = vo.id_ville_arrivee
where
    vi.nom_ville = 'Diego';
