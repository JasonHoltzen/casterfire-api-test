const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.ico","favicon.png","global.css","lockuptext.svg","logo.svg"]),
	_: {
		mime: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
		entry: {"file":"start-1ccd8366.js","js":["start-1ccd8366.js","chunks/vendor-4ae0a097.js"],"css":["assets/start-464e9d0a.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/all-users\/?$/,
				params: null,
				path: "/all-users",
				a: [3,4],
				b: []
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/register\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/register.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/logout\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/logout.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/login\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/login.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/characters\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/characters/index.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/characters\/selected\/removeSpell\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/characters/selected/removeSpell.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/characters\/selected\/addSpell\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/characters/selected/addSpell.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/spells\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/spells/index.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/spells\/custom\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/spells/custom.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/user\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/user/index.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/user\/all-users\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/user/all-users.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/user\/update\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/user/update.js'))
			}
		]
	}
});
