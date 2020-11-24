function firstDuplicate(a) {
    // using an object/hash table
    let storageObject = {}
    for(let i = 0; i < a.length; i++) {
        if(storageObject[a[i]]) {
            // If it exists in storageObject, return its value
            return a[i]
        // in the OPPOSITE case...
        } else if (!storageObject[a[i]]) {
            // store it.
            storageObject[a[i]] = 1
        }
    }
    // otherwise...
    return -1
}
