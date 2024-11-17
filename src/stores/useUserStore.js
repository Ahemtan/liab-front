import { create } from "zustand";
import axios from "../lib/axios";
import { handleApiError } from "../lib/errorHandler";

import { toast } from "react-hot-toast";

export const useUserStore = create((set, get) => ({

  user: null,
  loading: false,
  checkingAuth: true,

  signup: async (name, email, password, password_confirmation) => {
    set({ loading: true });

    console.log(name, email, password, password_confirmation);

    if (password !== password_confirmation) {
      set({ loading: false });
      return alert("Password dosent match!!!!!!!");
    }

    try {
      const res = await axios.post("/users", {
        name,
        email,
        password,
        password_confirmation,
      });
      set({ user: res.data, loading: false });
    } catch (error) {
      set({ loading: false });
      const { message, statusCode } = handleApiError(error);
      alert(message);
    }
  },

  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post("/users/login", { email, password });
      set({ user: res.data, loading: false });

      toast.success("Login successful");

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      
     } catch (error) {
      set({ loading: false });
      const { message, statusCode } = handleApiError(error);

      toast.error(message);
    }
  },

  checkAuth: async () => { 
    set({ checkingAuth: true });
    try {
      const res = await axios.get("/users/me");
      set({ user: res.data.user, checkingAuth: false });
    } catch (error) {
      set({ checkingAuth: false, user: null });
      const { message, statusCode } = handleApiError(error);
    }
  },

  logout: async () => {
    try {
      await axios.post("/users/logout");
      set({ user: null });
    } catch (error) {
      toast.error("Something went wrong");
    }    
  }

}));
