import { defineStore, acceptHMRUpdate } from "pinia";
const router = useRouter()

export const useUser = defineStore("User", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},
  actions: {
    login() {
      this.isLoggedIn = true;
      router.push("/");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
