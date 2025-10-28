# ---- Base Stage ----
# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /usr/src/app

# ---- Dependencies Stage ----
FROM base AS dependencies

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# ---- Build Stage ----
FROM base AS build

# Copy dependencies from the previous stage
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# ---- Release Stage ----
# Use a smaller, more secure base image for the final image
FROM node:18-alpine AS release

WORKDIR /usr/src/app

# Copy built application from the build stage
COPY --from=build /usr/src/app .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]
