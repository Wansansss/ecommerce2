/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
     },
    images:{
        remotePatterns:[
            {
                hostname: "m.media-amazon.com"    
            },
            {
                hostname: "89.116.134.204"
            },
            {
                hostname:"api.sinarlestarielektronik.com"
            },
        ]
    }
};

export default nextConfig;
