"use client";

import React, { useState } from "react";

const allProjects = [
	{
		title: "Video QA System (Multimodal RAG)",
		description:
			"Developed an end-to-end video question-answering pipeline. It intelligently extracts key frames, generates audio transcripts, embeds both modalities, and performs vector retrieval. The system supports natural-language queries and provides grounded answers with citations for enhanced reliability.",
		stack: [
			"Python",
			"OpenAI/other embedding models",
			"FAISS/Chroma",
			"Whisper",
			"CLIP",
			"Flask/Streamlit",
		],
		tags: ["AI", "NLP", "Video", "RAG"],
		github: "https://github.com/krupashah/video-qa-system",
	},
	{
		title: "Agentic IVR Experiments (IVR-2)",
		description:
			"Built experimental analytics and routing components for IVR systems, potentially in banking or FAQ-style environments. Includes intent detection workflows and usage reporting.",
		stack: ["Python", "AWS", "Twilio", "pandas", "SQL", "streamlit"],
		tags: ["IVR", "Analytics", "Routing", "Finance"],
		github: "https://github.com/krupashah/agentic-ivr",
	},
	{
		title: "User Engagement & Shopping Behavior Analysis",
		description:
			"An exploratory analytics project for merchandise websites. Analyzes user sessions, navigation flows, and demographics to distill insights into conversion behavior.",
		stack: ["Python", "pandas", "Jupyter", "matplotlib", "seaborn", "scikit-learn"],
		tags: ["User Behavior", "E-commerce", "Data Analysis"],
		github: "https://github.com/krupashah/shopping-behavior-analysis",
	},
	{
		title: "UniRank",
		description:
			"Designed a small-scale ranking database to model university comparisons and selection criteria—great for analysts or counselors making data-driven decisions.",
		stack: ["SQL", "PostgreSQL/SQLite", "Python", "bash"],
		tags: ["Database", "Ranking", "Education"],
		github: "https://github.com/krupashah/unirank",
	},
	{
		title: "Toyota-TechTurtle",
		description:
			"A concept initiative combining AI, IoT, and blockchain to showcase possibilities in operational efficiency and customer experience—complete with architectural visuals and write-ups.",
		stack: [
			"System architecture diagrams",
			"mock APIs",
			"blockchain",
			"IoT design patterns",
			"README documentation",
		],
		github: "https://github.com/krupashah/toyota-techturtle",
	},
	{
		title: "Student-Profile-Evaluator",
		description:
			"Machine learning model that forecasts CGPA and evaluates academic profiles—useful for career planning and early detection of academic risks.",
		stack: ["Python", "pandas", "scikit-learn", "Jupyter"],
		github: "https://github.com/krupashah/student-profile-evaluator",
	},
	{
		title: "Secure-Chain",
		description:
			"Prototype for cross-border remittance leveraging Ethereum smart contracts. Emphasizes compliance, inclusion, and dispute resolution through decentralized finance.",
		stack: ["Solidity", "Truffle/Hardhat", "Ganache", "MetaMask", "JavaScript"],
		github: "https://github.com/krupashah/secure-chain",
	},
	{
		title: "Route-Optimize-Solutions",
		description:
			"A generative AI-powered flight itinerary optimizer that suggests efficient routes based on input constraints—includes conversational chatbot prototype.",
		stack: ["Python", "airline data APIs", "LangChain/OpenAI", "Streamlit/gradio"],
		github: "https://github.com/krupashah/route-optimize-solutions",
	},
	{
		title: "Optimization & Technical Trading Strategies",
		description:
			"A quant-focussed project exploring trading strategies via backtesting and technical indicators with clear HTML/PDF outputs.",
		stack: ["Python", "pandas", "TA-Lib/custom", "backtesting frameworks", "Jinja2"],
		github: "https://github.com/krupashah/optimization-technical-trading-strategies",
	},
	{
		title: "Movie-Analysis",
		description:
			"Used PySpark to analyze movie datasets, determine success factors, and apply classification/clustering algorithms for predictive insights.",
		stack: ["PySpark", "AWS EMR/Databricks", "scikit-learn", "matplotlib/seaborn"],
		github: "https://github.com/krupashah/movie-analysis",
	},
	{
		title: "The-Missing-Migrants",
		description:
			"Exploratory analysis of global migration incidents—identifies dangerous routes and socioeconomic trends using data visualization.",
		stack: ["Python", "pandas", "geopandas", "matplotlib", "plotly/folium"],
		github: "https://github.com/krupashah/the-missing-migrants",
	},
	{
		title: "Kickstarter-Analysis, Missing Migrants and Route Optimization analysis for now",
		description:
			"Built predictive models to estimate funding success using historical project features—covers cleaning, feature engineering, and classification.",
		stack: ["R", "tidyverse", "logistic regression/tree-based models", "RMarkdown"],
		github: "https://github.com/krupashah/kickstarter-analysis",
	},
	{
		title: "Forecasting & Load Management",
		description:
			"Time-series model to predict energy demand and inform load balancing strategies, supporting energy system optimization.",
		stack: ["Python", "statsmodels/Prophet/scikit-learn", "Jupyter", "MAPE/RMSE"],
		github: "https://github.com/krupashah/forecasting-load-management",
	},
	{
		title: "Food-Inspection-Analysis",
		description:
			"Processed city-level inspection data to flag violations and build dashboards for risk tracking.",
		stack: ["Python", "pandas", "numpy", "HTML/JS", "Flask/static site"],
		github: "https://github.com/krupashah/food-inspection-analysis",
	},
	{
		title: "Missing-Migrants (viz)",
		description:
			"Dedicated mapping project complementing ‘The-Missing-Migrants’—focused on geographic scatter visuals for migration patterns.",
		stack: ["Python", "geopandas", "matplotlib/plotly/folium"],
		github: "https://github.com/krupashah/missing-migrants-viz",
	},
	{
		title: "Speech-EmotionRecognition",
		description:
			"Experimented with detecting emotions from audio using classic feature extraction + ML model workflows.",
		stack: ["Python", "librosa", "scikit-learn", "Jupyter"],
		github: "https://github.com/krupashah/speech-emotion-recognition",
	},
];

export default function ProjectsPage() {
	const [search, setSearch] = useState("");
	const [selectedTag, setSelectedTag] = useState("");

	const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags || [])));

	const filteredProjects = allProjects.filter((project) => {
		const matchesSearch =
			project.title.toLowerCase().includes(search.toLowerCase()) ||
			project.description.toLowerCase().includes(search.toLowerCase()) ||
			project.stack.join(" ").toLowerCase().includes(search.toLowerCase());
		const matchesTag = selectedTag
			? (project.tags || []).includes(selectedTag)
			: true;
		return matchesSearch && matchesTag;
	});

	return (
		<main className="max-w-4xl mx-auto py-12 px-4">
			{/* Header Section - matching homepage style */}
			<section className="mb-12 text-center">
				<h1 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
					All Projects
				</h1>
				<p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
					A comprehensive collection of my data science, AI, and analytics projects
				</p>
			</section>
			
			{/* Search and Filter Section - modern styling */}
			<section className="mb-8">
				<div className="flex flex-col md:flex-row gap-4 mb-6">
					<div className="flex-1">
						<input
							type="text"
							placeholder="Search projects..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-soft"
						/>
					</div>
				</div>
				
				{/* Filter Tags */}
				<div className="flex gap-2 flex-wrap">
					<button
						className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all shadow-soft ${
							selectedTag === ""
								? "bg-gray-700 text-white shadow-lg"
								: "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
						}`}
						onClick={() => setSelectedTag("")}
					>
						All Projects
					</button>
					{allTags.map((tag) => (
						<button
							key={tag}
							className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all shadow-soft ${
								selectedTag === tag
									? "bg-gray-700 text-white shadow-lg"
									: "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
							}`}
							onClick={() => setSelectedTag(tag)}
						>
							{tag}
						</button>
					))}
				</div>
			</section>

			{/* Projects Grid - matching homepage card style */}
			<section>
				{filteredProjects.length === 0 ? (
					<div className="text-center py-16">
						<div className="text-gray-500 dark:text-gray-400 text-lg">
							No projects found matching your criteria.
						</div>
					</div>
				) : (
					<div className="grid gap-8">
						{filteredProjects.map((project, idx) => (
							<a
								key={idx}
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="group block"
							>
								<div className="rounded-2xl shadow-soft bg-white dark:bg-gray-900 p-6 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800">
									{/* Project Header */}
									<div className="mb-4">
										<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
											{project.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
											{project.description}
										</p>
									</div>
									
									{/* Tech Stack */}
									<div className="mb-4">
										<div className="flex gap-2 flex-wrap">
											{project.stack.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
									
									{/* Tags */}
									{project.tags && (
										<div className="mb-4">
											<div className="flex gap-2 flex-wrap">
												{project.tags.map((tag) => (
													<span
														key={tag}
														className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
													>
														{tag}
													</span>
												))}
											</div>
										</div>
									)}
									
									{/* GitHub Link */}
									<div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
										<div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
											<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
											</svg>
											<span>View on GitHub</span>
										</div>
										<svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</div>
								</div>
							</a>
						))}
					</div>
				)}
			</section>
		</main>
	);
}
