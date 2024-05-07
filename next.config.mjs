/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "m.media-amazon.com"    
            },
            {
                hostname: "89.116.134.204"
            }
            
        ]
    }
};

export default nextConfig;
