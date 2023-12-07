import React, { useState } from "react";
import '../pages/Home.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CountUpNumber() {
  const [ count, setCount ] = useState(false);
  return (
    <ScrollTrigger className='flex justify-around bg-black items-center flex-wrap'
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <div className="HappyCustomer h-[150px] flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Our Happy Customer</h1>
        <div className="text-2xl font-bold">
        {count && <CountUp start={0} end={2000} duration={5} />}
        +
        </div>
      </div>

      <div className="HappyCustomer h-[150px] flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Repeat Customer</h1>
        <div className="text-2xl font-bold">
        {count && <CountUp start={0} end={800} duration={5} />}
        +
        </div>
      </div>

      <div className="HappyCustomer h-[150px] flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Shipments</h1>
        <div className="text-2xl font-bold">
        {count && <CountUp start={0} end={250} duration={5} />}
        +
        </div>
      </div>

      <div className="HappyCustomer h-[150px] flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Worker</h1>
        <div className="text-2xl font-bold">
        {count && <CountUp start={0} end={10} duration={5} />}
        +
        </div>
      </div>

    </ScrollTrigger>
  );
}

export default CountUpNumber;
