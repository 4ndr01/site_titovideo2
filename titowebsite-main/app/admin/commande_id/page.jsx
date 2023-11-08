"use client"
import * as React from 'react';
import { useEffect, useState } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { useSession } from 'next-auth/react';

const getMessages = async (userEmail) => {
    try {
        const res = await fetch(`http://localhost:3000/api/commandes_id?email=${encodeURIComponent(userEmail)}`, {
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
    if (session?.user?.email) {
      getMessages(session.user.email)
        .then((data) => {
          setCommandes(data.commande);
        })
        .catch((error) => {
          console.error("Error fetching commandes:", error);
        });
    }
  }, [session]);

  return (
    <section id="portfolio" className="relative z-10 py-4 md:py-5 lg:py-7">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">
            Bienvenue sur la page admin {session?.user?.name}
          </h1>
          <SectionTitle
            paragraph="Vous avez accès en temps réel aux demandes des clients"
            center
            width="full"
          />
        </div>

        <div className="flex flex-col items-center shadow-lg rounded-lg my-6 p-4">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <div className="flex flex-col space-y-4 mb-4">
              <p className="text-gray-700">
                <span className="font-bold">Email:</span> {session?.user?.email}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Id:</span> {session?.user?.id}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Name:</span> {session?.user?.name}
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="text-gray-700 font-bold">Commandes:</span>
              {commandes?.map((commande, index) => (
                <div key={index} className=" p-3 rounded shadow">
                  <p className="font-bold">ID:</p> {commande._id}
                  <p className="font-bold">Email:</p> {commande.email}
                  <p className="font-bold">Name:</p> {commande.name}
                  <div>
                    <p className="font-bold">Selected Choice:</p>
                    <ul className="list-disc pl-5">
                      {commande.selectedChoice.map((choice, choiceIndex) => (
                        <li key={choiceIndex}>{choice}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">Sound:</p>
                    <ul className="list-disc pl-5">
                      {commande.sound.map((sound, soundIndex) => (
                        <li key={soundIndex}>{sound}</li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
