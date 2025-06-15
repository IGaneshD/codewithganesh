import React from "react";

const blogPosts = [
	{
		title: "10 React Hooks You Should Know in 2023",
		category: "Web Development",
		readTime: "5 min read",
		description:
			"Explore the most useful React hooks that will improve your code quality and development efficiency.",
		author: "Ganesh",
		tagColor:
			"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
	},
	{
		title: "Mastering Node.js Streams for Scalable Apps",
		category: "Backend",
		readTime: "7 min read",
		description:
			"A practical guide to using Node.js streams for efficient data processing in your backend projects.",
		author: "Ganesh",
		tagColor:
			"bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
	},
];

const categories = [
	"All Posts",
	"Web Development",
	"Backend",
	"AI & ML",
	"Career Tips",
];

export default function BlogSection() {
	return (
		<section
			id="blog"
			className="py-20 bg-white dark:bg-tech-dark transition-theme"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<div className="inline-flex items-center justify-center mb-4 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full">
						<span className="text-primary font-medium text-sm">
							Latest Articles
						</span>
					</div>
					<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
						From Our Blog
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-200">
						Dive deeper into coding concepts with our detailed blog posts
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{categories.map((cat, idx) => (
						<button
							key={cat}
							className={
								idx === 0
									? "bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
									: "bg-white dark:bg-tech-dark text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium transition-theme shadow-sm border border-slate-200 dark:border-slate-700"
							}
						>
							{cat}
						</button>
					))}
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{blogPosts.map((post, idx) => (
						<div
							key={idx}
							className="bg-white dark:bg-tech-dark rounded-2xl shadow-lg overflow-hidden transition-theme border border-slate-100 dark:border-slate-700 hover:shadow-xl"
						>
							<div className="md:flex h-full">
								<div className="md:w-1/3 bg-slate-200 dark:bg-slate-700 md:h-auto h-48 flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-12 w-12 text-slate-400 dark:text-slate-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								</div>
								<div className="p-6 md:w-2/3 flex flex-col">
									<div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
										<span
											className={`${post.tagColor} px-2 py-1 rounded-md text-xs font-medium`}
										>
											{post.category}
										</span>
										<span className="mx-2">•</span>
										<span>{post.readTime}</span>
									</div>
									<a
										href="#"
										className="block mt-1 flex-grow"
									>
										<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
											{post.title}
										</h3>
										<p className="text-slate-600 dark:text-slate-400">
											{post.description}
										</p>
									</a>
									<div className="mt-4 flex items-center justify-between">
										<div className="flex items-center">
											<div className="h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-600"></div>
											<span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
												{post.author}
											</span>
										</div>
										<a
											href="#"
											className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-theme text-sm group"
										>
											Read More
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
