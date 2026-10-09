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
- Listado dinámico EN: https://localhost:3000/en
- Listado dinámico ES: https://localhost:3000/es
- Página Canvas de prueba EN: https://localhost:3000/en/test
- Página Canvas de prueba ES: https://localhost:3000/es/test

Usa las credenciales locales definidas durante `ddev install`.

## Configuración Drupal

La configuración exportable está en `drupal/config/sync`.

```bash
ddev exec drush cex -y
ddev exec drush cr
```

## Multilenguaje

Drupal queda configurado con `en` como idioma por defecto y `es` mediante el
prefijo `/es`. Las páginas Canvas son traducibles y el campo `components`
mantiene el árbol sincronizado, permitiendo traducir sus valores de entrada.

La configuración se conserva en `drupal/config/sync`, incluyendo los módulos
`language`, `content_translation`, `config_translation` y `locale`.

Para importar configuración:

```bash
ddev exec drush cim -y
ddev exec drush cr
```

## Fases 2 y 3

El frontend usa rutas localizadas con prefijo (`/en/...` y `/es/...`). El
selector de idioma consulta las traducciones disponibles de Drupal y evita
enlaces a traducciones que aún no existen.

Se han añadido dos componentes reutilizables para Canvas:

- `Drupal View`: ejecuta cualquier View/display permitido mediante
  `/api/canvas/views/{view}/{display}`.
- `Drupal Contact Form`: carga y envía formularios Drupal mediante
  `/api/canvas/contact/{form}`.

La API está implementada en el módulo custom
`canvas_headless_api`. El formulario público inicial es `feedback`.

## Fase 4

`Drupal View` puede pintar cada resultado con cualquier componente registrado en
Canvas. Además de `viewId`, `displayId`, `limit` y `title`, admite:

- `itemComponent`: machine name del componente destino, por ejemplo `card` o
  `aletheia-card`.
- `mapping`: JSON que relaciona props del componente con campos de la View. Se
  admiten rutas anidadas (`path.alias`) y descriptores tipados (`number`,
  `integer`, `boolean` y `string`).
- `staticProps`: JSON con props fijas que se aplican a cada resultado.

Ejemplo configurable desde Canvas:

```json
{
  "itemComponent": "card",
  "mapping": "{\"heading\":\"title\",\"text\":\"body\",\"link\":\"path.alias\",\"width\":{\"source\":\"width\",\"type\":\"number\"}}",
  "staticProps": "{\"variant\":\"default\"}"
}
```

El componente destino se renderiza usando el registro de componentes de Canvas,
por lo que el mismo mecanismo sirve para wrappers propios, Aletheia y futuros
componentes sin añadir lógica específica por componente.

## Comandos habituales

```bash
ddev exec drush cr
ddev exec drush status
cd frontend && npm run lint
cd frontend && npx tsc --noEmit --incremental false
```
