function isValidWalk(walk) {
    const s = countRoute('s',walk)
    const n = countRoute('n',walk)
    const e = countRoute('e',walk)
    const w = countRoute('w',walk)
    if (walk.length!==10 ){
      return false
    }
    if (s!==n || e!==w){
      return false
    }
    return true
  }
  
  function countRoute (route,walk){
     return walk.filter(elem => elem === route).length
  }


isValidWalk(['n','s','n','s','n','s','n','s','n','s'])

isValidWalk(['n','n','n','s','n','s','n','s','n','s'])