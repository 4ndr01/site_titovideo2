import { IClient, IPrestataire } from "./user";

export interface IOrder {
    orderID: number;
    number: string; // Numéro de commande
    client: IClient; // Une commande a forcément un client
    prestataire?: IPrestataire; // Une commande peut avoir 0 ou 1 prestataire (donc optionnel)
    selectedChoice: [];
    sound: [];
    status: 'pending' | 'accepted' | 'rejected' | 'completed'; // Statut de la commande
    creationDate: Date;
    delivrerayDate: Date; // Date de livraison prévue
    desiredDate: Date; // Date souhaitée par le client
    late:boolean; // Si la commande a été terminer en retard
    // ... autres propriétés de la commande
    tracker: string // 
  };
  