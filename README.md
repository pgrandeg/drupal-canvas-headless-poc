# Drupal Canvas Headless · NTT DATA Spain

## Arranque

Desde la raíz del repositorio:

```bash
ddev start
ddev composer install
ddev install
ddev exec drush en jsonapi -y
ddev exec drush cr
```

En otra terminal:

```bash
cd frontend
npm ci
cp .env.example .env
mkdir -p certificates
openssl req -x509 -newkey rsa:2048 -nodes -keyout certificates/localhost-key.pem -out certificates/localhost.pem -days 365 -subj '/CN=localhost' -addext 'subjectAltName=DNS:localhost,IP:127.0.0.1,IP:::1'
npm run dev
```

Acepta el certificado local entrando una vez en `https://localhost:3000`.

## Configuración de Canvas

En Drupal, abre `http://drupalcanvasheadless.ddev.site/canvas`.

Registra este frontend, sin `/` final:

```text
https://localhost:3000
```

Después sincroniza los componentes desde **Headless frontends**.

Si Canvas conserva la URL antigua del frontend, ejecuta en la consola del navegador estando en Drupal:

```js
localStorage.removeItem('canvas-headless-active-frontend'); location.reload();
```

## URLs de prueba

- Drupal: http://drupalcanvasheadless.ddev.site
- Login Drupal: http://drupalcanvasheadless.ddev.site/user/login
- Editor Canvas: http://drupalcanvasheadless.ddev.site/canvas
- Frontend: https://localhost:3000
- Listado dinámico: https://localhost:3000/
- Página Canvas de prueba: https://localhost:3000/test

Usa las credenciales locales definidas durante `ddev install`.

## Configuración Drupal

La configuración exportable está en `drupal/config/sync`.

```bash
ddev exec drush cex -y
ddev exec drush cr
```

Para importar configuración:

```bash
ddev exec drush cim -y
ddev exec drush cr
```

## Comandos habituales

```bash
ddev exec drush cr
ddev exec drush status
cd frontend && npm run lint
cd frontend && npx tsc --noEmit --incremental false
```
