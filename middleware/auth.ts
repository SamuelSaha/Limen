/**
 * Client-side route guard for /dashboard/** pages.
 */
export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated.value) {
    return navigateTo(`/auth/login?redirect=${encodeURIComponent(to.fullPath)}`);
  }
});
