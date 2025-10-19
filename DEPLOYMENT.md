# Attic Studio - Deployment Guide

## Architettura

Il progetto è composto da due servizi Docker:
- **Backend**: Strapi CMS (porta 1337)
- **Frontend**: Next.js (porta 3000)

## Deploy con Coolify (Raccomandato)

### Setup Iniziale

1. **Connetti il Repository**
   - In Coolify, crea una nuova risorsa
   - Tipo: `Docker Compose`
   - Connetti il tuo repository Git
   - Branch: `main`
   - Docker Compose Location: `docker-compose.yaml`

2. **Configura Variabili d'Ambiente**

   Per il Frontend, aggiungi in Coolify:
   ```
   NEXT_PUBLIC_SITE_URL=https://tuodominio.com
   NEXT_PUBLIC_STRAPI_URL=http://backend:1337
   ```

   Per il Backend, aggiungi in Coolify:
   ```
   APP_KEYS=generauna,chiave,casuale,segreta
   API_TOKEN_SALT=generaUnaSaltCasuale
   ADMIN_JWT_SECRET=generaUnSegretoJWT
   TRANSFER_TOKEN_SALT=generaUnAltroSalt
   JWT_SECRET=generaUnSegretoJWT
   ```

   **Nota**: Per generare chiavi casuali sicure, usa:
   ```bash
   openssl rand -base64 32
   ```

3. **Configura il Dominio**
   - Aggiungi il tuo dominio in Coolify
   - Abilita HTTPS/SSL automatico
   - Coolify gestirà automaticamente i certificati Let's Encrypt

4. **Deploy**
   - Clicca su "Deploy"
   - Coolify farà il build e avvierà i container automaticamente

### Deploy Automatico

Una volta configurato, ogni `git push` su `main` trigghererà automaticamente un nuovo deploy in Coolify.

## Deploy Manuale con Docker

### Requisiti
- Docker e Docker Compose installati sul server
- Git

### Procedura

1. **Clone del Repository**
   ```bash
   git clone <your-repo-url>
   cd roby
   ```

2. **Configura Variabili d'Ambiente**
   ```bash
   # Copia i file .env.example
   cp .env.example .env
   cp attic-studio-frontend/.env.example attic-studio-frontend/.env.local
   cp attic-studio-backend/.env.example attic-studio-backend/.env

   # Modifica i file .env con i tuoi valori
   nano .env
   ```

3. **Build e Avvio**
   ```bash
   docker-compose up -d --build
   ```

4. **Verifica**
   ```bash
   docker-compose ps
   docker-compose logs -f
   ```

### Aggiornamenti

Per deployare modifiche:
```bash
git pull
docker-compose down
docker-compose up -d --build
```

Per aggiornare solo il frontend:
```bash
git pull
docker-compose up -d --build frontend
```

## Test Locale con Docker

Prima del deploy in produzione, testa localmente:

```bash
# Build
docker-compose build

# Avvio
docker-compose up

# Verifica
# Frontend: http://localhost:3000
# Backend: http://localhost:1337
```

## Troubleshooting

### Il video non si carica
1. Verifica che il file esista in `attic-studio-frontend/public/videos/logo-animation.mp4`
2. Fai un rebuild completo:
   ```bash
   docker-compose down
   docker-compose build --no-cache frontend
   docker-compose up -d
   ```

### Cache del browser
Fai un hard refresh (Ctrl+Shift+R) o cancella la cache del browser.

### Logs
Controlla i log per errori:
```bash
docker-compose logs frontend
docker-compose logs backend
```

## Struttura File Video

```
attic-studio-frontend/
└── public/
    └── videos/
        └── logo-animation.mp4  <- Il video deve essere qui
```

## Backup

I dati persistenti sono salvati nei volumi Docker:
- `backend-data`: Database SQLite
- `backend-uploads`: Upload di Strapi

Per fare backup:
```bash
docker run --rm -v roby_backend-data:/data -v $(pwd):/backup alpine tar czf /backup/backend-data.tar.gz -C /data .
docker run --rm -v roby_backend-uploads:/data -v $(pwd):/backup alpine tar czf /backup/backend-uploads.tar.gz -C /data .
```

## Note Importanti

- **NEXT_PUBLIC_STRAPI_URL**: In produzione, usa il dominio interno del container (`http://backend:1337`) per comunicazione server-side
- **NEXT_PUBLIC_SITE_URL**: Il dominio pubblico del tuo sito
- **Sicurezza**: Cambia sempre le chiavi segrete di default prima del deploy in produzione
- **Database**: In produzione, considera l'uso di PostgreSQL invece di SQLite
