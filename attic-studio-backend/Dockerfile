FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Set NODE_ENV for runtime
ENV NODE_ENV=production

# Expose port
EXPOSE 1337

# Start Strapi - will auto-build admin if needed
CMD ["npm", "run", "start"]
