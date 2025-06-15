import React from "react";

const videos = [
	{
		title: "Building a Responsive Dashboard with React and Tailwind CSS",
		time: "15:42",
		date: "2 days ago",
		views: "4.2K views",
		tags: [
			{
				label: "React",
				color:
					"bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
			},
			{
				label: "Tailwind",
				color:
					"bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
			},
		],
	},
	{
		title: "Python for Beginners: Building Your First API with FastAPI",
		time: "22:17",
		date: "1 week ago",
		views: "7.8K views",
		tags: [
			{
				label: "Python",
				color:
					"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
			},
			{
				label: "API",
				color:
					"bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
			},
		],
	},
	{
		title: "JavaScript Fundamentals: Understanding Promises and Async/Await",
		time: "18:05",
		date: "3 days ago",
		views: "6.1K views",
		tags: [
			{
				label: "JavaScript",
				color:
					"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
			},
			{
				label: "Async",
				color:
					"bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
			},
		],
	},
];

export default function VideosSection() {
	return (
		<section
			id="videos"
			className="py-20 bg-slate-50 dark:bg-tech-dark transition-theme"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<div className="inline-flex items-center justify-center mb-4 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full">
						<span className="text-primary font-medium text-sm">
							Latest Videos
						</span>
					</div>
					<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
						Recent Tutorials
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-200">
						Check out our most recent tutorials and coding sessions to level up
						your skills
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{videos.map((video, idx) => (
						<div
							key={idx}
							className="video-card bg-white dark:bg-tech-dark rounded-2xl shadow-lg overflow-hidden transition-theme border border-slate-100 dark:border-slate-700"
						>
							<div className="relative">
								<div className="w-full h-0 pb-[56.25%] relative bg-slate-200 dark:bg-slate-800">
									<div className="absolute inset-0 flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-16 w-16 text-primary play-button"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</div>
								<div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md">
									{video.time}
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
									{video.title}
								</h3>
								<div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 mr-1"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span>{video.date}</span>
									<span className="mx-2">•</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 mr-1"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
									<span>{video.views}</span>
								</div>
								<div className="flex flex-wrap gap-2">
									{video.tags.map((tag, i) => (
										<span
											key={i}
											className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
										>
											{tag.label}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
