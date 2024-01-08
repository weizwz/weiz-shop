import WeizCarousel from '@/components/WeizCarousel/index.vue'
declare module 'vue' {
  export interface GlobalComponents {
    WeizCarousel: typeof WeizCarousel
  }
}
