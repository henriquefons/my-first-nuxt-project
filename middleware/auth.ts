import { useUser } from "~/stores/User";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser();

  // if (!userIsAuthenticate) return abortNavigation("No valid authentication");
  if (!user.isLoggedIn) return navigateTo({ name: "login" });
});
