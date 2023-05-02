import { io } from "socket.io-client";
import { SIGNALING_SERVER } from "$lib/constants";
import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const code = data.get("code");

    // 입력된 정보가 없다면 오류 반환
    if (code === null || code === undefined || code === "")
      return fail(400, { msg: "invalid roomName" });

    // 있다면 방을 개설하고 방으로 입장. 200 반환
    const socket = io(SIGNALING_SERVER);
    socket.emit("build", code);
    return { success: true, roomName: code };
  },
};
