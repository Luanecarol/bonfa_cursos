const SplitBearerToken = (value?: string) => {
  const [, token] = value?.split(' ') || [' ', ' '];
  return token;
};

export { SplitBearerToken };
