

function repeatArray(newSize, inArray) {

    var ret = [];

    for(var i=0; i<newSize; ++i) {
        ret.push(inArray[i%inArray.length]);
    }

    return ret;
}


var arr = [{"a":"1", "b":"cat", "c":"2"},{"a":"10", "b":"abc", "c":"2"}, {"a":"1000", "b":"dog", "c":"1"}];


function xxx(o1, o2) {
    for(var i=0; i<this.length; ++i) {
        if(o1[this[i]]>o2[this[i]]) return 1;
        if(o1[this[i]]<o2[this[i]]) return -1;
    }
    return 0;
}


arr.sort(xxx.bind(["b","a","c"]));

console.log("" + JSON.stringify(arr));

arr.sort(xxx.bind(["c"]));


console.log("" + JSON.stringify(arr));