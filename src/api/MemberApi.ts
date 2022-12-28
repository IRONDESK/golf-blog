import useSWR from "swr";
import axios from "axios";

const url = "http://13.209.34.217:8083/api/v1";

export function FindMemberInfoByNickname(nickname: string) {
  const { data, error } = useSWR(`${url}/public/members?nickname=${nickname}`);
  return data;
}
