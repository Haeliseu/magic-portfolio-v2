# Étape base : dépendances système
FROM node:22.20.0-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app

# Étape deps : installation propre depuis lockfile
FROM base AS deps
COPY package*.json ./
RUN npm ci

# Étape builder : build Next
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Étape production : exécution
FROM node:22.20.0-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
# utilisateur non-root
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
# copy minimal pour "next start"
COPY --chown=nextjs:nodejs package*.json ./
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
USER nextjs
EXPOSE 3000
CMD ["npm", "run", "start"]
