/*  Line Object
	Required key-value pairs:
		1.Name - 'Object${i}'
		2.Line - 'Start-X Start-Y End-X End-Y'
		3.Linestyle
		4.Forecolor
*/
const Line = {
	$: {
		visible: 'true',
		wallpaper: 'false',
		toolTipText: '',
		exposeToVba: 'notExposed',
		isReferenceObject: 'false',
		backStyle: 'transparent',
		lineWidth: '1',
		backColor: 'teal',
	},
};

module.exports ={
	Line: Line
}