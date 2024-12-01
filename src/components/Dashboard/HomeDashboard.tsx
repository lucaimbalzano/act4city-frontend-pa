"use client";
import React, { useState } from "react";
import ChartThree from "../Charts/ChartThree";
import Image from 'next/image';
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import MapOne from "../Maps/MapOne";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import ChartOne from "@/components/Charts/ChartOne";
import Chat from "../Chat/Chat";
import HeaderUserPersona from "../UserPersona/Header-User-Persona";
import HeaderUserPersona12 from "../UserPersona/Header-Text-Persona-1-2";
import Link from "next/link";


/**
 * 
 * [
    "filters": {
      "eta": "18-30 anni"
      ...
    },
    "desccription": [
      {
        "title": "Titolo",
        "descritpion": "Description summary" 
      }
      ...
    ]
  ]
 * 
 */

  const data = {
    filters: {
      age: "18-60 anni",
      gender: "M and F",
      job: "Operaio",
      location: "Unknown",
      topic: "Healthcare",
    },
    summaries: [
      {
        title: "Accesso ai servizi sanitari",
        description:
          "Il 65% dei cittadini tra 18 e 60 anni ha segnalato difficoltà nell'accesso ai servizi sanitari locali.",
      },
      {
        title: "Richiesta di nuove cliniche",
        description:
          "Il 75% dei partecipanti ha richiesto l'apertura di cliniche locali per ridurre i tempi di attesa.",
      },
      {
        title: "Digitalizzazione delle prenotazioni",
        description:
          "Il 58% dei rispondenti suggerisce la digitalizzazione dei sistemi di prenotazione per maggiore efficienza.",
      },
    ],
  };

const dataStatsList = [
  {
    icon: (

        <Image
          width={55}
          height={55}
          src="/images/user/user-information.gif"
          alt="Logo"
          priority
          className="rounded-full"
        />
      

    ),
    color: "#ffffff",
    title: "Citizens Analysis",
    value: "User Persona",
  },
  {
    icon: (
      <div className="flex items-center justify-center rounded-full bg-[rgba(0,161,129,0.5)] p-2 mt-5">
          <Image
            src="/images/icon/attention.svg"
            alt="Small Icon"
            width={16}
            height={16}
          />
      </div>
    ),
    color: "#ffffff",
    title: "Disclaimer",
    value: "AI-Driven Insights for Municipal Administration",
    description: "Act4city utilizza il modello Llama 3.1 per analizzare le risposte dei cittadini, offrendo preziosi insights ai Comuni. Il sistema sintetizza i dati delle risposte aperte per migliorare decisioni e servizi pubblici."
  },
];


const Home: React.FC = () => {
  const [message, setMessage] = useState([]);
  const handlingSendMessage = (message: any) => {
    console.log('MSG:TO:SEND',message)
  }
  return (
    <div className="grid grid-cols-12 gap-4 h-full mt-5">
    <div className="col-span-12 md:col-span-5">
      <Chat conversation={ (message) => handlingSendMessage(message)}/>
    </div>
    <div className="col-span-12 md:col-span-7">
    <div className="overflow-y-auto p-4 h-full space-y-5" 
      style={{ maxHeight: '900px' }}
      >
      <HeaderUserPersona dataStatsList={dataStatsList}/>
      <HeaderUserPersona12 data={data} />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">

      </div>
      </div>
    </div>
    </div>

  );
};

export default Home;
