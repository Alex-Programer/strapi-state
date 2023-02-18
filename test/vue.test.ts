import { describe, it } from "vitest"
import { useVue } from "../src"
import { withSetup } from "./utils"

describe("for vue", () => {
  it("should work", async () => {
    withSetup(() => useVue({ baseURL: "http://localhost:1337/", contentType: "todo-collections" }))
  })
})
