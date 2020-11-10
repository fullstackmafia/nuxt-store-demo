
const games = [
    {
      title: "Killzone: Shadow Fall",
      console: "PlayStation 4",
      rating: 7,
      price: 20.50,
      photo: 'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990023/220px-Killzone_Shadow_Fall_Box_srolgo.jpg'
    },
    {
      title: "Star Wars Battlefront 2",
      console: "PlayStation 4",
      rating: 7,
      price: 15.30,
      photo: 'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990005/SWBF2_box_or6x8s.jpg'
    },
    {
      title: "Metro: Exodus",
      console: "PlayStation 5",
      rating: 9,
      price: 14.10,
      photo: 'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990041/220px-Cover_Art_of_Metro_Exodus_hlxm3g.png'
    },
    {
      title: "BioShock: The Collection",
      console: "PlayStation 4",
      rating: 9,
      price: 16.00,
      photo: 'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990078/220px-BioShock-_The_Collection_tix1ol.jpg'
    },
    {
      title: "Battlefield V",
      console: "PlayStation 4",
      rating: 7,
      price: 14.50,
      photo: 'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990101/Battlefield_V_standard_edition_box_art_abcnci.jpg'
    },
    {
      title: "Call of Duty: Black Ops 4",
      console: "PlayStation 4",
      rating: 9,
      price: 11.70,
      photo: 'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990123/220px-Call_of_Duty_Black_Ops_4_official_box_art_vvhd7w.jpg'
    },
    {
      title: "Tom Clancy's Rainbow Six: Siege",
      console: "PlayStation 5",
      rating: 9,
      price: 13.90,
      photo: 'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990231/56c494ad88a7e300458b4d5a_qeyro6.jpg'
    },
    {
      title: "DOOM",
      console: "PlayStation 4",
      rating: 9,
      price: 18.90,
      photo: 'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990242/220px-Doom_cover_art_qhvg5e.jpg'
    }
  ];
  
  const state = () => {
    return games;
  };
  
  const mutations = {
  };
  
  const actions = {};
  
  const getters = {
    bestGames (state) {
        return state.filter(({ rating }) => {
          return rating === 9
        });
    },


  playstationfour(state) {
    return state.filter(({ console }) => {
      return console === 'PlayStation 4'
    });
  },

    consoleType (state) {
      return (consoleName) => {
        return state.filter(({ console }) => {
          return console === consoleName
        });
      }
    },

    cheapGames(state) {
      return state.filter(({ price }) => {
        return price === 15.30
      });
    }
  };
  
  export default { state, mutations, actions, getters };