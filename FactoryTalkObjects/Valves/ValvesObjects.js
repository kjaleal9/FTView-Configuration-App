/*  Valve Object (SSV and MPV)
	Required key-value pairs:
		1. Name - 'Valve${i}'
		2. LinkBaseObject - '_std_cm_cmis.MixProofV' / '_std_cm_cmis.ValveV' / '_std_cm_cmis.ValveH'
		2. Rectangle:
			1. Left = `${left}`;
			2. Top = `${top}`;
			3. Height = 16 / 11;
			4. Width = 11 / 16;
			5. Name = `BoxMainVx3${i}` / `BoxMainVx4${i}`
			6. LinkBaseObject = / '_std_cm_cmis.BoxMainVx1' / '_std_cm_cmis.BoxMainVx3' / '_std_cm_cmis.BoxMainVx4'
*/

const Valve = {
	$: {
		visible: 'true',
		wallpaper: 'false',
		toolTipText: '/*LS:0 #2*/',
		exposeToVba: 'notExposed',
		isReferenceObject: 'true',
		linkSize: 'true',
		linkConnections: 'true',
		linkAnimations: 'linkWithExpression',
		linkToolTipText: 'true',
	},
	rectangle: {
		$: {
			visible: 'true',
			toolTipText: '',
			exposeToVba: 'notExposed',
			isReferenceObject: 'true',
			linkSize: 'true',
			linkConnections: 'true',
			linkAnimations: 'linkWithExpression',
			linkToolTipText: 'true',
			backStyle: 'solid',
			backColor: 'silver',
			foreColor: 'black',
			lineStyle: 'solid',
			lineWidth: '1',
			patternStyle: 'none',
			patternColor: 'black',
			endColor: 'white',
			gradientStop: '50',
			gradientDirection: 'gradientDirectionHorizontal',
			gradientShadingStyle: 'gradientHorizontalFromRight',
		},
	},
	parameters: {
		parameter: [
			{ $: { name: '#1', description: 'PLCTag', value: '' } },
			{ $: { name: '#2', description: 'Name', value: '' } },
			{ $: { name: '#3', description: 'TypeNumber_Open', value: '' } },
			{ $: { name: '#4', description: 'TypeNumber_Closed', value: '' } }, // Delete parameters 4 and 5 for MPV and change #3 to 'TypeNumber'
			{ $: { name: '#5', description: 'Type_Number_MidPos', value: '' } },
		],
	},
};

/*  Simple Valve Object
	Required key-value pairs:
		1. Name - 'Object${i}'
		2. LinkBaseObject - '_std_cm_cmis.SimpleValve1' / '_std_cm_cmis.SimpleValve2'
		3. Group:
			1. Name - `Vy1${i}` `Vy2${i}`
			2. LinkBaseObject - `_std_cm_cmis.Vy1` / `_std_cm_cmis.Vy2`
			3. Rectangle:
				1. Left = `${left}`;
				2. Top = `${top}`;
				3. Height = 16 / 11;
				4. Width = 11 / 16;
				5. Name = `BoxMain{i}`
				6. LinkBaseObject = "_std_cm_cmis.BoxMainVy1' / '_std_cm_cmis.BoxMainVy2'
*/

const SimpleValve = {
	$: {
		visible: 'true',
		wallpaper: 'false',
		toolTipText: '/*LS:0 #2*/',
		exposeToVba: 'notExposed',
		isReferenceObject: 'true',
		linkSize: 'true',
		linkConnections: 'true',
		linkAnimations: 'linkWithExpression',
		linkToolTipText: 'true',
	},
	group: {
		$: {
			visible: 'true',
			toolTipText: '',
			exposeToVba: 'notExposed',
			isReferenceObject: 'true',
			linkSize: 'true',
			linkConnections: 'true',
			linkAnimations: 'linkWithExpression',
			linkToolTipText: 'true',
		},

		rectangle: {
			$: {
				height: '23',
				width: '23',
				visible: 'true',
				toolTipText: '',
				exposeToVba: 'notExposed',
				isReferenceObject: 'true',
				linkSize: 'true',
				linkConnections: 'true',
				linkAnimations: 'linkWithExpression',
				linkToolTipText: 'true',
				backStyle: 'solid',
				backColor: 'silver',
				foreColor: 'black',
				lineStyle: 'solid',
				lineWidth: '1',
				patternStyle: 'none',
				patternColor: 'black',
				endColor: 'white',
				gradientStop: '50',
				gradientDirection: 'gradientDirectionHorizontal',
				gradientShadingStyle: 'gradientHorizontalFromRight',
			},
		},
	},
	parameters: {
		parameter: [
			{ $: { name: '#1', description: 'PLCTag', value: '' } },
			{ $: { name: '#2', description: 'Name', value: '' } },
			{ $: { name: '#3', description: 'TypeNumber', value: '' } },
		],
	},
};

module.exports = {
	Valve: Valve,
	SimpleValve: SimpleValve,
};
