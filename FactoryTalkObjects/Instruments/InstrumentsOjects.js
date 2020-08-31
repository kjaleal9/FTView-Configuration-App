/*  Motor Object
	Required key-value pairs:
		1. Name - 'P${i}'
		2. LinkBaseObject - '_std_cm_cmis.MotorType3'
		3. Group:
			1. Name - `Px3${i}`
			2. LinkBaseObject - `_std_cm_cmis.Px3`
			3. Group:
				1. Name - `TypePx3${i}`
				2. LinkBaseObject - '_std_cm_cmis.TypePx3'
				3. Rectangle:
					1. Left = `${left}`;
					2. Top = `${top}`;
					3. Name = `MainBodyPx3${i}`
					4. LinkBaseObject = '_std_cm_cmis.MainBodyPx3'
*/
const Motor = {
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
		group: {
			$: {
				visible: 'true',
				toolTipText: '',
				exposeToVba: 'notExposed',
				isReferenceObject: 'true',
				linkSize: 'true',
				linkConnections: 'true',
				linkAnimations: 'linkWithExpression',
				linkBaseObject: '_std_cm_cmis.TypePx3',
				linkToolTipText: 'true',
			},
			ellipse: {
				height: '17',
				width: '17',
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
};