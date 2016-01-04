

function repeatArray(newSize, inArray) {

    var ret = [];

    for(var i=0; i<newSize; ++i) {
        ret.push(inArray[i%inArray.length]);
    }

    return ret;
}