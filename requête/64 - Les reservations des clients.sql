-- les reservations des clients
select client.nom,
       id_voyage,
       date_reservation,
       place,
       montant_paye 
 from reserver 
 inner join client on reserver.id_client = client.id_client;
