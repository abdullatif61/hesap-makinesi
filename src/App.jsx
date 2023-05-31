import { useState } from "react";
import "./App.css";

function App() {
  const [sonuc, setSonuc] = useState(0);
  const [sayi1, setSayi] = useState(0);
  const [Sayi2, setSayi2] = useState(0);
  const [esittir, setEsittir] = useState("");

  function islemYapma(e){
    console.log(esittir);
    
    if(sayi1===0){
      return
    }
   
    if(Sayi2 === 0 ){
      setEsittir(e)
      setSayi2(sayi1)
      setSayi(0)

      return
    }
    if(e === "%"){
      setSonuc(Sayi2 % sayi1)
      setSayi(0)
      setSayi2(0)
      return

    }
    
    
    
    if(e === "+"){
      setSonuc(sayi1 + Sayi2)
      setSayi(0)
      setSayi2(0)
      return

    }
    if(e === "-"){
      setSonuc(Sayi2 - sayi1)
      setSayi(0)
      setSayi2(0)
      return

    }  if(e === "*"){
      setSonuc(sayi1 * Sayi2)
      setSayi(0)
      setSayi2(0)
      return

    }  if(e === "/"){
      setSonuc(Sayi2 / sayi1)
      setSayi(0)
      setSayi2(0)
      return

    }  
 

    

  }
  function temizle(){
    setSayi(0)
    setSayi2(0)
    setSonuc(0)
  }

  
  function sayiyazma(gelensayi){
    
    if(sayi1 === 0){
      setSayi(gelensayi)
      return
    }
  

    else{
      setSayi(sayi1 *10 + gelensayi )

    }
    

  }

  return (
    <div className="  h-screen sm:w-96 w-screen flex mx-auto sm:items-center ">
      <nav className=" bg-orange-400 w-full px-4 pb-4 sm:h-5/6 h-full rounded-lg  ">
        <div className=" px-4 py-4 my-12 w-full ">
          <h1 className="text-right text-3xl my-4">{sonuc} </h1>

          <h1 className=" text-right text-2xl"> {Sayi2 ? Sayi2 : <br /> } </h1>
          <h1 className=" text-right text-2xl"> {sayi1} </h1>
        </div>
        <div className="mt-40">
        <div className=" grid grid-cols-4">
          {/* butonlar */}
          <button onClick={()=>sayiyazma(1)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            1
          </button>
          <button onClick={()=>sayiyazma(2)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            2
          </button>
          <button onClick={()=>sayiyazma(3)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            3
          </button>
          <button onClick={()=>islemYapma("+")} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            +
          </button>
        </div>
        <div className="grid grid-cols-4">
          {/* butonlar */}
          <button onClick={()=>sayiyazma(4)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            4
          </button>
          <button onClick={()=>sayiyazma(5)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            5
          </button>
          <button onClick={()=>sayiyazma(6)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            6
          </button>
          <button onClick={()=>islemYapma("-")} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            -
          </button>
        </div>
        <div className="grid grid-cols-4">
          {/* butonlar */}
          <button onClick={()=>sayiyazma(7)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            7
          </button>
          <button onClick={()=>sayiyazma(8)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            8
          </button>
          <button onClick={()=>sayiyazma(9)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            9
          </button>
          <button onClick={()=>islemYapma("*")} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            *
          </button>
        </div>
        <div className="grid grid-cols-4">
          {/* butonlar */}
          <button onClick={()=>sayiyazma(0)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            0
          </button>
          <button onClick={()=>islemYapma("%")} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            mod
          </button>
          <button onClick={()=>islemYapma(esittir)} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            =
          </button>
          <button onClick={()=>islemYapma("/")} className="bg-blue-500   hover:bg-blue-700 text-white font-bold btn px-4 rounded">
            /
          </button>
        </div>
        <div className=" w-full  ">
        <button onClick={temizle} className="bg-blue-500 w-full   hover:bg-blue-700 text-white font-bold mt-2  h-12 px-4 rounded">
            Delete
          </button>
        </div>

        </div>
        
      </nav>
    </div>
  );
}

export default App;
