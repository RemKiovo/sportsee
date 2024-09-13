export const MENUTITEMS = [
	{
		label: 'Accueil',
		url: '/'
	},
	{
		label: 'Profil',
		url: '/user'
	},
	{
		label: 'Réglages',
		url: '/'
	},
	{
		label: 'Communauté',
		url: '/'
	}
]

export const PERFORMANCE_LABELS = {
	cardio: 'Cardio',
	energy: 'Énergie',
	strength: 'Force',
	endurance: 'Endurance',
	speed: 'Vitesse',
	flexibility: 'Fléxibilité',
	intensity: 'Intensité'
}

/**
 * translateKind
 * @param {string} kind
 * @returns {string}
 * @description Translates the kind of performance to French
 */
export const translateKind = (kind) => {
	return PERFORMANCE_LABELS[kind] || kind
}

export const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
