import type { PageLoad } from './$types';

export type ProfiencyLevel = 'love' | 'knowledgeable' | 'proficient' | 'learning' | 'interested';

export interface Skill {
	name: string;
	profiecencyLevels: ProfiencyLevel[];
	tags: string[];
	imageUrl: string;
}

const skills: Skill[] = [
	{
		name: 'React',
		profiecencyLevels: ['love', 'knowledgeable'],
		imageUrl: '/assets/skills/react.png',
		tags: ['frontend', 'javascript', 'typescript', 'framework']
	},
	{
		name: 'SvelteKit',
		profiecencyLevels: ['love', 'learning'],
		imageUrl: '/assets/skills/svelte.png',
		tags: ['frontend', 'backend', 'javascript', 'typescript', 'framework']
	},
	{
		name: 'Svelte',
		profiecencyLevels: ['love', 'learning'],
		imageUrl: '/assets/skills/svelte.png',
		tags: ['frontend', 'javascript', 'typescript', 'framework']
	},
	{
		name: 'React Native',
		profiecencyLevels: ['knowledgeable'],
		imageUrl: '/assets/skills/react.png',
		tags: ['javascript', 'mobile', 'framework']
	},
	{
		name: 'Python',
		profiecencyLevels: ['knowledgeable', 'love'],
		imageUrl: '/assets/skills/python.png',
		tags: ['python', 'language']
	},
	{
		name: 'Rust',
		profiecencyLevels: ['learning'],
		imageUrl: '/assets/skills/rust.png',
		tags: ['rust', 'language']
	},
	{
		name: 'Ruby',
		profiecencyLevels: ['knowledgeable'],
		imageUrl: '/assets/skills/ruby.png',
		tags: ['ruby', 'language']
	},
	{
		name: 'JavaScript',
		profiecencyLevels: ['knowledgeable'],
		imageUrl: '/assets/skills/javascript.png',
		tags: ['javascript', 'language']
	},
	{
		name: 'TypeScript',
		profiecencyLevels: ['love', 'knowledgeable'],
		imageUrl: '/assets/skills/typescript.svg',
		tags: ['typescript', 'language']
	},
	{
		name: 'GraphQL',
		profiecencyLevels: ['knowledgeable'],
		imageUrl: '/assets/skills/graphql.png',
		tags: ['frontend', 'api', 'language']
	},
	{
		name: 'FastAPI',
		profiecencyLevels: ['love', 'knowledgeable'],
		imageUrl: '/assets/skills/fastapi.svg',
		tags: ['backend', 'framework']
	},
	{
		name: 'Rails',
		profiecencyLevels: ['knowledgeable'],
		imageUrl: '/assets/skills/rails.png',
		tags: ['ruby', 'framework']
	},
	{
		name: 'HTML',
		profiecencyLevels: ['knowledgeable'],
		imageUrl: '/assets/skills/html.svg',
		tags: []
	},
	{
		name: 'CSS',
		profiecencyLevels: ['proficient'],
		imageUrl: '/assets/skills/css.png',
		tags: []
	},
	{
		name: 'SCSS',
		profiecencyLevels: ['proficient'],
		imageUrl: '/assets/skills/sass.png',
		tags: []
	},
	{
		name: 'Tailwind',
		profiecencyLevels: ['proficient', 'learning'],
		imageUrl: '/assets/skills/tailwind.png',
		tags: ['css']
	},
	{
		name: 'Flutter',
		profiecencyLevels: ['interested'],
		imageUrl: '/assets/skills/flutter.png',
		tags: ['language']
	},
	{
		name: 'Java',
		profiecencyLevels: ['proficient'],
		imageUrl: '/assets/skills/java.png',
		tags: ['language']
	},
	{
		name: 'Nim',
		profiecencyLevels: ['interested'],
		imageUrl: '/assets/skills/nim.png',
		tags: ['language']
	},
	{
		name: 'VS Code',
		profiecencyLevels: ['love', 'knowledgeable'],
		imageUrl: '/assets/skills/vscode.png',
		tags: ['tool']
	},
	{
		name: 'C++',
		profiecencyLevels: ['proficient'],
		imageUrl: '/assets/skills/cpp.png',
		tags: ['language']
	},
	{
		name: 'Prisma',
		profiecencyLevels: ['interested'],
		imageUrl: '/assets/skills/prisma.png',
		tags: ['javascript']
	},
	{
		name: 'Git',
		profiecencyLevels: ['proficient'],
		imageUrl: '/assets/skills/git.png',
		tags: ['tool']
	},
	{
		name: 'SQL',
		profiecencyLevels: ['learning', 'knowledgeable'],
		imageUrl: '/assets/skills/sql.png',
		tags: ['db', 'sql']
	},
	{
		name: 'Go',
		profiecencyLevels: ['interested'],
		imageUrl: '/assets/skills/go.png',
		tags: ['language']
	},
	{
		name: 'Postgres',
		profiecencyLevels: ['proficient'],
		imageUrl: '/assets/skills/postgres.png',
		tags: ['db', 'sql']
	},
	{
		name: 'Linux',
		profiecencyLevels: ['love', 'learning'],
		imageUrl: '/assets/skills/tux.png',
		tags: ['os']
	},
	{
		name: 'Django',
		profiecencyLevels: ['proficient'],
		imageUrl: '/assets/skills/django.svg',
		tags: ['framework', 'python']
	},
	{
		name: 'Crystal',
		profiecencyLevels: ['interested', 'proficient'],
		imageUrl: '/assets/skills/crystal.png',
		tags: ['language']
	},
	{
		name: 'Julia',
		profiecencyLevels: ['interested'],
		imageUrl: '/assets/skills/julia.png',
		tags: ['language']
	},
	{
		name: 'Neovim',
		profiecencyLevels: ['learning'],
		imageUrl: '/assets/skills/neovim.png',
		tags: ['tool']
	}
];

interface ProficiencyFilter {
	profiency: ProfiencyLevel | 'any';
	title: string;
	description: string;
}

const profiencyFilters: ProficiencyFilter[] = [
	{
		profiency: 'love',
		title: 'In Love With',
		description: 'Any of these things would be a dream to work with professionally'
	},
	{
		profiency: 'knowledgeable',
		title: 'Knowledgeable With',
		description: 'Skills that I have cultivated and am highly confident in'
	},
	{
		profiency: 'proficient',
		title: 'Proficient With',
		description: 'Things that I have some experience with'
	},
	{
		profiency: 'learning',
		title: 'Learning',
		description: "Skills I'm currently in the process of cultivating"
	},
	{
		profiency: 'interested',
		title: 'Interested In',
		description: 'Skills that are marked for future interest'
	}
];

export const load = (() => {
	return { skills, profiencyFilters };
}) satisfies PageLoad;
