function firstNotRepeatingCharacter(s) {
    s.toLowerCase()
    // iterate through the data structure
    for(let i = 0; i < s.length; i++) {
        let c = s[i]
        // conditional using indexOf to find first nonrepeating 'c'
        // returns position of first occurrence of a specified value in 's'
        if(s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
            return c
        }
    }
    // if unable to find a NONrepeating 'c'
    return '_'
}