/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0e1812",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        fird:"#0e1812",
        reddd:"#f45048",
        whitesh1:'#f9fbef',
        whitesh2:'#e3eeca',
        whitesh3:'#c5dfa0',
        whitesh4:'#a8d279',
        whitesh5:'#8bc54f',
        whitesh6:'##6bbe45',
        whitesh7:'#40ac48',
        whitesh8:'#2c8943',
        whitesh9:'#1a3819',
        greenish1:'#6fd027',
        greenish2:'#7ee532',
        greenish3:'#86ec36',
        greenish4:'#94f03d',
        greenish5:'#98f043',
        greenish6:'#a3f255',
        greenish7:'#aef46c',
        greenish8:'#b3f472',
        greenish9:'#b3f472',
        greenish10:'#2ec20a',
        
        
        thisa: "linear-gradient(90deg, rgba(1,15,8,1) 0%, rgba(54,97,48,1) 35%, rgba(113,189,69,1) 100%)",

        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/home/q/Downloads/progz2/notscholing/Django-Auth-And-Perms-main/web3d_2/src/assets/v.jpg')",
        "about-pattern" : "url('https://images.unsplash.com/photo-1598040795256-03d22d952f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80') " ,
        
        "hero-pattern": "url('/home/q/Downloads/progz2/notscholing/Django-Auth-And-Perms-main/web3d_2/src/assets/2.jpg')",
        // "hero-pattern": "url('/home/q/Downloads/progz2/notscholing/Django-Auth-And-Perms-main/web3d_2/src/assets/d.gif')",
      },
    },
  },
  plugins: [],
};