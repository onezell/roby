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

# Use develop mode - builds admin at runtime in correct environment
# This avoids zod/v4 build errors during Docker image creation
CMD ["npm", "run", "develop"]
