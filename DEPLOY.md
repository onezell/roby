# Attic Studio - Guida al Deploy su Coolify

## Prerequisiti
- Account Coolify configurato
- Repository Git collegato a Coolify

## Struttura del Progetto

```
attic-studio/
├── attic-studio-backend/     # Strapi CMS (Node.js)
├── attic-studio-frontend/    # Next.js App (TypeScript)
├── docker-compose.yml        # Orchestrazione dei servizi
└── .gitignore               # File ignorati da Git
```

## Configurazione Coolify

### 1. Collegare il Repository
1. Accedi a Coolify
2. Crea un nuovo progetto
3. Seleziona "Docker Compose" come tipo di applicazione
4. Collega il tuo repository Git

### 2. Variabili d'Ambiente

#### Backend (Strapi)
```env
NODE_ENV=production
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
APP_KEYS=<genera-chiavi-casuali>
API_TOKEN_SALT=<genera-salt-casuale>
ADMIN_JWT_SECRET=<genera-secret-casuale>
JWT_SECRET=<genera-secret-casuale>
```

#### Frontend (Next.js)
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.tuodominio.com
```

### 3. Porte
- **Frontend**: 3000
- **Backend**: 1337

### 4. Volumi Persistenti
Coolify gestirà automaticamente i volumi definiti in docker-compose.yml:
- `backend-data`: Database SQLite
- `backend-uploads`: File caricati su Strapi

## Deploy

1. Push del codice su Git:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. In Coolify:
   - Il deploy partirà automaticamente
   - Monitora i log per verificare il build
   - Una volta completato, i servizi saranno disponibili

## Comandi Utili

### Sviluppo Locale
```bash
# Backend
cd attic-studio-backend
npm run develop

# Frontend
cd attic-studio-frontend
npm run dev
```

### Docker Compose Locale
```bash
# Avvia tutti i servizi
docker-compose up -d

# Ferma i servizi
docker-compose down

# Rebuild e avvio
docker-compose up --build
```

## Note Importanti

1. **Primo Accesso Strapi**: Dopo il primo deploy, accedi a `https://api.tuodominio.com/admin` per creare l'utente admin
2. **Database**: SQLite è adatto per sviluppo, considera PostgreSQL per produzione
3. **Sicurezza**: Genera chiavi casuali per le variabili d'ambiente di Strapi
4. **Domini**: Configura i domini in Coolify per frontend e backend

## Troubleshooting

- **Build fallito**: Controlla i log di Coolify
- **Database non persiste**: Verifica che i volumi siano configurati correttamente
- **Problemi di connessione**: Verifica le variabili d'ambiente e la rete Docker
