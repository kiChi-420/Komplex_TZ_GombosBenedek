import { useState } from 'react'
import { useEffect } from 'react'
import '../felveteli.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import '../App.css'
import { useParams } from 'react-router-dom';

function Felvettek() {
    const {agazat} = useParams
    const [data,setData] = useState([])
    useEffect(() => {
    fetch(`http://127.0.0.1:5000/diakok/${agazat}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Nem helyes a válasz a hálózattól");
            }
            return res.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(error => console.error("Hiba:", error));
}, []);

  return (
    <>
    <div className='bg-fej'>
    <div></div>
</div>
<div>
      <div className='container-fluid row'>
            <div className='bg-torzs col-md-6'>
              <h3>Központi felvételi tájékoztató</h3>
              <p className='text-left'>A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket. </p>
              <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájékoztató oldal</a>
              <img src="./src/assets/logo.png" alt="" />
            </div>
            <div className='col-md-6'>
                <h1>Tájékoztatás</h1>
                <h3>Jószakma Szakgimnázium </h3>
              <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p>
              <img className='img-thumbnail' src="./src/assets/e-mail-marketing-2745489__340.jpg" alt="" />
            </div>
      </div>
</div>


<div className='container-fluid row'>
  <div>
      <div className='col-md-5'>
          <h3 className='text-left'>A felvettek rangsora,nyelvi előkészítő. A maximális felvehető tanulók száma 32 fő.</h3>
          <div>

          </div>
      </div>
  </div>
  <div className='col-md-7'>

    <table className='table'>
        <thead>
        <th scope="col ">Előzetes névsor:</th>
        <tr>
            <th scope="col">Tanuló neve</th>
            <th scope="col">Ágazat</th>
            <th scope="col">Összes pontszám</th>
        </tr>
        </thead>
        <tbody>
        {data.map((diak) => (    
            <tr key={diak.oktazon}>
                    <td>{diak.nev}</td>
                    <td>{diak.agazat}</td>
                    <td>{diak.osszpont}</td>
                </tr>
            ))} 
        </tbody>
    </table>
    </div>
</div>
</>
  )
}

export default Felvettek
