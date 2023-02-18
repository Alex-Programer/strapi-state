import { onMounted, onUnmounted, reactive, ref } from "vue"
import { Strapi } from "./strapi.helper"

export const useVue = (options: Options) => {
  const state = reactive<State<{ title: string }, Type>>({
    error: null,
    loading: false,
    data: [],
  })

  const strapi = ref<Strapi>()

  onMounted(() => {
    strapi.value = new Strapi(options)
  })

  onUnmounted(() => {})

  return {}
}
