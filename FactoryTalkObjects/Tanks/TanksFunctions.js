const tankSeparator = xmlSummary => {
	const tanks = xmlSummary.filter(
		obj => obj['Name'] === 'UJ0083' || obj['Name'] === 'UJ0069' || obj['Name'] === 'UJ0139'
	);

	return tanks;
};

// Create Mixproof Valve array
const createTanks = arr => {
	const xmlTanks = [];
	arr.forEach(() => {
		let tempTank = JSON.parse(JSON.stringify(FTObj.MixProofValve));
		xmlValves.push(tempMixproof);
	});
	return xmlTanks;
};

module.exports = {
	tankSeparator: tankSeparator,
	createTanks: createTanks,
};
