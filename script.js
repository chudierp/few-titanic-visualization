import data from './titanic-data.js'

// Get a reference to the #passengers
const passengersDiv = document.querySelector('#passengers')

data.forEach((p)=> {
  const el = document.createElement('div')
  passengersDiv.appendChild(el)
})




// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(50, 15px)'
titanic.style.gridGap = '2px'


// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

// Sort Data
data.sort((a, b) => {
  if (a.fields.embarked < b.fields.embarked) {
    return -1
  } else if (a.fields.embarked > b.fields.embarked) {
    return 1
  }
  return 0
})

data.sort((a, b) => {
  if (a.fields.sex == 'female'){
    return 1
  }
  return -1
})

data.sort((a, b) => {
  if (a.fields.survived == 'Yes') {
    return -1
  }
  return 1
  // return a number < 1 
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  p.style.width = '15px'
  p.style.height = '15px'
  p.style.borderRadius = data[i].fields.sex == 'female' ? '50%' : '0'
  p.style.opacity = data[i].fields.survived == 'Yes' ? '1.0' : '0.5'
  const portColor = { S: 'tomato', C: 'cornflowerblue', Q: 'orange', undefined: 'black'}
  p.style.backgroundColor = portColor[data[i].fields.embarked]
})

// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 



// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'



