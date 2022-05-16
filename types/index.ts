export interface Tag {
	color: string;
	id: string;
	name: string;
}

export interface BlogPost {
	id: string;
	slug: string;
	cover: string;
	title: string;
	tags: Tag[];
	description: string;
	date: string;
}

export interface PostPage {
	post: BlogPost;
	markdown: string;
}