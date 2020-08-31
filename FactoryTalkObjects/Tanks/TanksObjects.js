/*  Silo Object
	Required key-value pairs:
		1. Name - 'Object${i}'
		2. LinkBaseObject - `_TPI_Background_Objects.Silo_${size}`
		3. Ellipse:
			1. Name = `Silo${i}_Ellipse${i}`;
			2. Height = `${height}`;
			3. Width = `${width}`;
			4. Left = `${left}`;
			5. Top = `${top}`;
*/
const Silo = {
	$: {
		visible: 'true',
		wallpaper: 'false',
		toolTipText: '',
		exposeToVba: 'notExposed',
		isReferenceObject: 'true',
		linkSize: 'true',
		linkConnections: 'true',
		linkAnimations: 'linkWithExpression',
		linkToolTipText: 'true',
	},
	ellipse: {
		$: {
			visible: 'true',
			toolTipText: '',
			exposeToVba: 'notExposed',
			isReferenceObject: 'true',
			linkSize: 'true',
			linkConnections: 'true',
			linkAnimations: 'linkWithExpression',
			linkBaseObject: '_TPI_Background_Objects.Ellipse23',
			linkToolTipText: 'true',
			backStyle: 'gradient',
			backColor: '#3F3F3F',
			foreColor: '#A0A0A4',
			lineStyle: 'solid',
			lineWidth: '1',
			patternStyle: 'none',
			patternColor: 'black',
			endColor: '#F0F0F0',
			gradientStop: '90',
			gradientDirection: 'gradientDirectionVertical',
			gradientShadingStyle: 'gradientVerticalFromOutside',
		},
	},
};

// Export Objects
module.exports = {
	Silo: Silo,
};
