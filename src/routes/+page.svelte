<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import { toastMessage } from "$lib/stores";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";

  let roomName: string;
</script>

<Layout>
  <div class="flex flex-col items-center w-full h-full mt-64">
    <h1 class="lg:text-4xl text-3xl text-blue-500 font-bold">
      중계 클라이언트
    </h1>
    <form
      method="POST"
      action="/"
      class="flex items-center gap-2 mt-10"
      use:enhance="{({ form, data, action, cancel, submitter }) => {
        return async ({ result }) => {
          // 방 입장 코드를 입력하지 않았다면
          if (result?.status >= 400) {
            $toastMessage = '방 입장 코드를 재입력해주세요!';
          }
          // 입력했다면 해당 방으로 이동 및 개설 완료
          else {
            const { roomName } = { ...result?.data };
            console.log(roomName);
            goto(`/${roomName}`);
          }
        };
      }}"
    >
      <input
        type="text"
        name="code"
        class="w-80 h-12 p-4 border border-gray-300 rounded"
        placeholder="방 입장 코드 입력"
      />
      <button class="p-3 h-12 w-20 bg-blue-500 font-semibold rounded text-white"
        >방 생성</button
      >
    </form>
  </div>
</Layout>
