const SkeletonLoader = (): JSX.Element => {
	return (
		<figure className="animate-pulse grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-1 border dark:border-slate-800 shadow rounded-xl w-full mx-auto overflow-hidden">
			<div className="rounded-none bg-gray-400 dark:bg-slate-700 md:max-w-xs w-full h-64 md:h-48"></div>
			<div className="grid grid-cols-1 lg:grid-cols-1 lg:grid-auto-rows-auto py-8 md:py-3 lg:py-3 px-5 lg:px-3">
				<div className="grid grid-cols-2 gap-1 mb-3">
					<div className="h-3 bg-gray-400 dark:bg-slate-700 rounded col-span-1"></div>
					<div className="h-4 bg-gray-400 dark:bg-slate-700 rounded col-span-3"></div>
				</div>
				<div className="grid grid-cols-2 gap-1 mb-4">
					<div className="h-3 bg-gray-400 dark:bg-slate-700 rounded col-span-3"></div>
					<div className="h-4 bg-gray-400 dark:bg-slate-700 rounded col-span-1"></div>
				</div>
				<div className="grid grid-cols-3 gap-1">
					<div className="h-3 bg-gray-400 dark:bg-slate-700 rounded col-span-1"></div>
					<div className="h-4 bg-gray-400 dark:bg-slate-700 rounded col-span-3"></div>
				</div>
			</div>
		</figure>
	)
}

export default SkeletonLoader
