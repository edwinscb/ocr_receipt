import './App.css'

import Navbar from './components/Navbar';
import ReceiptProcessor from './components/ReceiptProcessor';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <main >
        <ReceiptProcessor />
      </main>
      <Footer />
    </div>
  );
}

export default App
