FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with overrides
# Using npm install instead of npm ci to apply package overrides
RUN npm install --legacy-peer-deps

# Copy application files
COPY . .

# Copy startup script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Expose port
EXPOSE 1337

# Use startup script to build admin then start Strapi
# Admin builds at container startup to avoid zod/v4 errors during image build
CMD ["/app/start.sh"]
