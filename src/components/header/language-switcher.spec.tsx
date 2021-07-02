import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import LanguageSwitcher from "./language-switcher"
import { LanguageContext } from "../../util/contexts"

test("it can switch between languages", () => {
  const setLanguageMock = jest.fn()
  const Component = () => (
    <LanguageContext.Provider
      value={{ language: "en", setLanguage: setLanguageMock }}
    >
      <LanguageSwitcher />
    </LanguageContext.Provider>
  )

  render(<Component />)

  fireEvent.click(screen.getByText(/FR/))
  expect(setLanguageMock).toHaveBeenCalledWith("fr")

  fireEvent.click(screen.getByText(/EN/))
  expect(setLanguageMock).toHaveBeenCalledWith("en")
})
