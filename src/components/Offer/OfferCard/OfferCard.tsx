import React from "react"
import ApproveIcon from "assets/CompanyIcons/approve.svg"

interface Props {
  title: string
  price: string
  description: string
  badges: string[]
}

const OfferCard = ({ title, price, description, badges }: Props) => {
  return (
    <div className="w-full max-w-xl h-full max-h-[80rem] rounded-full">
      <div className="w-full h-3/5 py-28 px-20 bg-cardPrimary flex flex-col justify-center">
        <h3 className="font-primary font-bold text-textGrey text-4xl tracking-[.2rem]">
          {title}
        </h3>
        <h4 className="text-center font-primary text-[#fff] text-8xl font-bold mt-10">
          {price}
          <span className="text-6xl">zł</span>
        </h4>
        <p className="text-center font-primary font-medium text-textGrey text-2xl tracking-[.2rem] my-6">
          {description}
        </p>
        <button className="bg-[green] p-7 font-primary text-[#fff] font-bold text-3xl rounded-full mt-4 max-w-[15rem] self-center">
          KUP TERAZ
        </button>
      </div>
      <div className="w-full p-12 bg-cardSecondary">
        {badges.map(badge => (
          <div className="flex">
            <img src={ApproveIcon} alt="" className="max-w-[2rem] mr-5" />
            <p className="text-center font-primary font-medium text-textGrey text-3xl  my-2">
              {badge}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfferCard
