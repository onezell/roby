FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Try to build admin panel during image creation
# If it fails due to zod/v4 error, it will build at runtime instead
RUN NODE_ENV=production npm run build || echo "Build failed, will retry at runtime"

# Copy startup script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Expose port
EXPOSE 1337

# Use startup script - builds admin if needed, then starts Strapi
CMD ["/app/start.sh"]
