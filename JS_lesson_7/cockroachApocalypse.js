function cockroachApocalypse (speed, slowdown, mine) {
    const distancePerHour  = speed - slowdown;
    const result = mine/distancePerHour
    console.log(result)
    return result
}


cockroachApocalypse(1,0.5,5)
cockroachApocalypse(3.6,2.1,3.5)