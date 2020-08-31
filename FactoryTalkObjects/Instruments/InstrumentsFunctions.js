// Function that takes FTView JSON object and filters out the instruments.
const instrumentSeparator = xmlSummary => {
	// Take entire page JSON object and filter out all instruments.
	console.time();
	const instruments = xmlSummary.filter(instr => {
		return (
			instr['CTEXT'] === 'HS' ||
			instr['CTEXT'] === 'ZS' ||
			instr['CTEXT'] === 'LS' ||
			instr['CTEXT'] === 'LSL' ||
			instr['CTEXT'] === 'LSH' ||
			instr['CTEXT'] === 'TT' ||
			instr['CTEXT'] === 'PT' ||
			instr['CTEXT'] === 'CT' ||
			instr['CTEXT'] === 'QT' ||
			instr['CTEXT'] === 'LT' ||
			instr['CTEXT'] === 'A' ||
			instr['CTEXT'] === 'SC' ||
			instr['Name'] === 'FH0003'
		);
	});

	const digitalInputs = instruments.filter(
		instr =>
			instr['CTEXT'] === 'HS' ||
			instr['CTEXT'] === 'ZS' ||
			instr['CTEXT'] === 'LS' ||
			instr['CTEXT'] === 'LSL' ||
			instr['CTEXT'] === 'LSH'
	);

	const analogInputs = instruments.filter(
		instr =>
			instr['CTEXT'] === 'TT' ||
			instr['CTEXT'] === 'PT' ||
			instr['CTEXT'] === 'CT' ||
			instr['CTEXT'] === 'QT' ||
			instr['CTEXT'] === 'LT'
	);

	const pumps = instruments.filter(instr => 
		instr['Name'] === 'FH0003' || // Centrifugal 
		instr['Name'] === 'UH0003' || // Centrifugal 
		instr['Name'] === 'FH0007' || // PD
		instr['Name'] === 'FH0008' || //
		instr['Name'] === 'FH0015'    // Diaphragm
	);
	const agitators = instruments.filter(instr => instr['CTEXT'] === 'A');
	const vfds = instruments.filter(instr => instr['CTEXT'] === 'SC');
	const handSwitches = digitalInputs.filter(DI => DI['CTEXT'] === 'HS');
	
	console.log(
		digitalInputs.length,
		analogInputs.length,
		pumps.length,
		agitators.length,
		vfds.length,
		handSwitches.length
	);
	
	console.timeEnd();
	return {
		instruments: instruments,
		digitalInputs: digitalInputs,
		analogInputs: analogInputs,
		pumps: pumps,
		agitators: agitators,
		vfds: vfds,
		handSwitches: handSwitches,
	};
};

module.exports = {
	instrumentSeparator: instrumentSeparator,
};
