export const handleOAuthLogin = (provider: 'yandex' | 'gosuslugi' | 'vk') => {
  const redirectUri = window.location.origin + '/auth/callback';

  if (provider === 'yandex') {
    const clientId = 'YOUR_YANDEX_CLIENT_ID';
    const authUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = authUrl;
  } else if (provider === 'vk') {
    const clientId = 'YOUR_VK_CLIENT_ID';
    const authUrl = `https://oauth.vk.com/authorize?client_id=${clientId}&display=page&redirect_uri=${redirectUri}&response_type=code`;
    window.location.href = authUrl;
  } else if (provider === 'gosuslugi') {
    const clientId = 'YOUR_GOSUSLUGI_CLIENT_ID';
    const authUrl = `https://www.gosuslugi.ru/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = authUrl;
  }
};
