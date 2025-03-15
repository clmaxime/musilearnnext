# Musilearn

Musilearn est une application web qui permet aux élèves et aux professeurs de consulter leurs cours et d'accéder à des fonctionnalités du centre de formation

## Prérequis

Vous avez besoin de ces composants avant de continuer :

- [Node.js](https://nodejs.org/) (v16+)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)

## Cloner le projet

Clonez le dépôt Git :

```bash
git clone https://github.com/clmaxime/musilearn_next.git
```

Accédez au dossier du projet :

```bash
cd next_tp
```

## Installation des dépendances

Installez les dépendances:

```bash
pnpm install
```

## Configuration de l'environnement

Créez un fichier .env avec les données suivantes

```env
# Recommended for most uses
DATABASE_URL=postgres://neondb_owner:npg_VdG2KSBvWo9r@ep-steep-scene-a2cpmzq9-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_VdG2KSBvWo9r@ep-steep-scene-a2cpmzq9.eu-central-1.aws.neon.tech/neondb?sslmode=require

# Parameters for constructing your own connection string
PGHOST=ep-steep-scene-a2cpmzq9-pooler.eu-central-1.aws.neon.tech
PGHOST_UNPOOLED=ep-steep-scene-a2cpmzq9.eu-central-1.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=npg_VdG2KSBvWo9r

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://neondb_owner:npg_VdG2KSBvWo9r@ep-steep-scene-a2cpmzq9-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://neondb_owner:npg_VdG2KSBvWo9r@ep-steep-scene-a2cpmzq9.eu-central-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-steep-scene-a2cpmzq9-pooler.eu-central-1.aws.neon.tech
POSTGRES_PASSWORD=npg_VdG2KSBvWo9r
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:npg_VdG2KSBvWo9r@ep-steep-scene-a2cpmzq9-pooler.eu-central-1.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:npg_VdG2KSBvWo9r@ep-steep-scene-a2cpmzq9-pooler.eu-central-1.aws.neon.tech/neondb?pgbouncer=true&connect_timeout=15&sslmode=require
```

## Lancer le projet

Lancez l'app :

```bash
pnpm run dev
```

L'application se lancera à :

```
http://localhost:3000
```

### Utilisation

## Connexion

Identifiants :

- **Email** : `user@nextmail.com`
- **Mot de passe** : `123456`

## Scripts utiles

- **Démarrer le projet** :
  ```bash
  pnpm run dev
  ```
- **Générer le build** :
  ```bash
  pnpm run build
  ```
