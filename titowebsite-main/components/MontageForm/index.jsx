"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

import { LuChefHat } from "react-icons/lu";
import { GiGamepad,GiVideoCamera,GiPublicSpeaker} from "react-icons/gi";
import {PiCameraDuotone} from "react-icons/pi";
import {MdEvent} from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js';
import {router} from "next/client";
import {CardElement} from "@stripe/react-stripe-js";


const MontageForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedChoice, setSelectedChoice] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [email, setEmail] = useState("");
  const [commentary, setCommentary] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const tito = 1;

const handleSubmit = async (e) => {
  e.preventDefault();
  const stripe = await stripePromise;
  const result = await stripe.confirmCardPayment('CLIENT_SECRET_FROM_SERVER', {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: 'Anonymous',
      },
    },
    });
    if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
    }
    else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
            console.log("success")
        }
    }
};


const submit = async (e) => {
    //envoie du formulaire sans stripe
    e.preventDefault();
    await fetch("api/commande", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            selectedChoice,
            switchValue,
            email,
            commentary,
            name,
            tito,
        }),
    }).then((res) => {
        if (res.ok) {
            router.push("/");
        }
    })
    localStorage.getItem("tarifs")



};








  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
    console.log(choice);
  };



  return (
    <section className="relative z-10 overflow-hidden pt-30 pb-16 md:pb-20 lg:pt-[70px] lg:pb-28">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
            <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
             Formulaire
            </h3>
      
      <form onSubmit={submit}>
          <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Nom</label>
                <input
                    type="text"
                    placeholder='Nom'
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder='Email'
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        


        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Format de la video</label>
          <select
             className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            value={selectedChoice}
            onChange={(e) => handleChoiceChange(e.target.value)}
          >
            <option value="">Choississez un format</option>
            <option value="Vertical (9/16)">Vertical (9/16) </option>
            <option value="Carré (1/1)<">Carré (1/1)</option>
            <option value="Paysage (19/80)">Paysage (19/80)</option>
          </select>
        </div>





       
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Votre projet</label>
            <textarea
                type="text"
                rows="7"
                placeholder='Dites nous en plus sur votre projet'
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              onChange={(e) => setCommentary(e.target.value)}
            />
        </div>


        <div className="mb-6">
              <button  className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    Passez au paiement
              </button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </section>

  );
};

export default MontageForm;
