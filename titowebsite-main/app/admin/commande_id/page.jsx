"use client"
import * as React from 'react';
import { useEffect, useState } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { useSession } from 'next-auth/react';

const getMessages = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/commandes_id`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch messages");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading messages: ", error);
    return [];
  }
};

export default function Commande({ userId }) {
  const { data: session } = useSession();
  const [commandes, setCommandes] = useState([]);
  
  useEffect(() => {
    getMessages()
      .then((data) => {
        // Filtrer les commandes par email
        console.log(data);
        const filteredCommandes = data.commande.filter(
          (commande) => (
            commande.email === session?.user?.email ||
            (commande.email && commande.email === session?.user?.email)
          )
        );
        setCommandes(filteredCommandes);
      })
      .catch((error) => {
        console.error("Error fetching commandes:", error);
      });
  }, [session]);
  console.log('commandes filtrés', commandes);
  return (
    <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">
      <h1 className="text-2xl font-bold mb-4">
        Bienvenue sur la page admin {session?.user?.name}
      </h1>
      <SectionTitle
        paragraph="Vous avez accès en temps réel aux demandes des clients"
        center
        width="635px"
      />
      <div className="container px-4 mx-auto">
        <div className="shadow-md rounded my-6 p-4">
          <div className="flex flex-col">
            <p className="text-black-700">
              <strong>Email:</strong> {session?.user?.email}
            </p>
            <p className="text-black-700">
              <strong>Id:</strong> {session?.user?.id}
            </p>
            <p className="text-black-700">
              <strong>Name:</strong> {session?.user?.name}
            </p>
            <p className="text-black-700">
              <strong>Commandes:</strong>
            </p>
            <ul>
              {commandes.map((commande, index) => (
                <li key={index}>
                  <strong>ID:</strong> {commande._id}
                  <br />
                  <strong>Email:</strong> {commande.email}
                  <br />
                  <strong>Name:</strong> {commande.name}
                  <br />
                  <strong>Selected Choice:</strong>
                  <ul>
                    {commande.selectedChoice.map((choice, choiceIndex) => (
                      <li key={choiceIndex}>{choice}</li>
                    ))}
                  </ul>
                  <br />
                  <strong>Sound:</strong>
                  <ul>
                    {commande.sound.map((sound, soundIndex) => (
                      <li key={soundIndex}>{sound}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
}
