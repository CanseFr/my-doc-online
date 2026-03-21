# Production Deployment

Ce projet peut etre deploye automatiquement avec GitHub Actions.

Le workflow :

1. build l'image Docker de production
2. push l'image sur Docker Hub
3. se connecte au serveur via SSH
4. pull la derniere image
5. remplace le conteneur en cours
6. relance l'application avec la nouvelle version

Le workflow est defini dans `/.github/workflows/deploy.yml`.

## Ce que le workflow attend

Le job de deploiement suppose :

- un repository Docker Hub deja cree
- un serveur Linux accessible en SSH
- Docker installe sur le serveur
- un utilisateur SSH autorise a executer Docker
- une environment GitHub `production`

## Secrets GitHub a creer

Ajoute de preference ces secrets dans l'environment GitHub `production`.

### Docker Hub

- `DOCKERHUB_TOKEN`
  - token Docker Hub avec permission de push

### SSH

- `SSH_HOST`
  - IP ou nom DNS du serveur de production
- `SSH_PORT`
  - port SSH du serveur, souvent `22`
- `SSH_USER`
  - utilisateur utilise pour le deploiement
- `SSH_PRIVATE_KEY`
  - cle privee OpenSSH de l'utilisateur de deploiement
- `SSH_KNOWN_HOSTS`
  - sortie de `ssh-keyscan -H <host>`

## Variables GitHub a creer

Ajoute ces variables dans l'environment GitHub `production` ou dans les repository variables.

- `DOCKERHUB_USERNAME`
  - nom du compte ou de l'organisation Docker Hub
- `DOCKERHUB_REPOSITORY`
  - nom du repository Docker Hub, par exemple `road-map-archi`
- `PRODUCTION_CONTAINER_NAME`
  - nom du conteneur sur le serveur, par exemple `road-map-archi`
- `PRODUCTION_APP_PORT`
  - port expose sur le serveur, par exemple `80` ou `8080`

## Variable optionnelle

- `PRODUCTION_APP_URL`
  - URL publique de production, par exemple `https://roadmap.example.com`
  - utile comme metadata de documentation, mais non necessaire au workflow actuel

## Preparation du serveur

Sur le serveur de production, il faut preparer :

### 1. Docker

Installer Docker et verifier que la commande fonctionne :

```bash
docker --version
```

### 2. Utilisateur de deploiement

L'utilisateur SSH doit pouvoir lancer Docker.

Selon ton setup, cela veut dire :

- soit faire partie du groupe `docker`
- soit utiliser un mecanisme `sudo` adapte

Le workflow actuel suppose un acces direct a `docker` sans `sudo`.

### 3. Port reseau

Le port choisi dans `PRODUCTION_APP_PORT` doit etre ouvert sur le serveur et autorise par le firewall.

Exemples :

- `80` si le conteneur repond directement en HTTP
- `8080` si un reverse proxy externe gere l'entree publique

### 4. Cle SSH

Il faut :

- generer une paire de cles dediee au deploiement
- ajouter la cle publique dans `~/.ssh/authorized_keys` du serveur
- stocker la cle privee dans `SSH_PRIVATE_KEY`

Commande utile pour recuperer le host fingerprint :

```bash
ssh-keyscan -H your-server-ip
```

Le resultat doit etre enregistre dans `SSH_KNOWN_HOSTS`.

## Creation du repository Docker Hub

Tu dois creer un repository Docker Hub correspondant a :

```text
<DOCKERHUB_USERNAME>/<DOCKERHUB_REPOSITORY>
```

Exemple :

```text
mydockeruser/road-map-archi
```

Le workflow y pousse automatiquement l'image taggee :

- `latest`
- `sha-<commit>`

## Fonctionnement du deploiement

Quand un push arrive sur `main` :

1. GitHub Actions build l'image depuis le `Dockerfile`
2. l'image est poussee sur Docker Hub
3. le workflow ouvre une session SSH
4. le serveur fait `docker pull`
5. l'ancien conteneur est supprime
6. le nouveau conteneur est lance avec :

```bash
docker run -d --name <container> --restart unless-stopped -p <port>:80 <image>:latest
```

## Ce que tu dois me fournir pour finaliser sans accroc

Pour que le deploiement soit pleinement operationnel, j'ai besoin que tu prepares ou me confirmes :

- le `DOCKERHUB_USERNAME`
- le `DOCKERHUB_REPOSITORY`
- le `DOCKERHUB_TOKEN`
- l'IP ou le DNS du serveur
- le port SSH
- l'utilisateur SSH
- la cle privee SSH de deploiement
- le contenu `SSH_KNOWN_HOSTS`
- le nom du conteneur de production
- le port a exposer sur le serveur
- l'URL publique finale
- la confirmation que Docker est installe sur le serveur
- la confirmation que l'utilisateur SSH peut executer `docker`

## Recommandations de securite

- Utiliser les secrets GitHub dans une environment `production`
- Activer une approval manuelle sur l'environment `production`
- Utiliser un token Docker Hub dedie a la CI/CD
- Utiliser une cle SSH dediee au deploiement
- Utiliser un utilisateur serveur dedie au deploiement
- Ne jamais desactiver la verification `known_hosts`

## Limites actuelles

Le workflow remplace simplement le conteneur par une nouvelle version.

Il ne gere pas encore :

- reverse proxy HTTPS
- zero-downtime deployment
- rollback automatique
- healthcheck distant post-deploiement

Pour cette application statique, ce niveau de deploiement est deja propre, simple et robuste.
