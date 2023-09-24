'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar'

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <main
    data-auto="home"
    className="flex min-h-screen flex-col items-center justify-between p-24"
  >
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>

    <button onClick={toggleSidebar}>toggle sidebar</button>
  </main>
  );
}
