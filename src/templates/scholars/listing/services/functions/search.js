import { intersection, union, flatten } from 'lodash'

import { database } from '../../../../../../content/database/scholarship'

export const searchFunction = async input => {
  console.log(input)
  // Search by query
  const typeQuery = input.query === '' ? [database.scholarships] : input.query
    .split(' ')
    .filter(o => o !== '')
    .map(subquery => {
      const typeName = database.scholarships.filter(scholarship => {
        return RegExp(subquery.toLocaleLowerCase()).test(scholarship.name.toLocaleLowerCase())
      })

      return union(typeName)
    })
  
  // Search by country
  const typeCountry = input.countries.length === 0 ? [database.scholarships] : flatten(
    union(
      ...input.countries.map(country => {
        return database.scholarships.filter(scholarship => {
          return scholarship.country === country
        })
      })
    )
  )

  // Process here
  return intersection(flatten(typeQuery), flatten(typeCountry))
}
