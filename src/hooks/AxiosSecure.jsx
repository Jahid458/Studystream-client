import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  withCredentials: true,
});
const AxiosSecure = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in intercreptor", error);
        if (error.status === 401 || error.status === 403) {
          console.log("need to logout User!");
          handleLogout()
            .then(() => {
              console.log("LogOut user");
              navigate("/login");
            })
            .catch((err) => console.log(err));
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default AxiosSecure;
