// get
export const loadInstall = () => {
  try {
    const data = localStorage.getItem('install')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = app => {
  const install = loadInstall()

  try {
    const isDuplicate = install.some(p => p.id === app.id)
    if (isDuplicate) return alert('Already added in installation')
    const updatedInstall = [...install, app]
    localStorage.setItem('install', JSON.stringify(updatedInstall))
  } catch (err) {
    console.log(err)
  }
}

// delete
export const removeFromInstall = id => {
  const install = loadInstall()
  try {
    const updatedWishlist = install.filter(a => a.id !== id)
    localStorage.setItem('install', JSON.stringify(updatedWishlist))
  } catch (err) {
    console.log(err)
  }
}