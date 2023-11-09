import React from 'react';

const Newsletter = () => {
  return (
    <div className=" flex flex-col back2">
    <main className="container mx-auto px-6 pt-16 flex-1 text-center">

      <h2 className="text-2xl md:text-4xl lg:text-2xl text-white uppercase">Bienvenu a</h2>
      <h1 className="text-3xl text-brandOrange md:text-4xl lg:text-4xl uppercase font-black mb-8">Eureka DESIGN & Konsulting</h1>

      <p className="text-base text-white md:text-lg lg:text-2xl mb-8">Abonnez-vous à notre newsletter pour recevoir plus de ressources gratuites!</p>


      <form 
        // action="https://www.getrevue.co/profile/tyler_potts_/add_subscriber" 
        method="post" 
        id="revue-form"
        name="revue-form"
        target="_blank">

        <div className="flex flex-col md:flex-row justify-center mb-4">
          <input
            placeholder="Your email address..."
            type="email"
            name="member[email]"
            id="member_email"
            className="text-md placeholder:text-gray-400  py-4 px-6 md:px-10 md:w-[60%] lg:py-6 lg:px-18 lg:w-[50%] bg-white focus:bg-opacity-70 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
          />
          <input
            type="submit"
            value="Join Today"
            name="member[subscribe]"
            id="member_submit"
            className="bg-brandOrange md:rounded-tl-none md:rounded-bl-none rounded-full text-md py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase border-0 cursor-pointer hover:opacity-80 duration-150"
          />
        </div>

        {/* <div className="opacity-75 italic">
          By subscribing, you agree with Revue's <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
        </div> */}

      </form>
    </main>

    
  </div>	
  );
};

export default Newsletter;