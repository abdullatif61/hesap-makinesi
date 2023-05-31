import { useState } from "react";
import "./App.css";

function App() {
  const [sonuc, setSonuc] = useState(0);
  const [islem, setIslem] = useState([0]);
  const [islems, setIslems] = useState(Number);
  function temizle(){
    setIslem(0)
    setIslems(0)
    setSonuc(0)
  }

  
  function sayiyazma(gelensayi){
    
    if(islem == 0){
      setIslem(gelensayi)
      return
    }
    if(gelensayi == "+"|| gelensayi == "-" || gelensayi == "*" || gelensayi == "/"){
      if(islems==0){
        
        setIslems(islem)
        setIslem(0)
        return
      }
      else{
        setSonuc(islem + islems)
        setIslem(0)
        setIslems(0)
      }
    }
    else{
      setIslem(islem *10 + gelensayi )

    }
    

  }

  return (
    <div className="h-screen sm:w-96 w-screen flex mx-auto  sm:items-center ">
      <nav className=" bg-orange-400 w-full  h-5/6">
        <div className="py-8 px-4 w-full mb-20">
          <h1 className="text-right text-3xl mb-10">{sonuc} </h1>

          <h1 className=" text-right text-2xl"> {islems ? islems : <br /> } </h1>
          <h1 className=" text-right text-2xl"> {islem} </h1>
        </div>
        <div className="grid grid-cols-4">
          {/* butonlar */}
          <button onClick={()=>sayiyazma(1)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            1
          </button>
          <button onClick={()=>sayiyazma(2)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            2
          </button>
          <button onClick={()=>sayiyazma(3)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            3
          </button>
          <button onClick={()=>sayiyazma("+")} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            +
          </button>
        </div>
        <div className="grid grid-cols-4">
          {/* butonlar */}
          <button onClick={()=>sayiyazma(4)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            4
          </button>
          <button onClick={()=>sayiyazma(5)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            5
          </button>
          <button onClick={()=>sayiyazma(6)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            6
          </button>
          <button onClick={()=>sayiyazma("+")} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            -
          </button>
        </div>
        <div className="grid grid-cols-4">
          {/* butonlar */}
          <button onClick={()=>sayiyazma(7)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            7
          </button>
          <button onClick={()=>sayiyazma(8)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            8
          </button>
          <button onClick={()=>sayiyazma(9)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            9
          </button>
          <button onClick={()=>sayiyazma("/")} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            *
          </button>
        </div>
        <div className="grid grid-cols-4">
          {/* butonlar */}
          <button onClick={()=>sayiyazma(0)} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            0
          </button>
          <button onClick={()=>sayiyazma(".")} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            .
          </button>
          <button onClick={()=>sayiyazma("=")} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            =
          </button>
          <button onClick={()=>sayiyazma("/")} class="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            /
          </button>
        </div>
        <div className=" w-full">
        <button onClick={temizle} class="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold my-2 h-12 px-4 rounded">
            temizle
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
