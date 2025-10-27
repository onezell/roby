#!/bin/sh
set -e

echo "Checking if admin panel needs building..."

if [ ! -d "/app/build" ]; then
    echo "Admin panel not found, building..."
    NODE_ENV=production npm run build

    if [ $? -ne 0 ]; then
        echo "Build failed, but continuing with develop mode..."
        exec npm run develop
    fi

    echo "Build completed successfully"
else
    echo "Admin panel already built, skipping build"
fi

echo "Starting Strapi in production mode..."
exec NODE_ENV=production npm run start
