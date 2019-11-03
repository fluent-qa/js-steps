/**
 * copy or extend source object to target object
 * @param source
 * @param target
 * @returns {*}
 */
function copyOrExtend(source, target) {
    for (prop in source) {
        target[prop] = source[prop]
    }

    return target
}

/**
 * merge source object to target object
 * @param source: object to be merged
 * @param target: object to return
 * @returns {*}: target object after merging
 */
function merge(source, target) {
    for (var obj in source) {
        if (target.hasOwnProperty(obj)) continue;
        target[prop] = source[prop]
    }
    return target;
}

/**
 * find out the property in target but not in source,
 * delete this property and return target
 * @param source
 * @param target
 */
function restrict(source,target){
    for (var obj in target) {
        if(!(obj in source)) delete target[obj];
    }
    return target;
}

function union(source,target){
    copyOrExtend(copyOrExtend({},source),target);
}

function intersection(source,target){
    return restrict(copyOrExtend({},source),target);
}
//todo: understand own property vs all properties
//todo: understand javascript inheritance structure
function keys(obj){
    if(typeof obj !=="object") throw TypeError();
    var result = [];
    for (var key in obj) {
        if(obj.hasOwnProperty(key)){
            result.push(key)
        }
    }
    return result;
}

module.exports = eobjects ={

}