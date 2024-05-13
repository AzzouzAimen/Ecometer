

function Forgetpassword() {
  

  
  return (
    <div className="realtive font-['Inter']">
      <img
        src="/Vector2.svg"
        className="absolute max-w-full w-[100%]"
        alt="SVG Image"
      ></img>
      <div className="absolute w-full h-full  ">
        <div className="  mx-auto mt-[22vh]    w-[30%] h-[56%]  bg-[white]  rounded-[15px] shadow-[0px_0px_30px_-15px]">
          <div className="text-center text-neutral-800 w-full h-[20%] text-[4.8vh] font-bold font-['Eudoxus Sans'] pt-[4vh]">
            Mot de passe oublié
          </div>
          <div className="text-center text-neutral-800 w-[80%] mx-auto  h-[25%] text-[2.2vh] font-bold font-['Eudoxus Sans'] pt-[4vh]">
            Veuillez entrer votre adresse e-mail pour recevoir un code à 4
            chiffres.
          </div>
          {/* formulaire  */}
          <form className=" " action="#" method="POST">
            <div className="mx-auto w-[84%] h-[8vh] mb-[3vh]  px-5  rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
              <div className="  flex-col  justify-center  items-start flex">
                <div className=" w-[50%] text-neutral-500  leading-none font-sans   text-[1.9vh] font-normal  ">
                  Email d’utilisateur
                </div>

                <div className="w-[60vh]  justify-start items-center inline-flex">
                  <div className="text-neutral-500  font-normal  ">
                    <input
                      className="text-[2.6vh]  font-sans  focus:border-none focus:outline-none "
                      type="email"
                      name="emailverification"
                      placeholder="exemple@domain.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className=" mt-[4vh] w-full">
              <div className="w-[84%] h-[8vh]  hover:bg-[#023559] duration-[0.3s]   hover:rounded-[1.8vh]   bg-[#003049] rounded-[2vh] justify-center items-center gap-2.5 inline-flex">
                <div className=" text-center text-white text-[3vh]  font-['Inter sans'] ">
                  Continuer
                </div>
              </div>
            </button>
            <a href="/verf">aaa</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgetpassword;
