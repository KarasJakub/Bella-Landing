import ApproveIcon from "assets/CompanyIcons/approve.svg"
import OfferFirstMan from "assets/OfferPhotos/OfferFirstMan.png"
import OfferSecondMan from "assets/OfferPhotos/OfferSecondMan.png"
import OfferFirstWomen from "assets/OfferPhotos/OfferFirstWomen.png"
import OfferSecondWomen from "assets/OfferPhotos/OfferSecondWomen.png"
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
        {/* <h3 className="font-primary font-bold text-textGrey text-4xl tracking-[.2rem] text-center">
          {title}
        </h3> */}
        {/* <h4 className="text-center font-primary text-[#fff] text-8xl font-bold mt-10">
          {price}
          <span className="text-6xl">zł</span>
        </h4> */}
        <p className="text-center font-primary font-semibold text-textGrey text-2xl tracking-[.2rem] my-5 min-h-[4rem]">
          {description}
        </p>
        {/* <a href={destination} className="block self-center">
          <button
            style={{
              visibility: btnDisplay === "false" ? "hidden" : "visible"
            }}
            className={twMerge(
              "bg-gradient-to-r from-green-lime to-green-lime-light p-8 font-primary text-[#fff] font-bold text-3xl  mt-4 max-w-[15rem] rounded-[1.5rem]",
              className
            )}
          >
            KUP TERAZ
          </button>
        </a> */}
      </div>
      <div className="w-full p-12 bg-cardSecondary h-full">
        {/* {badges.map(badge => ( */}
        <div className="flex">
          <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
          <p className="text-center font-primary font-medium text-textGrey text-3xl  my-2">
            {/* {badge} */}
          </p>
        </div>
        {/* ))} */}
      </div>
    </div>
  )
}

export default OfferCard
