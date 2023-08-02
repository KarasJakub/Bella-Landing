import React from "react"
// import ApproveIcon from "assets/CompanyIcons/approve.svg"
import OfferFirstMan from "assets/OfferPhotos/OfferFirstMan.png"
import OfferSecondMan from "assets/OfferPhotos/OfferSecondMan.png"
import OfferFirstWomen from "assets/OfferPhotos/OfferFirstWomen.png"
import OfferSecondWomen from "assets/OfferPhotos/OfferSecondWomen.png"
import PersonIcon from "assets/OfferIcons/PersonIcon.svg"
import ArrowIcon from "assets/OfferIcons/ArrowIcon.svg"
import ApproveIcon from "assets/OfferIcons/ApproveIcon.svg"
import GradientIcon from "assets/OfferIcons/GradientICon.svg"
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

// THIS CODE IS SOO DIRTY BECAUSE I HAVE TO CHANGE OFFER VERY QUICKLLY, I WILL REFACTOR IT LATER I PROMISE, FOR NOW IF YOU'RE READING THIS TRUST ME - IT WILL BY BETTER FOR YOU TO NOT READ THIS :P

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
    <div className="w-[85%] md:w-full max-w-xl md:max-w-[60rem]  mt-24">
      <div>
        <div className="w-full h-3/5 max-h-96 py-28 px-16 bg-primaryRed relative">
          <img
            src={OfferFirstMan}
            alt="Mężczyzna trzymający hantlę"
            className="absolute bottom-0 left-0 md:-left-12"
          />
          <img
            src={OfferSecondMan}
            alt="Mężczyzna"
            className="absolute bottom-0 left-56 z-10 hidden md:block"
          />
          <img
            src={OfferFirstWomen}
            alt="Kobieta"
            className="absolute bottom-0 left-96 hidden md:block"
          />
          <img
            src={OfferSecondWomen}
            alt="Kobieta trzymająca hantlę"
            className="absolute bottom-0 -right-4 md:-right-12"
          />
          <img
            src={GradientIcon}
            alt=""
            className="absolute top-36 -left-4 z-10 hidden md:block"
          />
          <img
            src={GradientIcon}
            alt=""
            className="absolute top-36 left-96 z-10 hidden md:block"
          />
          <p className="absolute bottom-0 left-48 z-[10] text-center font-primary font-semibold  text-[#EEE] text-3xl my-2 -tracking-tighter hidden md:block">
            DOROŚLI
          </p>
          <p className="absolute bottom-0 right-48 z-[10] text-center font-primary font-semibold  text-[#EEE] text-3xl my-2 -tracking-tighter hidden md:block">
            MŁODZIEŻ
          </p>
          <p className="text-center font-primary font-semibold text-textGrey text-2xl tracking-[.2rem] my-5 min-h-[4rem]">
            {description}
          </p>
        </div>
        {/* Bottom of the card */}
        <div className="w-full p-12 bg-cardSecondary flex flex-col md:flex-row gap-10 relative z-50 ">
          <div className="w-full md:w-1/2 ">
            <p className="text-center font-primary font-semibold  text-[#EEE] text-3xl mb-8 -tracking-tighter md:hidden">
              DOROŚLI
            </p>
            <div className="flex gap-5 relative">
              <div className="absolute bg-cardSecondary p-6 rounded-[2rem] left-40 top-[14%]">
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
                  <img
                    src={PersonIcon}
                    alt="Ikona człowieka"
                    className="mr-1"
                  />
                  <img
                    src={PersonIcon}
                    alt="Ikona człowieka"
                    className=" mr-4"
                  />
                  229
                  <span className="text-xl self-end">zł</span>
                </p>
              </div>
            </div>
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              za 4 tygodnie za 2 osoby*
            </p>
            <a
              href="https://s.przelewy24.pl/7gVpGkVvV1Wf"
              // className="block self-center max-w-[26rem]"
            >
              <button
                style={{
                  visibility: btnDisplay === "false" ? "hidden" : "visible"
                }}
                className="bg-primaryRed py-6 px-7 font-primary text-[#fff] font-bold text-3xl w-full max-w-[26rem] rounded-[1rem] mt-4 mb-14"
              >
                KUP TERAZ
              </button>
            </a>
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
          <div className="w-full md:w-1/2">
            <p className="text-center font-primary font-semibold  text-[#EEE] text-3xl mb-8 -tracking-tighter md:hidden">
              MŁODZIEŻ
            </p>
            <div className="flex gap-5 relative">
              <div className="absolute bg-cardSecondary p-6 rounded-[2rem] left-40 top-[14%]">
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
                  <img
                    src={PersonIcon}
                    alt="Ikona człowieka"
                    className="mr-1"
                  />
                  <img
                    src={PersonIcon}
                    alt="Ikona człowieka"
                    className=" mr-4"
                  />
                  179
                  <span className="text-xl self-end">zł</span>
                </p>
              </div>
            </div>
            <p className="text-center font-primary font-medium text-textGrey text-2xl  my-2">
              za 4 tygodnie za 2 osoby*
            </p>
            <a
              href="https://s.przelewy24.pl/L5vCgqy6WNgk"
              //  className="block self-center max-w-[26rem]"
            >
              <button
                style={{
                  visibility: btnDisplay === "false" ? "hidden" : "visible"
                }}
                className="bg-primaryRed py-6 px-7 font-primary text-[#fff] font-bold text-3xl w-full max-w-[26rem] rounded-[1rem] mt-4 mb-14"
              >
                KUP TERAZ
              </button>
            </a>
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
        <p className=" text-center font-primary font-semibold  text-[#2F3237] text-xl translate-y-12 -tracking-tighter">
          Druga osoba nie może być aktualnym klubowiczem Bella Line Wellness
          Centrum (lub nie mogła nim być w ostatnich 3 miesiącach).*
        </p>
      </div>
    </div>
  )
}

export default OfferCard
