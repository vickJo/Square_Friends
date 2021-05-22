import React from "react"
import { render } from "@testing-library/react"

import PageTitle from "./index"

test("it displays correct title", () => {
  const { getByText, rerender } = render(<PageTitle title="Square Friends" />)
  expect(getByText("Square Friends")).toBeInTheDocument()

  rerender(<PageTitle title="Square Fellas" />)
  expect(getByText("Square Fellas")).toBeInTheDocument()
})
