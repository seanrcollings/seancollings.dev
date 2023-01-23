import type { PageLoad } from './$types';

export type SkillTag = 'knowledgeable' | 'love';

export interface Skill {
	name: string;
	description: string;
	tags: SkillTag[];
	imageUrl: string;
}

const skills: Skill[] = [];

for (let i = 0; i < 10; i++) {
	skills.push({
		name: `skill-${i}`,
		description: `This is skill ${i}`,
		tags: i % 2 == 0 ? ['knowledgeable'] : ['love'],
		imageUrl: '/favicon.png'
	});
}

export const load = (() => {
	return { skills };
}) satisfies PageLoad;
