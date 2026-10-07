# Drupal Canvas Headless

A decoupled Drupal Canvas starter with two independent projects:

- `drupal/`: Drupal 11.4 with Drupal Canvas 1.12 and the `canvas_headless` submodule.
- `frontend/`: the official Next.js Canvas Headless adapter scaffold.

## Requirements

- DDEV with Docker/Rancher Desktop.
- Node.js 22.19+ or 24.5+ (Node 23 is not supported).
- A Chromium-based browser for local Canvas preview.
- MariaDB 11.8 is provided by the DDEV configuration.

## Start both projects

From this directory:

```bash
ddev start
ddev composer install
ddev install
cd frontend
npm ci
npm run dev
```

The Drupal site is available at `http://drupalcanvasheadless.ddev.site` and the
frontend at `http://localhost:3000`.

The frontend's `/` route renders Drupal Canvas content. On a fresh standard
installation it can show `Not found` until a Canvas page is created and
published; that is different from a transport or certificate error.

The first `ddev install` installs Drupal, enables Canvas and `canvas_headless`,
generates the local Simple OAuth RSA keys under `drupal/private/keys`, and
creates the local administrator `admin` / `admin` (development only).

The generated keys are ignored by Git and are intentionally outside Drupal's
public document root. Replace the local password and keys before any shared or
non-development deployment.

## Connect the frontend to Canvas

1. Sign in to Drupal and open Canvas.
2. Grant the administrator `Administer Canvas Headless frontends` and
   `Access Canvas Headless preview` permissions if needed.
3. Open **Headless frontends** in Canvas and register
   `http://localhost:3000` without a trailing slash.
4. Confirm that the frontend status becomes **Ready**.

The adapter returns `401 Unauthorized` from
`http://localhost:3000/api/canvas/components` without a preview assertion;
that is the expected Canvas contract response.

## Canvas CLI

The generated frontend is intentionally a standalone npm project. From
`frontend/`, use the Canvas CLI through the local dependency:

```bash
npm exec canvas -- --help
npm exec canvas login
npm exec canvas scaffold --name my-hero
npm exec canvas pull
npm exec canvas push
```

Run `login` once per local environment before `pull` or `push`; the generated
`.env` contains placeholders for the OAuth client credentials.

Components belong in the generated `components/` directory. Set a unique
`machineName` and `status: true` in each component's `component.yml` before
placing it from the Canvas component library.

## Drupal commands

```bash
ddev drush status
ddev drush pm:list --status=enabled | rg 'canvas|simple_oauth|consumers|custom_elements'
ddev drush cr
```

The root DDEV project uses `drupal/web` as its document root and `drupal` as
its Composer root, so the frontend remains completely decoupled from Drupal.

The local frontend uses HTTP so Node.js does not reject DDEV's locally signed
certificate. Use HTTPS and a trusted certificate when deploying outside DDEV.

The setup follows the [official Drupal Canvas Headless setup](https://project.pages.drupalcode.org/canvas/headless/setup/).
