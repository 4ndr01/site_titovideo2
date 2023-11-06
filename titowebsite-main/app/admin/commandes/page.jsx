import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {getSession} from 'next-auth/react'
import Paper from '@mui/material/Paper';
import SectionTitle from '@/components/Common/SectionTitle';

const getMessages = async () => {
    try {
      const res = await fetch(`http://localhost:3000/tarifs/api/commande`, {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch messages");
      }

      return res.json();
    } catch (error) {
      console.log("Error loading messages: ",error);
    }
  };

export default async function BasicTable (){
    const {commande}  = await getMessages();
    console.log(commande);


  return (
    <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">

    <SectionTitle
      title="Bienvenue sur la page admin"
      paragraph="Vous avez accès en temps réel aux demandes des clients"
      center
      width="635px"
    />
     <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Liste des Commandes</h1>
            <ul className="flex flex-col space-y-4">
                {commande.map(order => (
                    <li key={`orders-${order._id}`} className="flex justify-between border p-4 rounded shadow">
                        <div className="flex-1">
                            <p className="font-semibold">{order._id}</p>
                            <p>{order.email}</p>
                        </div>
                        <div className="flex-1">
                           
                            <p><strong>Commentary:</strong> {order.commentary}</p>
                            <p><strong>Status:</strong> {order.etat}</p>
                        </div>
                        <div className="flex-1">
                            <p><strong>Nom:</strong> ${order.name}</p>
                            <p><strong>Format:</strong> {order.selectedChoice}</p>
                        </div>
                        <div className="flex-1">
                           {/* TODO users.map() -> handleClick(fetch chooseUser) */}
                        <p><strong>Monteur:</strong> ${order.name}</p>
                            <p><strong>Format:</strong> {order.selectedChoice}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
   
    </section>
  );
}
