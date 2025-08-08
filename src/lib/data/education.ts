import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Music',
		description: 'Studied with Mike Richmond, Conrad Herwig',
		location: 'New Brunswick, NJ, USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Rutgers University',
		period: { from: new Date(2006, 8, 1), to: new Date(2010, 5, 1) },
		shortDescription: 'Studied Jazz Performance, Double Bass, with Mike Richmond. Theory and composition work with Conrad Herwig, Ralph Bowen, Stanley Cowell.',
		slug: 'education-item-1',
		subjects: ['composition', 'improvisation', 'jazz history', 'jazz theory', 'jazz performance', 'jazz pedagogy']
	},
	
	{
		degree: 'Master of Music',
		description: '',
		location: 'Hartford, CT, USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'The Hartt School',
		period: { from: new Date(2011, 8, 1), to: new Date(2013, 5, 1) },
		shortDescription: 'Studied classical and Contemporary Bass Performance with Robert Black.',
		slug: 'education-item-2',
		subjects: ['orchestral', 'chamber music', 'solo', 'composition', 'music theory', 'music pedagogy']
	},
	{
		degree: 'Lucerne Festival Academy - Summer Program',
		description: '',
		location: 'Lucerne, Switzerland',
		logo: Assets.Unknown,
		name: '',
		organization: 'Lucerne Festival',
		period: { from: new Date(2014, 7, 1), to: new Date(2019, 7, 30) },
		shortDescription: 'Highlights include working with Alan Gilbert, Sir Simon Rattle, Anne-Sophie Mutter, Heinz Holliger, Ensemble Intercontemporain.',
		slug: 'education-item-3',
		subjects: ['20th century music', '21st century music']
	},
	
];

const EducationData = { title, items };

export default EducationData;
