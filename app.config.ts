import { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
    
  const extra = {
    clerkKey: process.env.CLERK_PUBLISHABLE_KEY!,
  };

  config.extra = extra;

  return config as ExpoConfig;
};