const { Valve, SimpleValve } = require('./ValvesObjects');

const valveSeparator = xmlSummary => {
	const valves = xmlSummary.filter(
		obj =>
			obj['Name'] === 'FK0008' || // Mixproof Valve
			obj['Name'] === 'FK0018' ||
			obj['Name'] === 'FK0032' || // Simple Valve 2 | Two Ports
			obj['Name'] === 'FK0033' || // BF Valve
			obj['Name'] === 'FK0034' || // Simple Valve 1 | Two Ports
			obj['Name'] === 'FK0039' || // Valve
			obj['Name'] === 'FK0063' || // Advanced Valve
			obj['Name'] === 'FK0064' || // Simple Valve 1 | Three Ports
			obj['Name'] === 'FK0068' || // Simple Valve 1 | Three Ports
			obj['Name'] === 'FK0101' || // Simple Valve 2 | Three Ports
			obj['Name'] === 'FK0101' || // Simple Valve 2 | Three Ports
			obj['Name'] === 'FK0101' || // Simple Valve 1 | Three Ports
			obj['Name'] === 'FK0120' || // Simple Valve 1 | Three Ports
			obj['Name'] === 'FK0121' || // Simple Valve 1 | Three Ports
			obj['Name'] === 'UO0053'    // Mixproof Valve
	);

	return valves;
};

// Create Mixproof Valve array
const createMixproofValves = arr => {
	const xmlValves = [];
	arr.forEach(() => {
		let tempMixproof = JSON.parse(JSON.stringify(Valve));
		xmlValves.push(tempMixproof);
	});
	return xmlValves;
};

module.exports = {
	valveSeparator: valveSeparator,
	createMixproofValves: createMixproofValves,
};
