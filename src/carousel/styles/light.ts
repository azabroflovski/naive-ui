import type { Theme } from '../../_mixins'
import { commonLight } from '../../_styles/common'

export function self() {
  return {
    dotSize: '8px',
    dotColor: 'rgba(255, 255, 255, .3)',
    dotColorActive: 'rgba(255, 255, 255, 1)',
    dotColorFocus: 'rgba(255, 255, 255, .5)',
    dotLineWidth: '16px',
    dotLineWidthActive: '24px',
    arrowColor: '#eee'
  }
}

export type CarouselThemeVars = ReturnType<typeof self>

const carouselLight: Theme<'Carousel', CarouselThemeVars> = {
  name: 'Carousel',
  common: commonLight,
  self
}

export default carouselLight
export type CarouselTheme = typeof carouselLight
