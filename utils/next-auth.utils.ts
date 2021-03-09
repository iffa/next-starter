import { getProviders, SessionProvider } from 'next-auth/client';

export async function getOauthProviders(): Promise<SessionProvider[]> {
  return await getProviders()
    .then((providers) => {
      return Object.keys(providers).map((key) => providers[key]);
    })
    .then((providers) => {
      return providers.filter((provider) => provider.type === 'oauth');
    });
}
