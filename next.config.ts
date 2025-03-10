const cspHeader = `
    default-src 'self';
    frame-src https://chatty-chatbot-creator-ck7w5swky-parkerarchibalds-projects.vercel.app/chatbot/11
`

module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: cspHeader.replace(/\n/g, ''),
                    },
                ],
            },
        ]
    },
}