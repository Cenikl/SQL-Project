-- reservation non payees
select nom,prenom,id_voyage,date_reservation,place,montant_paye from reserver inner join client on reserver.id_client=client.id_client where montant_paye = 0;


-- reservation payees
select nom,prenom,id_voyage,date_reservation,place,montant_paye from reserver inner join client on reserver.id_client=client.id_client where montant_paye > 0;
