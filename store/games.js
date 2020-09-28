
const games = [
    {
      title: "Killzone: Shadow Fall",
      console: "PlayStation 4",
      rating: 8.5
    },
    {
      title: "Star Wars Battlefront 2",
      console: "PlayStation 4",
      rating: 8
    },
    {
      title: "Metro: Exodus",
      console: "PlayStation 5",
      rating: 9
    },
    {
      title: "BioShock: The Collection",
      console: "PlayStation 4",
      rating: 7.5
    },
    {
      title: "Battlefield V",
      console: "PlayStation 5",
      rating: 8
    },
    {
      title: "Call of Duty: Black Ops 4",
      console: "PlayStation 4",
      rating: 9
    },
    {
      title: "Tom Clancy's Rainbow Six: Siege",
      console: "PlayStation 5",
      rating: 8
    },
    {
      title: "DOOM",
      console: "PlayStation 4",
      rating: 9.5
    }
  ];
  
  const state = () => {
    return games;
  };
  
  const mutations = {
  };
  
  const actions = {};
  
  const getters = {
    byConsole (state) {
      return (consoleName) => {
        return state.filter(({ console }) => {
          return console.toLowerCase() === consoleName.toLowerCase()
        });
      }
    },
    playstationfour(state) {
      return state.filter(({ console }) => {
        return console === 'PlayStation 4'
      });
    }
  };
  
  export default { state, mutations, actions, getters };