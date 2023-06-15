import React from "react"
import OfferCard from "./OfferCard/OfferCard"

const Offer = () => {
  return (
    <div className="w-full bg-dark text-[#fff] flex justify-center">
      <div className="w-11/12 flex justify-center flex-col">
        <h2 className="text-center font-primary font-bold text-8xl my-48">
          Skorzystaj już dziś z naszych letnich promocji:
        </h2>
        <div className="w-11/12 flex justify-center">
          <OfferCard />
        </div>
      </div>
    </div>
  )
}

export default Offer
