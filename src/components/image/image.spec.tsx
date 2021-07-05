import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Image from "."

;(useStaticQuery as jest.Mock<typeof useStaticQuery>).mockReturnValue({
  allFile: {
    nodes: [
      {
        name: "logo",
        publicURL: "logo.svg",
        relativeDirectory: "",
      },
      {
        name: "chat",
        publicURL: "icons/chat.svg",
        relativeDirectory: "icons",
      },
      {
        name: "nature",
        publicURL: "nature.svg",
        relativeDirectory: "covers/nature.svg",
      },
      {
        name: "user-1",
        publicURL: "user1.svg",
        relativeDirectory: "avatars/user1.svg",
      },
    ],
  },
} as any)

test("it displays the correct image", () => {
  const { rerender, getByRole } = render(<Image name="logo" />)
  expect(getByRole("img")).toHaveAttribute("src", "logo.svg")

  rerender(<Image name="chat" directory="icons" />)
  expect(getByRole("img")).toHaveAttribute("src", "icons/chat.svg")
})
