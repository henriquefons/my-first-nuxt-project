export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = useIsLoggedIn();

  // if (!userIsAuthenticate) return abortNavigation("No valid authentication");
  if (!isLoggedIn) return navigateTo({ name: "login" });
});
