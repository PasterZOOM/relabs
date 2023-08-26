export enum AppRoutes {
  AUTH = 'auth',
  MAIN = 'main',
  SHOP = 'shop',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.AUTH]: '/login',
  [AppRoutes.SHOP]: '/shop',
}
