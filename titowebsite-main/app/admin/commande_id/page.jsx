"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import SectionTitle from '@/components/Common/SectionTitle';
import { useParams } from 'next/navigation';
function Commande({userId}) {
    const [commandes, setCommandes] = useState([]);
    const currentUserId = useParams();
    console.log(userId);
    const ordersData = [
        {
            id: 1,
            number: 1,
            title: 'Projet A',
            price: 500,
            status: 'En cours',
            date: '2023-10-10',
            editor: 'John Doe',
            duration: '02:30:00',
            description: 'Montage vidéo pour la publicité de produit A.',
            format: 'MP4',
            resolution: '1080p',
            fps: 30,
            sourceFilesLink: 'https://example.com/source-files1.zip',
            revisionLink: 'https://example.com/revision1.mp4',
            comments: 'Inclure la bande-son fournie.',
            desiredDeliveryDate: '2023-11-15',
            actualDeliveryDate: '2023-11-14'
        },
        {
            id: 2,
            number: 2,
            title: 'Projet B',
            price: 600,
            status: 'En cours',
            date: '2023-10-11',
            editor: 'George Abtibol',
            duration: '03:45:00',
            description: 'Montage vidéo pour le documentaire sur la nature.',
            format: 'MP4',
            resolution: '4K',
            fps: 24,
            sourceFilesLink: 'https://example.com/source-files2.zip',
            revisionLink: 'https://example.com/revision2.mp4',
            comments: 'Utiliser des transitions douces entre les scènes.',
            desiredDeliveryDate: '2023-11-20',
            actualDeliveryDate: '2023-11-18'
        },
        // ... et ainsi de suite pour les autres commandes
        {
            id: 10,
            number: 10,
            title: 'Projet J',
            price: 400,
            status: 'Terminé',
            date: '2023-10-20',
            editor: 'Sarah Connor',
            duration: '01:15:00',
            description: 'Montage vidéo pour le clip musical XYZ.',
            format: 'MP4',
            resolution: '1080p',
            fps: 60,
            sourceFilesLink: 'https://example.com/source-files10.zip',
            revisionLink: 'https://example.com/revision10.mp4',
            comments: 'Inclure des effets visuels synchronisés avec la musique.',
            desiredDeliveryDate: '2023-11-05',
            actualDeliveryDate: '2023-11-04'
        }
    ];
    


    useEffect(() => {
        async function getMessages() {
            try {
                const response = await fetch(`/api/commandes_id/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });


                const data = await response.json();
                setCommandes(data.commandes);
            } catch (error) {
                console.log(error);


}
        }
        getMessages().then(r => console.log(r));
    }, []);
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
                {ordersData.map(order => (
                    <li key='{order.id}' className="flex justify-between border p-4 rounded shadow">
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">{order.title}</h2>
                            <p>{order.description}</p>
                        </div>
                        <div className="flex-1">
                            <p><strong>Editor:</strong> {order.editor}</p>
                            <p><strong>Date:</strong> {order.date}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                        </div>
                        <div className="flex-1">
                            <p><strong>Price:</strong> ${order.price}</p>
                            <p><strong>Duration:</strong> {order.duration}</p>
                        </div>
                        <div className="flex-1">
                            <a href={order.sourceFilesLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Source Files</a>
                            <a href={order.revisionLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Revision Link</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </section>
    );

}

export default Commande;