import Head from 'next/head'
import { useEffect } from 'react'
// import { useWorker } from 'react-hooks-worker'
import styles from '../styles/Home.module.css'


let worker;
// document = {}


const Home = () => {

  useEffect(
    () => {
      let output = document.getElementById('output');
      document.addEventListener('DOMContentLoaded', init);
      console.log(output)
      init()
    },
  []
  )
  function init(){
    worker = new Worker('web-work.js');
    worker.addEventListener('message', workerMessaged);
    worker.addEventListener('error', workerError);
    
    //worker.postMessage('Get Started');
    
    document.body.addEventListener('click', ()=>{
        //send another message to the worker
        //worker.postMessage('Other');
        worker.postMessage({'do':'fetch'});
    })
}

  function workerMessaged(ev){
    let data = ev.data;
    
    output.textContent += JSON.stringify(data, null, 2) + '\n';
  }

  function workerError(err){
      console.log(err.message, err.filename);
  }
  
  return (
    <div>
      <h1>Hello Web Workers</h1>
      <main>
        <pre id="output"></pre>
      </main>
    </div>
  )
}

export default Home
