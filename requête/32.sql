-- Les offres pour une ville (ici a ville est Antsirabe);
select o.label,o.tarif from offre o inner join voyage vo on vo.id_offre = o.id_offre 
inner join ville vi on vi.id_ville = vo.id_ville_arrivee where vi.nom_ville = 'Antsirabe';
