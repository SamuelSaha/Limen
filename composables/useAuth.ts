/**
 * Auth composable — wraps Better Auth client.
 * Placeholder until Better Auth Nuxt module is configured.
 */
export function useAuth() {
  const user = useState<{ id: string; email: string; name: string } | null>(
    "auth-user",
    () => null
  );

  const isAuthenticated = computed(() => !!user.value);

  async function signIn(email: string, password: string) {
    // TODO: integrate Better Auth client SDK
    throw new Error("Not implemented — configure Better Auth");
  }

  async function signOut() {
    user.value = null;
    navigateTo("/");
  }

  return { user, isAuthenticated, signIn, signOut };
}
