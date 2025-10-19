FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Build Strapi admin
ENV NODE_ENV=production
RUN npm run build || echo "No build script found"

# Expose port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
