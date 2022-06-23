-- toutes les reservations sur le voyage 3

select id_voyage,nom,prenom,date_reservation,place,montant_paye from reserver inner join client on reserver.id_client=client.id_client where id_voyage=3;
