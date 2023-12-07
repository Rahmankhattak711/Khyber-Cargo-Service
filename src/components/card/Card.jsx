import React from "react";
import '../pages/Home.css'
import Button from "./Button";

function Card({ cardHeading, cardText, cardImage }) {
  return (
    <div>
      <div className="card w-[350px] border-2 rounded-md font-display overflow-hidden border-black pb-2">
        <div className="cardimage w-[100%] overflow-hidden">{cardImage}</div>
        <div className="card-text pl-4">
          <h1 className="flex font-bold text-2xl mb-2 mt-1">{cardHeading}</h1>
          <p className="mb-2 text-lg">{cardText}</p>
        </div>
        <div className="buttons pl-4">
          <Button
            btnValue="Raed More"
            textColor="text-white"
            size="w-[128px]"
            bgColor="bg-black"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
