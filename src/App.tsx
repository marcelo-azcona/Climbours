import React from 'react';
import MainHeader from './components/Header/MainHeader';
import AboutSection from './components/About/AboutSection';
import FeatureSection from './components/Feature/FeatureSection';
import ToursSection from './components/Tours/ToursSection';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import BookingSection from './components/Booking/BookingSection';
import FooterSection from './components/Footer/FooterSection';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainHeader />
      <main>
        <AboutSection />
        <FeatureSection />
        <ToursSection />
        <TestimonialsSection />
        <BookingSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
