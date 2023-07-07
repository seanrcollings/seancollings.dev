interface Project {
	name: string;
	description: string;
	icon: string;
	link: string;
}

const PROJECTS_URL =
	'https://gist.githubusercontent.com/seanrcollings/5a996bf4d78027e2255336ec000b2bd3/raw/projects.json';

export async function load({ fetch }) {
	const res = await fetch(PROJECTS_URL);
	const projects: Project[] = await res.json();
	console.log(projects);

	return { projects };
}
