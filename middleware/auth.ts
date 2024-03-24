export default defineNuxtRouteMiddleware((to, from) => {
  const userIsAuthenticate = false;
  // if (!userIsAuthenticate) return abortNavigation("No valid authentication");
  if (!userIsAuthenticate) return navigateTo({ name: "login" });
});
