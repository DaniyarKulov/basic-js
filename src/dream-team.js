const { NotImplementedError } = require('../extensions/index.js');


//  Create name of dream team based on the names of its members

// @param { Array } members names of the members
// @return { String | Boolean} name of the team or false
// 	in case of incorrect members

// @example




function createDreamTeam(members) {
	if (members == undefined) { return false };
	if (!Array.isArray(members)) { return false };
	if (members.filter(item => typeof item === 'string').length === 0) { return false };
	return members
		.filter(item => typeof item === 'string')
		.map(item => item.trim())
		.map(item => item[0].toUpperCase())
		.sort((a, b) => { return a.localeCompare(b) })
		.join('').split();
}

module.exports = {
	createDreamTeam
};
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])
