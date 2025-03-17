import instance from "@/libs/axios/axios";
import endpoint from "./endpoint.constant";
import { IActivation, ILogin, IRegister } from "@/types/Auth";

const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),

  activation: (payload: IActivation) =>
    instance.post(`${endpoint.AUTH}/activation`, payload),

  login: (payload: ILogin) => instance.post(`${endpoint.AUTH}/login`, payload),

  getProfileWithToken: (token: string) =>
    instance.get(`${endpoint.AUTH}/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default authServices;
