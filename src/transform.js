const groupAdultsByAgeRange = (people) => {
    if(people.length === 0) {
        return {};
    }

    const over18 = people.filter((person) => {
        if(person.age >= 18) {
            return true;
        }
    })

    const ranges = over18.reduce((range, currentPerson) => {
        if(currentPerson.age < 21) {
            range['20 and younger'].push(currentPerson);
        }else if(currentPerson.age >= 21 && currentPerson.age < 31) {
            range['21-30'].push(currentPerson);
        }else if(currentPerson.age >= 31 && currentPerson.age < 41) {
            range['31-40'].push(currentPerson);
        }else if(currentPerson.age >= 41 && currentPerson.age < 51) {
            range['41-50'].push(currentPerson);
        }else if(currentPerson.age >= 51) {
            range['51 and older'].push(currentPerson);
        }
        return range;
    }, {
        '20 and younger': [],
        '21-30': [],
        '31-40': [],
        '41-50': [],
        '51 and older': []
    })

    const result = {};
    if(ranges['20 and younger'].length !== 0) {
        result['20 and younger'] = ranges['20 and younger']
    }
    if(ranges['21-30'].length !== 0) {
        result['21-30'] = ranges['21-30'];
    }
    if(ranges['31-40'].length !== 0) {
        result['31-40'] = ranges['31-40']
    }
    if(ranges['41-50'].length !== 0) {
        result['41-50'] = ranges['41-50']
    }
    if(ranges['51 and older'].length !== 0) {
        result['51 and older'] = ranges['51 and older']
    }
    return result;
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
