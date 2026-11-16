import React, { useState } from 'react';
import CustomCursor from '../CustomCursor';
import ContactModal from '../ContactModal';
import Footer from '../Footer';
import WhatsAppButton from '../WhatsAppButton';
import PortfolioHeader from './PortfolioHeader';

/*
 * Shared shell for /portfolio and /portfolio/<slug>.
 * Reuses the site's existing cursor, contact modal, footer and WhatsApp button.
 * `children` is a function that receives `openContact` so any page section
 * can open the enquiry modal.
 */
const PortfolioLayout = ({ children }) => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const openContact = () => setIsContactOpen(true);

    return (
        <>
            <CustomCursor />
            <PortfolioHeader />

            {/* Same faint vertical lines the homepage uses */}
            <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 bottom-0 left-[15%] w-[0.5px] bg-white opacity-[0.06]"></div>
                <div className="absolute top-0 bottom-0 left-[35%] w-[0.5px] bg-white opacity-[0.06]"></div>
                <div className="absolute top-0 bottom-0 left-[80%] w-[0.5px] bg-white opacity-[0.06]"></div>
            </div>

            <main className="relative z-10 min-h-screen">
                {children(openContact)}
            </main>

            <Footer />

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                selectedPlan={null}
            />

            {/* No Portfolio pill or mobile nav here, so WhatsApp sits in the corner */}
            <WhatsAppButton positionClass="bottom-6 right-5 lg:bottom-10 lg:right-10" />
        </>
    );
};

export default PortfolioLayout;
