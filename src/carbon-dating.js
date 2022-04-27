const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
//   assert.equal(dateSample('ACTIVITY OVER 9000'), false);
// assert.equal(dateSample('one'), false);
// assert.equal(dateSample(''), false);
// assert.equal(dateSample(' '), false);
// assert.equal(dateSample(' \n\t\r'), false);
// assert.equal(dateSample('9000'), false);
// assert.equal(dateSample('15.1'), false);
// assert.equal(dateSample('0'), false);
// assert.equal(dateSample('-5'), false);
// assert.equal(dateSample('-55.8'), false);
function dateSample(sampleActivity) {

	if (Number(sampleActivity) <= 0 || Number(sampleActivity) > 15 || isNaN(sampleActivity)) {
		return false
	} else if (typeof sampleActivity == 'string') {
		let a = 0.693 / 5730
		let b = Math.log(15 / sampleActivity) / a
		return Math.ceil(b)
	}else{
		return false
	}
	//   throw new NotImplementedError('Not implemented');
}

module.exports = {
	dateSample
};
