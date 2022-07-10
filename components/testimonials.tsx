import { FC } from 'react'

const Testimonials: FC = () => {
	return (
		<section className="relative w-full mx-auto px-3 sm:px-6 md:px-8 lg:pb-32 focus:outline-none">
			<h2 className="sr-only">Рекомендации</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-screen-2xl max-h-[33rem] m-auto">
				<ul className="space-y-8">
					<li className="text-sm leading-6">
						<figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
							<blockquote className="mt-6 text-slate-700 dark:text-slate-300">
								<p>I feel like an idiot for not using Tailwind CSS until now.</p>
							</blockquote>
							<figcaption className="flex items-center space-x-4">
								<img src="#" alt="" className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" />
								<div className="flex-auto">
									<div className="text-base font-semibold text-slate-900 dark:text-gray-0">
										<a href="https://twitter.com/ryanflorence/status/1187951799442886656">
											<span className="absolute inset-0"></span>Дмитрий Горбунов
										</a>
									</div>
									<div className="mt-0.5">Remix &amp; React Training</div>
								</div>
							</figcaption>
						</figure>
					</li>
					<li className="text-sm leading-6">
						<figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
							<blockquote className="mt-6 text-slate-700 dark:text-slate-300">
								<p>
									If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind
									CSS.
								</p>
							</blockquote>
							<figcaption className="flex items-center space-x-4">
								<img src="#" alt="" className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" />
								<div className="flex-auto">
									<div className="text-base font-semibold text-slate-900 dark:text-gray-0">
										<a href="https://twitter.com/rauchg/status/1225611926320738304">
											<span className="absolute inset-0"></span>Анатолий Шипицын
										</a>
									</div>
									<div className="mt-0.5">Vercel</div>
								</div>
							</figcaption>
						</figure>
					</li>
				</ul>
				<ul className="space-y-8">
					<li className="text-sm leading-6">
						<figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
							<blockquote className="mt-6 text-slate-700 dark:text-slate-300">
								<p>
									Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS
									and you use flex, grid, etc. but just quicker to write and maintain.
								</p>
							</blockquote>
							<figcaption className="flex items-center space-x-4">
								<img src="#" alt="" className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" />
								<div className="flex-auto">
									<div className="text-base font-semibold text-slate-900 dark:text-gray-0">
										<a href="https://twitter.com/debs_obrien/status/1243255468241420288">
											<span className="absolute inset-0"></span>Андрей Коваленко
										</a>
									</div>
									<div className="mt-0.5">Senior Program Manager at Тиньков Банк</div>
								</div>
							</figcaption>
						</figure>
					</li>
					<li className="text-sm leading-6">
						<figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
							<blockquote className="mt-6 text-slate-700 dark:text-slate-300">
								<p>
									I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently.
									It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with
									it and you’ll realize semantic CSS was a 20 year mistake.
								</p>
							</blockquote>
							<figcaption className="flex items-center space-x-4">
								<img
									src="#"
									alt=""
									className="flex-none w-14 h-14 rounded-full object-cover"
									loading="lazy"
								/>
								<div className="flex-auto">
									<div className="text-base font-semibold text-slate-900 dark:text-gray-0">
										<a href="https://twitter.com/frontendben/status/1468687028036452363">
											<span className="absolute inset-0"></span>Игорь Комаров
										</a>
									</div>
									<div className="mt-0.5">Developer</div>
								</div>
							</figcaption>
						</figure>
					</li>
				</ul>
				<ul className="space-y-8">
					<li className="text-sm leading-6">
						<figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
							<blockquote className="mt-6 text-slate-700 dark:text-slate-300">
								<p>Skip to the end. Use @tailwindcss.</p>
							</blockquote>
							<figcaption className="flex items-center space-x-4">
								<img
									src="#"
									alt=""
									className="flex-none w-14 h-14 rounded-full object-cover"
									loading="lazy"
								/>
								<div className="flex-auto">
									<div className="text-base font-semibold text-slate-900 dark:text-gray-0">
										<a href="https://twitter.com/kentcdodds/status/1468692023158796289">
											<span className="absolute inset-0"></span>Сергей Шадрин
										</a>
									</div>
									<div className="mt-0.5">Developer and Educator</div>
								</div>
							</figcaption>
						</figure>
					</li>
					<li className="text-sm leading-6">
						<figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
							<blockquote className="mt-6 text-slate-700 dark:text-slate-300">
								<p>
									I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS
									itself after I started working with Tailwind. Creating web pages is 5x faster now.
								</p>
							</blockquote>
							<figcaption className="flex items-center space-x-4">
								<img src="#" alt="" className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" />
								<div className="flex-auto">
									<div className="text-base font-semibold text-slate-900 dark:text-gray-0">
										<a href="https://twitter.com/shrutibalasa">
											<span className="absolute inset-0"></span>Евгений Белинский
										</a>
									</div>
									<div className="mt-0.5">Full Stack Web Developer &amp; Tech Educator</div>
								</div>
							</figcaption>
						</figure>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Testimonials
