const initialState = {
    data: [
      { id: 1, name: "Pemantauan Banjir Semarang" },
      { id: 2, name: "Pemantauan Banjir Jakarta" },
      { id: 3, name: "Pemantauan Banjir Bandung" },
      { id: 4, name: "Pemantauan Banjir dan Bencana alam Surabaya" },
      { id: 5, name: "Pemantauan Cuaca dan Iklim" }
    ],
    loading: false,
    error: null,
  };
  
  const pemantauanReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default pemantauanReducer;