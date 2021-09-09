function catAndMouse(x, y, z) {
    let result = '';
    if(z>x && z>y){
    if(x===y ) result = 'Mouse C';
    else if(x>y) result = 'Cat A';
    else if(y>x) result = 'Cat B';
    }
    else if(z<x && z<y){
    if(x===y ) result = 'Mouse C';
    else if(x<y) result = 'Cat A';
    else if(y<x) result = 'Cat B';
    }
    else if(z>x && z<y){
        let position1 = z-x;
        let position2 = y-z;
    if(position2===position1 ) result = 'Mouse C';
    else if(position1<position2) result = 'Cat A';
    else if(position2<position1) result = 'Cat B';
    }
     else if(z<x && z>y){
        let position1 = x-z;
        let position2 = z-y;
    if(position2===position1 ) result = 'Mouse C';
    else if(position1<position2) result = 'Cat B';
    else if(position2<position1) result = 'Cat A';
    }
    else if (x==z && y==z) result = 'Mouse C';
   return result;

}
