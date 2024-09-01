module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '330px',
        'sm' : '550px',
        'md' : '850px',
        '2md' : '1024px', 
        'xl': '1150px', //
        
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
       animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        spin : "rotate 1.5s linear infinite ",
        spin_r : "spin_reverse 2s linear infinite"
        
      },
      backgroundImage: {
        
        'radial-mask': 'radial-gradient(ellipse at center, transparent 20%, black)',
      },
      keyframes: {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },

        spin_reverse : {
          '0%' : {
            transform: 'rotate(0deg)'
          },
          '100%'  :{
            transform:" rotate(-360deg)"
          }
        },
        
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.mask-radial': {
          'mask-image': 'radial-gradient(ellipse at center, transparent 20%, black)',
        },
      });
    }
  ],
};
