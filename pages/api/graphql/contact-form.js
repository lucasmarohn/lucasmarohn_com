import { fetchAPI } from './fetch-api'

export async function gravityFormData() {
  const data = await fetchAPI(`
  query {
    gravityFormsForm(id: 1, idType: DATABASE_ID) {
      formId
      cssClass
      formFields(first: 300) {
        nodes {
          id
          type
          cssClass
          ... on EmailField {
            description
            label
            isRequired
          }
          ... on TextAreaField {
            description
            label
            isRequired
          }
          ... on TextField {
            description
            label
            isRequired
          }
          ... on CheckboxField {
            description
            label
            choices {
              isSelected
              text
              value
            }
          }
          ... on NameField {
            description
            label
            inputs {
              isHidden
              label
              placeholder
            }
          }
        }
      }
    }
  }`)
  return data?.gravityFormsForm
}