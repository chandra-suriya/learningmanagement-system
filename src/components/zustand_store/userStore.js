import create from "zustand";



const userStore = create((set)=>({
        user_data: null,
        add_user_data: (newData) => set({
            user_data: newData
        }),

     remove_user_data:()=>set({
          user_data:null
     })
}));

export default userStore;