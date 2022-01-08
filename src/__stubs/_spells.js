const custom_spell_abba = {
	_id: 'b6c1e6f1499d57eaa86a4fcb',
	nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=491',
	name: 'Abbacadabba',
	traits: ['uncommon', 'auditory', 'enchantment', 'mental', 'sorcerer'],
	type: 'Spell',
	level: 3,
	source: 'Core Rulebook pg. 402',
	cast: 'to  verbal',
	action: ['1', '3'],
	area: '5-foot emanation or more',
	targets: 'each foe in the area',
	duration: '1 round',
	description:
		"You utter phrases in an unknown tongue, assaulting the minds of those nearby. Each target must attempt a Will save. Regardless of the result of its save, each target is then temporarily immune for 1 minute. You can increase the number of actions it takes to Cast the Spell (to a maximum of 3 actions total). For each additional action, increase the emanation's radius by 5 feet, to a maximum of 10 extra feet for 3 actions.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is stupefied 2.  \r\n**Critical Failure**  The target is confused.  \r\n**Heightened (+3)**  The initial radius increases by 5 feet.",
	components: ['verbal'],
	custom: true,
	savingThrow: 'Will'
};

const custom_focus_aardvark = {
	_id: '42045cad99213fadcf13ffa7',
	nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=523',
	name: 'Aardvark Skin',
	traits: [
		'uncommon',
		'auditory',
		'emotion',
		'enchantment',
		'incapacitation',
		'linguistic',
		'wizard'
	],
	type: 'Focus',
	level: 1,
	source: 'Core Rulebook pg. 406',
	cast: 'verbal',
	action: '1',
	range: '30 feet',
	targets: '1 creature',
	duration: 'until the start of your next turn',
	description:
		"You whisper enchanting words to deflect your foe's ire. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes a -1 circumstance penalty to attack rolls and damage rolls against you.  \r\n**Failure**  The target can't use hostile actions against you.  \r\n**Critical Failure**  The target is stunned 1 and can't use hostile actions against you.",
	components: ['verbal'],
	custom: true,
	savingThrow: 'Will'
};

const custom_ctrip_abacus = {
	_id: '6023a6beb6666307be6f5d1c',
	nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=384',
	name: 'Abacus',
	traits: ['bard', 'cantrip', 'composition', 'illusion', 'visual'],
	type: 'Cantrip',
	level: 5,
	source: 'Core Rulebook pg. 386',
	cast: 'somatic',
	action: '1',
	range: 'touch',
	duration: '1 round',
	description: 'Hey!  Look at that, the bard can count!',
	components: ['somatic'],
	custom: true
};

const pfcr_focus_aberrant = {
	_id: '6023a6beb6666307be6f5d8c',
	nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=491',
	name: 'Aberrant Whispers',
	traits: ['uncommon', 'auditory', 'enchantment', 'mental', 'sorcerer'],
	type: 'Focus',
	level: 3,
	source: 'Core Rulebook pg. 402',
	traditions: ['occult'],
	cast: 'to  verbal',
	action: ['1', '3'],
	area: '5-foot emanation or more',
	targets: 'each foe in the area',
	duration: '1 round',
	description:
		"You utter phrases in an unknown tongue, assaulting the minds of those nearby. Each target must attempt a Will save. Regardless of the result of its save, each target is then temporarily immune for 1 minute. You can increase the number of actions it takes to Cast the Spell (to a maximum of 3 actions total). For each additional action, increase the emanation's radius by 5 feet, to a maximum of 10 extra feet for 3 actions.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is stupefied 2.  \r\n**Critical Failure**  The target is confused.  \r\n**Heightened (+3)**  The initial radius increases by 5 feet.",
	components: ['verbal'],
	custom: false,
	savingThrow: 'Will'
};

const pfcr_spell_charm = {
	_id: '6023a6beb6666307be6f5dc7',
	nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=34',
	name: 'Charm',
	traits: ['emotion', 'enchantment', 'incapacitation', 'mental'],
	type: 'Spell',
	level: 1,
	source: 'Core Rulebook pg. 322',
	traditions: ['arcane', 'occult', 'primal'],
	cast: 'somatic, verbal',
	action: '2',
	range: '30 feet',
	targets: '1 creature',
	duration: '1 hour',
	description:
		"To the target, your words are honey and your visage seems bathed in a dreamy haze. It must attempt a Will save, with a +4 circumstance bonus if you or your allies recently threatened it or used hostile actions against it. You can Dismiss the spell. If you use hostile actions against the target, the spell ends. When the spell ends, the target doesn't necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations, meaning you could potentially convince the target to continue being your friend via mundane means.  \r\n**Critical Success**  The target is unaffected and aware you tried to charm it.  \r\n**Success**  The target is unaffected but thinks your spell was something harmless instead of charm, unless it identifies the spell (usually with Identify Magic).  \r\n**Failure**  The target's attitude becomes friendly toward you. If it was friendly, it becomes helpful. It can't use hostile actions against you.  \r\n**Critical Failure**  The target's attitude becomes helpful toward you, and it can't use hostile actions against you.  \r\n**Heightened (+4)**  The duration lasts until the next time you make your daily preparations.  \r\n**Heightened (+8)**  The duration lasts until the next time you make your daily preparations, and you can target up to 10 creatures. randomTestword",
	components: ['somatic', 'verbal'],
	custom: false,
	savingThrow: 'Will'
};

const pfcr_ctrip_house = {
	_id: '6023a6beb6666307be6f5d1c',
	nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=384',
	name: 'House of Imaginary Walls',
	traits: ['bard', 'cantrip', 'composition', 'illusion', 'visual'],
	type: 'Cantrip',
	level: 5,
	source: 'Core Rulebook pg. 386',
	cast: 'somatic',
	action: '1',
	range: 'touch',
	duration: '1 round',
	description:
		"You mime creating an invisible 10-foot-by-10-foot stretch of wall adjacent to you and within your reach. The wall is solid to those creatures that don't disbelieve it, even incorporeal creatures. You and your allies can voluntarily believe the wall exists to continue to treat it as solid, for instance to climb onto it. A creature that disbelieves the illusion is temporarily immune to your house of imaginary walls for 1 minute. The wall doesn't block creatures that didn't see your visual performance, nor does it block objects. The wall has AC 10, Hardness equal to double the spell's level, and HP equal to quadruple the spell's level.",
	components: ['somatic'],
	custom: false
};

const invalid = {
	_id: '',
	nethysUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	name: "We're no strangers to love",
	traits: ['You know', 'the rules', 'and so do I'],
	type: "A full commitment's what I'm thinking of",
	level: 20000,
	source: "You wouldn't get this from any other guy",
	cast: "I just wanna tell you how I'm feeling",
	action: 'Gotta make you understand',
	range: 'Never gonna give you up',
	duration: 'Never gonna let you down',
	description:
		'Never gonna run around and desert you \n Never gonna make you cry\n Never gonna say goodbye\n Never gonna tell a lie and hurt you!',
	components: ['Never gonna tell a lie and hurt you!'],
	custom: false
};

const pfcrOnly = [{ ...pfcr_focus_aberrant }, { ...pfcr_spell_charm }, { ...pfcr_ctrip_house }];

const customOnly = [
	{ ...custom_focus_aardvark },
	{ ...custom_spell_abba },
	{ ...custom_ctrip_abacus }
];

const allSpells = [...pfcrOnly, ...customOnly];

export const _spells = {
	pfcr: {
		default: [...pfcrOnly]
	},
	custom: {
		default: [...customOnly]
	},
	all: {
		default: [...allSpells]
	},
	one: {
		cust_spell: { ...custom_spell_abba },
		cust_focus: { ...custom_focus_aardvark },
		cust_ctrip: { ...custom_ctrip_abacus },
		pfcr_spell: { ...pfcr_spell_charm },
		pfcr_focus: { ...pfcr_focus_aberrant },
		pfcr_ctrip: { ...pfcr_ctrip_house },
		invalid: { ...invalid }
	},
	character: {
		twoSpells: [custom_spell_abba._id, pfcr_ctrip_house._id],
		empty: [],
		all: [
			custom_spell_abba._id,
			custom_ctrip_abacus._id,
			custom_focus_aardvark._id,
			pfcr_spell_charm._id,
			pfcr_ctrip_house._id,
			pfcr_focus_aberrant._id
		]
	},
	list: {
		character: {
			all: [
				'6023a6beb6666307be6f5d1c',
				'6023a6beb6666307be6f5dc7',
				'6023a6beb6666307be6f5d8c',
				'6023a6beb6666307be6f5d1c',
				'42045cad99213fadcf13ffa7',
				'b6c1e6f1499d57eaa86a4fcb'
			],
			two: ['6023a6beb6666307be6f5d1c', '6023a6beb6666307be6f5dc7']
		}
	}
};
