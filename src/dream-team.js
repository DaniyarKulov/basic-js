const { NotImplementedError } = require('../extensions/index.js');


//  Create name of dream team based on the names of its members

// @param { Array } members names of the members
// @return { String | Boolean} name of the team or false
// 	in case of incorrect members

// @example




function createDreamTeam(members) {
	let a = members.filter(a => typeof a[0].toUpperCase() == 'string').sort((a, b) => a - b).trim()

	return a
}

module.exports = {
	createDreamTeam
};
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])
