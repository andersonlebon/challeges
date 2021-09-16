function jumpingOnClouds(c) {
    let minjump = 0;
    for (let i = 0; i < c.length; i++){
        if(c[i] ===0 ){
            if(c[i+1] === 0 &&  c[i+2] ===0 ){
                minjump ++;
                i +=1;
            }else if(c[i+1] === 0 &&  c[i+2] ===1 ){
                minjump +=2;
                i +=2
            }else if(c[i+1] === 1 ){
               minjump ++
               i +=1;
               
            }else if(c[i+1] === 0 ){
               minjump ++
               }
            //    i +=1;
        }
    }

    return minjump;
}
