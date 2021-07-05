import React from "react"
import { useStaticQuery } from "gatsby"
import { render, screen } from "@testing-library/react"

import Header from "."
import en from "../../util/lang/en.json"

;(useStaticQuery as jest.Mock<typeof useStaticQuery>).mockReturnValue({
  allFile: {
    nodes: [
      {
        name: "logo",
        publicURL: "logo.svg",
        relativeDirectory: "",
      },
      {
        name: "logo-dark",
        publicURL: "logo-dark.svg",
        relativeDirectory: "",
      },
    ],
  },
} as any)

test("it renders correctly", () => {
  const { rerender } = render(<Header theme="dark" />)
  const logoImg = screen.getByRole("img")

  expect(logoImg).toHaveAttribute("src", "logo-dark.svg")
  expect(screen.getByPlaceholderText(en.search)).toBeInTheDocument()
  

  rerender(<Header theme="light" layout="base" />)
  expect(logoImg).toHaveAttribute("src", "logo.svg")
  expect(screen.queryByPlaceholderText(en.search)).not.toBeInTheDocument()
})
