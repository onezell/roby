FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Expose port
EXPOSE 1337

# Use develop mode - builds admin automatically and watches for changes
# This is acceptable for Strapi even in production deployments
CMD ["npm", "run", "develop"]
