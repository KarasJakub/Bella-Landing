import React from "react"
import OfferCard from "./OfferCard/OfferCard"
import { off } from "process"

const OfferContent = [
  {
    title: "LATO ZA PÓŁ CENY",
    price: "84,50",
    description: "za pierwsze 2 miesiące umowa na 12 miesięcy",
    badges: [
      "Oszczędzasz 169zł",
      "Fitness, siłowania, SPA",
      "Opieka trenerska",
      "Bezpłatne zamrożenie 4tyg."
    ],
    color: "from-green-lime to-green-lime-light",
    destination: "https://s.przelewy24.pl/AkyZnFH7Z5kh"
  },
  {
    title: "ONEY RATY",
    price: "139",
    description: "miesięcznie na rok pierwszy miesiąc za 1 zł",
    badges: [
      "Oszczędzasz 529zł!",
      "Stała cena przez cały rok",
      "Bezpłatne zamrożenie 4tyg.",
      "Wygodne raty",
      "Fitness, siłownia, SPA + opieka"
    ],
    color: "from-blue to-blue-light",
    destination: ""
  },
  {
    title: "3 MIESIĄCE STUDENT",
    price: "357",
    description: "za 3 miesiące",
    badges: [
      "Oszczędzasz 60zł!",
      "Miesiąc za 119zł",
      "Krótkie zobowiązanie",
      "Fitness, siłownia, SPA",
      "Opieka trenerska"
    ],
    color: "from-purple to-purple-light",
    destination: "https://s.przelewy24.pl/jTjT1ty1k7t5"
  },
  {
    title: "3 MIESIĄCE STANDARD",
    price: "447",
    description: "za 3 miesiące",
    badges: [
      "Oszczędzasz 60zł!",
      "Miesiąc za 149zł",
      "Krótkie zobowiązanie",
      "Fitness, siłownia, SPA",
      "Opieka trenerska"
    ],
    color: "from-red to-red-light",
    destination: "https://s.przelewy24.pl/zLSDZ951VpMj"
  },
  {
    title: "UPFRONT STUDENT",
    price: "1155",
    description: "za cały rok",
    badges: [
      "Oszczędzasz 473zł!",
      "Gwarancja najniższej ceny",
      "Bezpłatne zamrożenie 4tyg.",
      "Fitness, siłownia, SPA",
      "Opieka trenerska"
    ],
    color: "from-pink to-pink-light",
    destination: "https://s.przelewy24.pl/d0WYWCxx9Jpw"
  },
  {
    title: "UPFRONT STANDARD",
    price: "1555",
    description: "za cały rok",
    badges: [
      "Oszczędzasz 512zł!",
      "Gwarancja najniższej ceny",
      "Bezpłatne zamrożenie 4tyg.",
      "Fitness, siłownia, SPA",
      "Opieka trenerska"
    ],
    color: "from-yellow to-yellow-light",
    destination: "https://s.przelewy24.pl/vrCH7xszJmPV"
  }
]

const Offer = () => {
  return (
    <div className="w-full bg-dark text-[#fff] flex justify-center">
      <div className="flex justify-center">
        <div className="w-full flex justify-center flex-col">
          <h2 className="text-center font-primary font-bold text-5xl md:text-8xl my-24 lg:my-36">
            Skorzystaj już dziś z naszych letnich promocji:
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-12 md:gap-6 lg:gap-12 max-w-[140rem] mb-24 lg:mb-36">
            {OfferContent.map(offer => (
              <OfferCard
                key={offer.title}
                title={offer.title}
                price={offer.price}
                description={offer.description}
                badges={offer.badges}
                destination={offer.destination}
                className={offer.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
