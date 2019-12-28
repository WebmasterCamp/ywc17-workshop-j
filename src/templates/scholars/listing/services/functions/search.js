import { intersection, union, flatten, spread } from 'lodash'

import { database } from '../../../../../../content/database/scholarship'

export const searchFunction = async input => {
  const selectedScholars = input.ongoing ? database.scholarships.filter(o => o.ongoing) : database.scholarships

  // Search by query
  const typeQuery = input.query === '' ? [selectedScholars] : input.query
    .split(' ')
    .filter(o => o !== '')
    .map(subquery => {
      const typeName = selectedScholars.filter(scholarship => {
        return RegExp(subquery.toLocaleLowerCase()).test(scholarship.name.toLocaleLowerCase())
      })

      return union(typeName)
    })

  // Search by country
  const typeCountry = input.countries.length === 0 ? [selectedScholars] : flatten(
    union(
      ...input.countries.map(country => {
        return selectedScholars.filter(scholarship => {
          return scholarship.country === country
        })
      })
    )
  )

  // Search by departments
  const typeDepartment = input.departments.length === 0 ? [selectedScholars] : flatten(
    union(
      ...input.departments.map(department => {
        return selectedScholars.filter(scholarship => {
          return scholarship.department === department
        })
      })
    )
  )

  // Search by education level
  const typeEducationLevel = input.education_levels.length === 0 ? [selectedScholars] : flatten(
    union(
      ...input.education_levels.map(education_level => {
        return selectedScholars.filter(scholarship => {
          return scholarship.education_level === education_level
        })
      })
    )
  )

  // Search by scholarship types
  const typeScholarship = input.scholarship_types.length === 0 ? [selectedScholars] : flatten(
    union(
      ...input.scholarship_types.map(scholarship_type => {
        return selectedScholars.filter(scholarship => {
          return scholarship.scholarship_type === scholarship_type
        })
      })
    )
  )

  // Process here
  return intersection(...[
    flatten(typeQuery),
    flatten(typeCountry),
    flatten(typeDepartment),
    flatten(typeEducationLevel),
    flatten(typeScholarship),
  ])
}
