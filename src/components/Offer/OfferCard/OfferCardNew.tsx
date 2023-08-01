import React from "react"
// import ApproveIcon from "assets/CompanyIcons/approve.svg"
import OfferFirstMan from "assets/OfferPhotos/OfferFirstMan.png"
import OfferSecondMan from "assets/OfferPhotos/OfferSecondMan.png"
import OfferFirstWomen from "assets/OfferPhotos/OfferFirstWomen.png"
import OfferSecondWomen from "assets/OfferPhotos/OfferSecondWomen.png"
import PersonIcon from "assets/OfferIcons/PersonIcon.svg"
import ArrowIcon from "assets/OfferIcons/ArrowIcon.svg"
import ApproveIcon from "assets/OfferIcons/ApproveIcon.svg"
import { twMerge } from "tailwind-merge"

interface Props {
  title: string
  price: string
  description: string
  badges: string[]
  className: string
  destination: string
  btnDisplay: string
}

const OfferContent = [
  {
    priceBefore: "458",
    priceAfter: "229",
    destination: "/",
    badges: [
      "Oszczędzasz 229 zł",
      "Fitness, siłowania",
      "Opieka trenerska",
      "Strefa SPA"
    ]
  },
  {
    priceBefore: "358",
    priceAfter: "179",
    destination: "/",
    badges: [
      "Oszczędzasz 179 zł",
      "Fitness, siłowania",
      "Opieka trenerska",
      "Strefa SPA"
    ]
  }
]

const OfferCard = ({
  title,
  price,
  description,
  badges,
  className = "",
  destination,
  btnDisplay
}: Props) => {
  return (
    // shadow-md shadow-top-bottom-green bg-gray-300
    <div className="w-11/12 md:w-full max-w-[60rem] h-[60rem]">
      <div className="w-full h-3/5 max-h-96 py-28 px-16 bg-primaryRed relative">
        <img
          src={OfferFirstMan}
          alt="Mężczyzna trzymający hantlę"
          className="absolute bottom-0 -left-12"
        />
        <img
          src={OfferSecondMan}
          alt="Mężczyzna"
          className="absolute bottom-0 left-56 z-10"
        />
        <img
          src={OfferFirstWomen}
          alt="Kobieta"
          className="absolute bottom-0 left-96"
        />
        <img
          src={OfferSecondWomen}
          alt="Kobieta trzymająca hantlę"
          className="absolute bottom-0 -right-12"
        />
        <p className="text-center font-primary font-semibold text-textGrey text-2xl tracking-[.2rem] my-5 min-h-[4rem]">
          {description}
        </p>
      </div>
      {/* Bottom of the card */}
      <div className="w-full p-12 bg-cardSecondary flex gap-10">
        <div className="w-1/2">
          <div className="flex gap-5 relative">
            <div className="absolute bg-cardSecondary p-6 rounded-[2rem] left-[37%] top-[14%]">
              <img src={ArrowIcon} alt="Ikona strzałki" />
            </div>
            <div className="bg-cardPrimary px-10 py-6 rounded-[1rem] mb-6">
              <p className="text-center font-primary font-bold  text-[#EEE] text-5xl my-2 ">
                458
                <span className="text-xl">zł</span>
              </p>
            </div>
            <div className="bg-cardPrimary px-10 py-6 rounded-[1rem] mb-6">
              <p className="text-center font-primary font-bold text-primaryRed text-5xl my-2 flex">
                <img src={PersonIcon} alt="Ikona człowieka" className="mr-1" />
                <img src={PersonIcon} alt="Ikona człowieka" className=" mr-4" />
                256
                <span className="text-xl self-end">zł</span>
              </p>
            </div>
          </div>
          <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
            za 4 tygodnie za 2 osoby*
          </p>
          {/* <a href={destination} className="block self-center max-w-[26rem]"> */}
          <button
            style={{
              visibility: btnDisplay === "false" ? "hidden" : "visible"
            }}
            className="bg-primaryRed py-6 px-7 font-primary text-[#fff] font-bold text-3xl w-full max-w-[26rem] rounded-[1rem] mt-4 mb-14"
          >
            KUP TERAZ
          </button>
          {/* </a> */}
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              Oszczędzasz 229 zł
            </p>
          </div>
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              Fitness, siłownia
            </p>
          </div>
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              Opieka trenerska
            </p>
          </div>
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              Strefa SPA
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex gap-5 relative">
            <div className="absolute bg-cardSecondary p-6 rounded-[2rem] left-[37%] top-[14%]">
              <img src={ArrowIcon} alt="Ikona strzałki" />
            </div>
            <div className="bg-cardPrimary px-10 py-6 rounded-[1rem] mb-6">
              <p className="text-center font-primary font-bold  text-[#EEE] text-5xl my-2 ">
                358
                <span className="text-xl">zł</span>
              </p>
            </div>
            <div className="bg-cardPrimary px-10 py-6 rounded-[1rem] mb-6">
              <p className="text-center font-primary font-bold text-primaryRed text-5xl my-2 flex">
                <img src={PersonIcon} alt="Ikona człowieka" className="mr-1" />
                <img src={PersonIcon} alt="Ikona człowieka" className=" mr-4" />
                179
                <span className="text-xl self-end">zł</span>
              </p>
            </div>
          </div>
          <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
            za 4 tygodnie za 2 osoby*
          </p>
          {/* <a href={destination} className="block self-center max-w-[26rem]"> */}
          <button
            style={{
              visibility: btnDisplay === "false" ? "hidden" : "visible"
            }}
            className="bg-primaryRed py-6 px-7 font-primary text-[#fff] font-bold text-3xl w-full max-w-[26rem] rounded-[1rem] mt-4 mb-14"
          >
            KUP TERAZ
          </button>
          {/* </a> */}
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              Oszczędzasz 229 zł
            </p>
          </div>
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              Fitness, siłownia
            </p>
          </div>
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              Opieka trenerska
            </p>
          </div>
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              Strefa SPA
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCard
