/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.tennis.com"
            }
        ],
        domains: ["res.cloudinary.com"]
    }
}

module.exports = nextConfig
