export default (str: string) => {
  const colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple']
  const charCodeSum = str.split('').reduce((sum, s) => sum + s.charCodeAt(0), 0)
  return colors[charCodeSum % colors.length]
}
