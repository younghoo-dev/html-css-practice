for(a = 0; a < 10; a++){
    for(b = 0; b < 10; b++){
        for(c = 0; c < 10; c++){
            if(a**3 + b**3 + c**3 === a*100 + b*10 + c){
                console.log(a*100 + b*10 + c)
            }
        }
    }
}