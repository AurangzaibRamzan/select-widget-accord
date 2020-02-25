interface SelectitemProps {
  label: string
  smallLabel?: string
  image?: string
}

export function CheckSelectorType(arr: Array<SelectitemProps>) {
  let general = true
  arr.forEach((element) => {
    if (element.label && element.smallLabel) {
      general = false
    }
  })
  return general
}

export function FilterItems(arr: Array<SelectitemProps>, searchText: string) {
  return arr.filter((element) =>
    String(element.label)
      .toLowerCase()
      .includes(searchText.toLowerCase())
  )
}
