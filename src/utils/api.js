import axios from "axios";
import { token } from './const'

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://api.example.com'
  });
  
  // Alter defaults after instance has been created
  instance.defaults.headers.common['Authorization'] = token;
  instance.defaults.headers.common['Content-Type'] = "application/json";