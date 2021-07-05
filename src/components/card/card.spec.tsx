import React from "react"
import { useStaticQuery } from "gatsby"
import { render, screen } from "@testing-library/react"

import Card from "."
import Image from "../image"

;(useStaticQuery as jest.Mock<typeof useStaticQuery>).mockReturnValue({
  allFile: {
    nodes: [
      {
        name: "bg",
        publicURL: "covers/bg.svg",
        relativeDirectory: "covers",
      },
      {
        name: "john_doe",
        publicURL: "avatar/john_doe.svg",
        relativeDirectory: "avatar",
      },
      {
        name: "jane_smith",
        publicURL: "avatar/jane_smith.svg",
        relativeDirectory: "avatar",
      },
    ],
  },
} as any)

test("it renders correctly", () => {
  const props_1: React.ComponentProps<typeof Card> = {
    bannerName: "bg",
    title: "John Doe",
    subtitle: "@john_doe",
    description: "A renowned developer advocate",
    avatar: <Image name="john_doe" directory="avatar" />,
    action: <button>Follow</button>,
  }
  const props_2: React.ComponentProps<typeof Card> = {
    bannerName: "bg",
    title: "Jane Smith",
    subtitle: "@jane_smith",
    description: "A top-class QA tester",
    avatar: <Image name="jane_smith" directory="avatar" />,
    action: <button>Follow</button>,
  }

  const { rerender } = render(<Card {...props_1} />)
  expect(screen.getByText(props_1.title)).toBeInTheDocument()
  expect(screen.getByText(props_1.subtitle)).toBeInTheDocument()
  expect(screen.getByText(props_1.description)).toBeInTheDocument()
  expect(screen.getByRole("img")).toHaveAttribute("alt", "john_doe")

  rerender(<Card {...props_2} />)
  expect(screen.getByText(props_2.title)).toBeInTheDocument()
  expect(screen.getByText(props_2.subtitle)).toBeInTheDocument()
  expect(screen.getByText(props_2.description)).toBeInTheDocument()
  expect(screen.getByRole("img")).toHaveAttribute("alt", "jane_smith")
})
