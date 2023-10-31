// import connectDB from "../../../../libs/mongodb";
// import Commande from '../../../../models/Commande';
// import {getSession} from "next-auth/react";

// // Connectez-vous à la base de données MongoDB
// connectDB().then(r => console.log("connected"));

// export default async (req, res) => {
//     // Vérifiez si l'utilisateur est authentifié
//     const session = await getSession({ req });

//     if (!session) {
//         return res.status(401).json({ error: 'Non autorisé' });
//     }

//     // Récupérez l'ID de l'utilisateur connecté
//     const userId = session.user.id;

//     try {
//         // Recherchez les commandes de l'utilisateur connecté
//         const orders = await Commande.find({ userId }).exec();

//         // Répondez avec les commandes trouvées
//         res.status(200).json(orders);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Erreur lors de la récupération des commandes.' });
//     }
// };




