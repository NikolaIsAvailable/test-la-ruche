import React from 'react'

const CommaSeparatedList = ({ list }) => {
  return (
    <ul>
        {list 
          ? list.split(',').filter((element) => element.length > 0).map((element, index) => <li key={index}>{element}</li>) 
          : 'Données manquantes'
        }
    </ul>
  )
}

export default CommaSeparatedList