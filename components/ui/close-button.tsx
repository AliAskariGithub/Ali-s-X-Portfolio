import type { ButtonProps } from "@chakra-ui/react"
import * as React from "react"
import { LuX } from "react-icons/lu"
import { Button } from "./button"

export type CloseButtonProps = ButtonProps

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  return (
    <Button variant="ghost" aria-label="Close" ref={ref} {...props}>
      {props.children ?? <LuX />}
    </Button>
  )
})
