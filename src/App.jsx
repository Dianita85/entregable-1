
import { useState } from 'react';
import './App.css'
import  quotes from "./data/quotes.json"
import {getRandomElement} from './utils/random'
import QuoteCard from './components/QuoteCard';




const backgrounds= ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"]

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes)) 
  const [currentImg, setCurrentImg] = useState(getRandomElement(backgrounds))

  
  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentImg(getRandomElement(backgrounds))
};
  
  return (
    <main className={`app ${currentImg}`}>
      <QuoteCard 
       quote={quote}
       handleChangeQuote={handleChangeQuote}
     />

       
    </main>
  )
}

export default App
