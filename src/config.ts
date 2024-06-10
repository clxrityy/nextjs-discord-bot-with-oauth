export const CONFIG = {
    REDIRECT_URI: process.env.NODE_ENV === 'production' ? 'https://www.example.com/api/auth/discord/redirect' : 'http://localhost:3000/api/auth/discord/redirect',
    OAUTH2_TOKEN: 'https://discord.com/api/v10/oauth2/token',
    OAUTH2_USER: 'https://discord.com/api/v10/users/@me',
    OAUTH2_REVOKE_TOKEN: 'https://discord.com/api/v10/oauth2/token/revoke',
    OAUTH2_INVITE_URL: process.env.NODE_ENV === "production" ? "" : "https://discord.com/oauth2/authorize?client_id=1237210318464352266&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=identify+guilds",
    COOKIE_NAME: process.env.COOKIE_NAME! || 'discord-session',
    BASE_URL: process.env.NODE_ENV === 'production' ? 'https://www.example.com' : 'http://localhost:3000'
    
}