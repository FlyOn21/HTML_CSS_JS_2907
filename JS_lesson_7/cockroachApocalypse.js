function cockroachApocalypse (speed, slowdown, mine) {
    let time = 0;
    let height = 0;
    do{
        time++;
        height+= speed;
        if(height<mine){
            height-=slowdown;
        }
    }
     while (height<=mine){
        time -=(height-mine)/speed
    }
    console.log(time)
    return time
}


cockroachApocalypse(1,0.5,3)
cockroachApocalypse(3.6,2.1,3.5)