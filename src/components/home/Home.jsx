import React from "react";
import "../home/Home.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import Button from "../button/Button";
import backgroundimage1 from "../images/backgroundimage1.jpg";
import backgroundimage2 from "../images/backgroundimage4.PNG";
import backgroundimage3 from "../images/backgroundimage2.PNG";
import png from "../images/deliveryimage5.PNG";

const Home = () => {

  return (
    <>
      {/* --------------- */}
      {/* This is a Home1 */}
      {/* --------------- */}
      <section className="Home1 pb-6">
        <Carousel
          autoPlay={true}
          emulateTouch={true}
          interval={5000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={true}
          showArrows={false}
        >
          <div>
            <div className="backgroundimage relative">
              <img src={backgroundimage1} />
            </div>
            <div className="mainheading pl-11 text-left w-[50%] absolute top-[40%]">
              <h1 className="flex font-extrabold font-display text-4xl mb-2">
                Background image
              </h1>
              <p className="text-[20px] mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                corrupti, ullam esse, consectetur explicabo maxime pariatur
                optio dignissimos fuga quos magnam.
              </p>
              <div className="button">
                <Button btnValue="Read More" bgColor="bg-black" size="w-32" />
              </div>
            </div>
          </div>
          <div className="backgroundimage">
            <img src={backgroundimage2} />
            <div className="mainheading pl-11 text-left w-[50%] absolute top-[40%]">
              <h1 className="flex font-extrabold font-display text-4xl mb-2">
                Background image
              </h1>
              <p className="text-[20px] mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                corrupti, ullam esse, consectetur explicabo maxime pariatur
                optio dignissimos fuga quos magnam.
              </p>
              <div className="button">
                <Button btnValue="Read More" bgColor="bg-black" size="w-32" />
              </div>
            </div>
          </div>
          <div className="backgroundimage">
            <img src={backgroundimage3} />
            <div className="mainheading pl-11 text-left w-[50%] absolute top-[40%]">
              <h1 className="flex font-extrabold font-display text-4xl mb-2">
                Background image
              </h1>
              <p className="text-[20px] mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                corrupti, ullam esse, consectetur explicabo maxime pariatur
                optio dignissimos fuga quos magnam.
              </p>
              <div className="button">
                <Button btnValue="Read More" bgColor="bg-black" size="w-32" />
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      {/* --------------- */}
      {/* This is a Home2 */}
      {/* --------------- */}
      {/* <section  className="Home2 py-10  flex justify-center items-center">
          <div className="flex justify-center gap-8">
            <div className="left w-[45%]">
              <img
                src={png}
                alt="Cargo Warehouse"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="right w-[45%]">
              <h2 className="text-5xl font-bold mb-4">
                About Our Cargo Services
              </h2>
              <p className="text-gray-300 leading-loose mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                urna vitae ligula tincidunt tincidunt. Nulla facilisi. Nunc
                efficitur facilisis urna, sit amet eleifend ex semper eu.
              </p>
              <p className="text-gray-300 leading-loose mb-2">
                Proin fermentum mauris non ligula laoreet, non pellentesque erat
                tincidunt. Fusce commodo, purus nec pharetra congue, felis elit
                tincidunt quam, ac scelerisque ligula ligula nec ipsum.
              </p>
              <p className="text-gray-300 leading-loose mb-2">
                Our dedicated team ensures the safe and timely delivery of your
                cargo. We take pride in our efficient services and commitment to
                customer satisfaction.
              </p>
              <p className="text-gray-300 leading-loose mb-2">
                Our dedicated team ensures the safe and timely delivery of your
                cargo. We take pride in our efficient services and commitment to
                customer satisfaction.
              </p>
              <p className="text-gray-300 leading-loose mb-2">
                Our dedicated team ensures the safe and timely delivery of your
                cargo.
              </p>
            </div>
          </div>
      </section> */}
      {/* --------------- */}
      {/* This is a Home3 */}
      {/* --------------- */}
      {/* <CountUpNumber /> */}
    </>
  );
};

export default Home;
