
const Goal= function(porteria, color) {
	const c = color
    const w = 15
    const h = 200
    const p = porteria
    const x = p === 1 ? 0 : width - w
    let y = (Math.floor(height / 2))-80

   const getx = function () {
        return x
    }

    const gety = function () {
        return y
    }

    const getw = function () {
        return w
    }

    const geth = function () {
        return h
    }
   
    const drawGoal = function () {
        rectMode(CORNER)
        noStroke()
        fill(c)
        rect(x, y, w, h)
    }
 

    return {
        drawGoal,
        getx,
        gety,
        getw,
        geth,
      
    }
     
}