import React from 'react';
import Image from 'next/image';

const clients = [
  {
    name: 'Algo Vision',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8-rapidxai-com/assets/icons/Algo-Vision-Logo-1-2.png?',
  },
  {
    name: 'Uplload',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8-rapidxai-com/assets/icons/download-7-3.png?',
  },
  {
    name: 'Renvale',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8-rapidxai-com/assets/icons/logo-ce6bde16-0254-4627-980d-0d0cea0103d9-4.jpg?',
  },
  {
    name: 'Jivam',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8-rapidxai-com/assets/icons/Logo-2-5.png?',
  },
  {
    name: 'Aanitechnology',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8-rapidxai-com/assets/icons/logo-black-6.png?',
  },
  {
    name: 'Moko',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8-rapidxai-com/assets/images/Moko-White-transparent-background-10.webp?',
  },
  {
    name: 'Varhity Ventures',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8-rapidxai-com/assets/icons/Varhity-Ventures-100-copy-Transparent-2-7.png?',
  },
  {
    name: 'Beliger Shore',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8-rapidxai-com/assets/icons/Whats-App-Image-2025-08-26-at-06-36-04-8.jpg?',
  },
];

const ClientsShowcaseSection = () => {
    const logos = [...clients, ...clients, ...clients];

    return (
        <section className="relative bg-black py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950"></div>
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center mb-16">
                    <div className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-white/20">
                        TRUSTED BY
                    </div>
                    <h2 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
                        Who We've Worked With
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Founders and teams who chose automation over hiring
                    </p>
                </div>

                <div
                    className="relative w-full overflow-hidden"
                    style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}
                >
                    <div className="flex animate-scroll">
                        {logos.map((client, index) => (
                            <div key={index} className="group relative flex-shrink-0 mx-4">
                                <div className="relative w-48 h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-lg">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={160}
                                        height={64}
                                        className="relative max-h-12 w-auto object-contain filter grayscale brightness-0 invert group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-16 text-center text-gray-500 italic">
                    From startups to enterprises, we've helped teams automate their way to growth
                </p>
            </div>
        </section>
    );
};

export default ClientsShowcaseSection;