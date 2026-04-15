import React from 'react';
import AboutUsFeatures from '@/components/aboutus/AboutUsFeatures';

const AboutPage = () => {

  return (
    <main className="min-h-screen bg-background pt-20 pb-12">
      {/* --- Header Section --- */}
      <section className="container mx-auto px-4 text-center max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          About DentaCare
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          For over 25 years, DentaCare has been the trusted choice for families seeking 
          exceptional dental care. Our mission is to make every patient feel comfortable, informed, 
          and confident about their oral health.
        </p>
      </section>

      {/* --- Features Grid --- */}
      <section className="container mx-auto px-6 mb-20">
        <AboutUsFeatures/>
      </section>

      {/* --- Mission Section (Blue Card) --- */}
      <section className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#154B9E] to-[#2262B0] rounded-2xl p-12 md:p-20 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            To provide accessible, high-quality dental care in a warm and welcoming 
            environment. We believe every smile tells a story, and we're here to help yours shine.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;