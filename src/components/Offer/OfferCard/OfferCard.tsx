import React from "react"

const OfferCard = () => {
  return (
    <div className="w-full max-w-xl h-full max-h-[80rem] rounded-full">
      <div className="w-full h-3/5 py-28 px-24 bg-cardPrimary">
        <h3>LATO ZA PÓŁ CENY</h3>
        <h4>84,50zł</h4>
        <p>za pierwsze 2 miesiące umowa na 12 miesięcy</p>
        <button>KUP TERAZ</button>
      </div>
      <div className="w-full p-24"></div>
    </div>
  )
}

export default OfferCard
