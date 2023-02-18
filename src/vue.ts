import { onMounted, onUnmounted, ref } from "vue"
import { Strapi } from "./strapi.helper"

export const useVue = (options: Options) => {
  const strapi = ref<Strapi>()

  onMounted(() => {
    strapi.value = new Strapi(options)
  })

  onUnmounted(() => {})

  return {}
}
