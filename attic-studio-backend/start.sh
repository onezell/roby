#!/bin/sh

echo "Building Strapi admin panel..."
NODE_ENV=production npm run build

echo "Starting Strapi..."
NODE_ENV=production npm run start
