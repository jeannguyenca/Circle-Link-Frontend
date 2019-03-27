import React from "react"


import Header from "../../components/containers/Header"
import Footer from "../../components/containers/Footer"

import Hero from "../parts/Landing/Hero"
import TwoColumnsInfo from "../parts/Landing/TwoColumnsInfo"
import ThreeColumnsInfo from "../parts/Landing/ThreeColumnsInfo"
import GetInTouch from "../parts/Landing/GetInTouch"


import cover from "../../assets/landing.jpg"
import overview from "../../assets/overview.jpg"

import barcode from "../../assets/icons/barcode.svg"
import database from "../../assets/icons/database.svg"
import lock from "../../assets/icons/lock.svg"
import visualize from "../../assets/icons/visualize.svg"


const features = [
  {
    header: "Features",
    paraDark: "CircleLink can fit in perfectly between users and business. We help the business to bring the same user back and helps users to spend their earned points in their next transaction."
  },
  [
    {
      img: { barcode },
      paraDark: "Unique and affordable loyalty program enables the small scale businesses.",
      alt: "Barcode"
    },
    {
      img: { database },
      paraDark: "Fit in the their existing customers and database.",
      alt: "Database"
    },
    {
      img: { lock },
      paraDark: "Simple yet secure authentication system that easily access by the users.",
      alt: "Lock"
    },
    {
      img: { visualize },
      paraDark: "Visualized data for business owner to get deep insight of customers’ experience.",
      alt: "Visualize"
    },
  ]
]



const Landing = props => {
    return (
      <div className="hero">
        <Header/>
        <Hero
          header="Collaborate, Evolve and Prosper"
          paraDark="We scale up your business by fitting in perfectly between consumers and your system. We will help your business to bring the same consumer back and enhance the consumer experiments. "
          button="Join now"
          img={cover}
          alt="cover"
          id="Home"
        />

        <TwoColumnsInfo
          color="#F8F8F8"
          header="Overview"
          paraDark={[
            "CircleLink is an one - stop - shop application that will provide an optimized and attractive loyalty system for medium and small businesses.", <br key="break"/>,
            "For consumers, we will provide them with a loyalty-based program where users will earn points with any valid transaction and can spend their points at the same store. "
                  ]}
          img={overview}
          alt="Overview"
          name="Overview"
          id="Overview"
        />
        <ThreeColumnsInfo id="Features" data={features}/>
        
        <GetInTouch
          header="Contact Us"
          paraDark="Let us know more about you!"
          id="ContactUs"
        />
        <Footer/>
      </div>
    )
}

export default Landing
