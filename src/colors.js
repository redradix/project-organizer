const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#3f51b5',
  '#2196f3',
  '#009688',
  '#ff5722',
  '#388e3c'
]

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length) + 0]
}

export default getRandomColor
