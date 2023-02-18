import { createApp } from "vue"

// http://localhost:1337/content-manager/content-types/api::todo-collection.todo-collection/configuration
export const apiToken =
  "7f8182b1a3e38ec15437917c315e0e88b7616ead8e501b70afaa923b52e260278c857a0985adbf1883448fdc022363de1c44a1f47a85f5dc837ad8d70558809cc5633d738010aab5bcf009d3b486771919ab00cb5455adf8504a79a0a107f70c2ce7e731389c5b9474809dbe9bc558449733e35628a8a3ea69f9952709655ada"

export function withSetup(composable: () => any) {
  let result

  const app = createApp({
    setup() {
      result = composable()
      return () => {}
    },
  })

  app.mount(document.createElement("div"))

  return [result, app]
}
