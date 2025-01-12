const initialState = {
    data: [
      { id: 1, name: "Penyuluhan Bencana Alam" },
      { id: 2, name: "Penyuluhan Banjir" },
      { id: 3, name: "Penyuluhan Mitigasi Bencana Banjir di Sekolah" },
      { id: 4, name: "Penyuluhan di Komunitas Terdampak Banjir" }
    ],
    loading: false,
    error: null,
  };
  
  const penyuluhanReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default penyuluhanReducer;