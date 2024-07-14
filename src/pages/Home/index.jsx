import React from 'react';
import Navbar from '../../components/Navbar';
import MainContent from '../../components/MainContent';
import Tittle from '../../components/Title';
import BrandHome from '../../components/BrandHome';
import NikeBrand from '../../components/NikeBrand';
import ConverseBrand from '../../components/ConverseBrand';
import Testimoni from '../../components/Testimoni';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tittle />
      <BrandHome />
      <MainContent />
      <NikeBrand />
      <ConverseBrand />
      <Testimoni />
      <Footer />
    </div>
  );
}
