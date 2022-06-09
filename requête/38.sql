-- Le nombre de voyage dans une ville entre deux date precise
select * from voyage vo join ville vi on vi.id_ville = vo.id_ville_arrivee 
where vo.date_voyage between '2005-01-02' and '2007-03-01' and vi.nom_ville = 'Diego';
