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
  const [message, setMessage] = useState({});
  const [response, setResponse] = useState();
  
  const fetchLambda = async (message:any) => {
    try {
      const LAMBDA_ENDPOINT = "https://4yyb2h8ufb.execute-api.eu-west-3.amazonaws.com/digital_twin";
  
      const res = await fetch(LAMBDA_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
  
      if (!res.ok) {
        console.error(`HTTP Error: ${res.status} - ${res.statusText}`);
        console.error('Response Text:', await res.text());
        return;
      }
  
      const data = await res.json();
      console.log('Lambda Response:', data?.response[0]);
      
      // Update the correct state variable
      setResponse(data?.response[0] ?? "Purtroppo non sono riuscito ad avere informazioni disponibili per questa tua");
      return data;
    } catch (error) {
      console.error('Error occurred while fetching Lambda:', error);
    }
  };
  
  const handlingSendMessage = async (messages: any) => {
    console.log('MSG:TO:SEND',messages)
    const lastContent = messages[messages.length - 1]?.content;
    if(lastContent){
      const data = await fetchLambda({ question: lastContent })
      setMessage(data);
    } else {
      console.log('Messages empty..')
    }
  }
  
  return (
    <div className="grid grid-cols-12 gap-4 h-full mt-5">
      <div className="col-span-12 md:col-span-5">
        <Chat responseMessage={response} conversation={ (message) => handlingSendMessage(message)}/>
      </div>
          <div className="col-span-12 md:col-span-7">
    <div className="overflow-y-auto p-4 h-full space-y-5" 
      style={{ maxHeight: '900px' }}
      >
      <HeaderUserPersona dataStatsList={message && Object.keys(message).length > 0 ? dataStatsList : null} />
      <HeaderUserPersona12 data={message} />
      </div>
      </div>
    </div>
  );
};

export default Home;

