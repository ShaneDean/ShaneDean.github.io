import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      fontFamily: {
        'sans': ['LXGWBright', 'ui-sans-serif', 'system-ui'],
        'serif': ['LXGWBright', 'ui-serif', 'Georgia'],
        'mono': ['LXGWBright', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        muted: 'rgba(140, 140, 140, 0.9)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
