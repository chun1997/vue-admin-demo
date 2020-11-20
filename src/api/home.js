import { request } from "./request";

export function getHomeData(data) {
  return request({
    url: "" + data,
  });
}
