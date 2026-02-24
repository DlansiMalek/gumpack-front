import React from 'react';

const OilDrips = () => {
  const drips = [
    { left: '10%', delay: 0, duration: 18 },
    { left: '25%', delay: 3, duration: 20 },
    { left: '40%', delay: 6, duration: 17 },
    { left: '55%', delay: 2, duration: 19 },
    { left: '70%', delay: 8, duration: 16 },
    { left: '85%', delay: 5, duration: 21 },
  ];

  return (
    <>
      {drips.map((drip, index) => (
        <div
          key={index}
          className="oil-drip-container"
          style={{
            position: 'fixed',
            left: drip.left,
            top: 0,
            width: '3px',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {/* Main drip line */}
          <div
            className="oil-drip-main"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '3px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(212,175,55,0.3) 0%, rgba(201,169,97,0.4) 50%, rgba(184,150,79,0.2) 100%)',
              filter: 'blur(2px)',
              animation: `dripDown ${drip.duration}s ease-in-out infinite`,
              animationDelay: `${drip.delay}s`,
              transformOrigin: 'top',
              opacity: 0,
            }}
          />

          {/* Branch 1 - splits right */}
          <div
            className="oil-drip-branch"
            style={{
              position: 'absolute',
              top: '30%',
              left: '0',
              width: '2px',
              height: '25%',
              background: 'linear-gradient(135deg, rgba(212,175,55,0.25) 0%, rgba(201,169,97,0.3) 100%)',
              filter: 'blur(1.5px)',
              transform: 'rotate(25deg)',
              transformOrigin: 'top left',
              animation: `dripDown ${drip.duration}s ease-in-out infinite`,
              animationDelay: `${drip.delay + 2}s`,
              opacity: 0,
            }}
          />

          {/* Branch 2 - splits left */}
          <div
            className="oil-drip-branch"
            style={{
              position: 'absolute',
              top: '55%',
              left: '0',
              width: '2px',
              height: '20%',
              background: 'linear-gradient(225deg, rgba(212,175,55,0.25) 0%, rgba(184,150,79,0.3) 100%)',
              filter: 'blur(1.5px)',
              transform: 'rotate(-20deg)',
              transformOrigin: 'top left',
              animation: `dripDown ${drip.duration}s ease-in-out infinite`,
              animationDelay: `${drip.delay + 4}s`,
              opacity: 0,
            }}
          />

          {/* Droplet at bottom */}
          <div
            className="oil-droplet"
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '-2px',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(184,150,79,0.3) 100%)',
              filter: 'blur(1px)',
              animation: `dropletPulse ${drip.duration}s ease-in-out infinite`,
              animationDelay: `${drip.delay}s`,
              opacity: 0,
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes dripDown {
          0% {
            opacity: 0;
            transform: scaleY(0);
          }
          15% {
            opacity: 0.7;
            transform: scaleY(0.3);
          }
          50% {
            opacity: 0.8;
            transform: scaleY(0.7);
          }
          85% {
            opacity: 0.7;
            transform: scaleY(1);
          }
          100% {
            opacity: 0;
            transform: scaleY(1);
          }
        }

        @keyframes dropletPulse {
          0%, 70% {
            opacity: 0;
            transform: scale(0);
          }
          75% {
            opacity: 0.6;
            transform: scale(1);
          }
          85% {
            opacity: 0.8;
            transform: scale(1.2);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }
      `}</style>
    </>
  );
};

export default OilDrips;
