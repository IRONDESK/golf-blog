import useSWR from "swr";
import axios from "axios";
import { IMemberDataType } from "../types/MemberType";

const url = "http://13.209.34.217:8083/api/v1";

function LoginAuth(email: string, password: string) {
  return axios.post(`${url}/public/auth/login`, {
    email,
    password,
  });
}
function Logout(accessToken: string) {
  return axios.delete(`${url}/auth/logout`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

function Refresh(token: string) {
  return axios.post(`${url}/public/auth/reissue`, token);
}

function CreateMember(data: IMemberDataType) {
  return axios.post(`${url}/public/members`, data);
}

function MemberInfo(accessToken: string) {
  const fetchWithToken = (url: string, token: string | null) =>
    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data);

  const { data: AuthUser } = useSWR(
    [`${url}/members/detail`, accessToken],
    fetchWithToken
  );
  return AuthUser;
}

export { LoginAuth, Logout, Refresh, CreateMember, MemberInfo };
