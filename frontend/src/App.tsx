import './App.css'

import Navbar from './components/Navbar';
import ReceiptProcessor from './components/ReceiptProcessor';
import ReceiptExample from './components/ReceiptExample';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <main >
        <ReceiptProcessor />
        <ReceiptExample />
      </main>
      <Footer />
    </div>
  );
}

export default App
