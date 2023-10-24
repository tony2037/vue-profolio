// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Remote Chip Debugging Tool',
		category: 'Embedded Systems',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Remote-controlled Aircraft',
		category: 'Embedded Systems, Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'ShareEats: Campus Food Sharing Platform',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Stock Market Computation',
		category: 'Distrubuted Computing',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
];

export default projects;
