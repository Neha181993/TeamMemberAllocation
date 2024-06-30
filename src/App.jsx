import * as React from 'react';
import './App.css';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Content from './content.jsx';
import Employees from './employee';

function App() {
  return (
    <main>
      <Header />
      <Employees />
      <Footer />
    </main>
  );
}

export default App;