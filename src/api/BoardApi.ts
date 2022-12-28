import useSWR from "swr";
import axios from "axios";

interface CreatePostTypes {
  title: string;
  content: string;
}

const url = "http://13.209.34.217:8083/api/v1";

export function FindAll() {
  const { data } = useSWR(`${url}/public/boards`);
  return data;
}

export function FindByBoardId(boardId: string) {
  const { data } = useSWR(`${url}/public/boards/id/${boardId}`);
  return data;
}

export function FindBlogByNickname(nickname: string) {
  const { data } = useSWR(`${url}/public/boards/${nickname}`);
  return data;
}

export function CreatePost({
  token,
  data,
}: {
  token: string;
  data: CreatePostTypes;
}) {
  return axios.post(`${url}/boards`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
