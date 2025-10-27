FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev for build)
RUN npm ci

# Copy application files
COPY . .

# Build Strapi admin
# Don't set NODE_ENV during build - it breaks dependency resolution
RUN npm run build

# Remove dev dependencies after build
RUN npm prune --production

# Set NODE_ENV for runtime
ENV NODE_ENV=production

# Expose port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
