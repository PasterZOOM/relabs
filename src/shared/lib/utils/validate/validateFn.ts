export type ValidatorType = {
  condition: (valueL: string) => boolean
  message: string
}
export const validateFn = (value: string, validators: ValidatorType[]): string | null => {
  for (let i = 0; i < validators.length; i += 1) {
    const isNoValid = validators[i].condition(value)

    if (isNoValid) {
      return validators[i].message
    }
  }

  return null
}
