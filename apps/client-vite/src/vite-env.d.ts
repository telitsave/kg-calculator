/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string
  readonly VITE_COOKIE_DOMAIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
