import { useState, useEffect } from "react"
import { selectAuth } from "../redux/slices/userSlice"

export default function useAuth(){
    if (jwtDecode(token).exp < Date.now() / 1000) {
        next(action);
        localStorage.clear();
      }
      return


}