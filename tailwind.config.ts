import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'catalog-products': 'repeat(auto-fill, minmax(18rem, 1fr))',
      },
    },
  },
  plugins: [],
}

export default config
