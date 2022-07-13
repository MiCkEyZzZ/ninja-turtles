import React, { FC, memo } from 'react'

import { ITestimonial } from '../interfaces'

const Testimonial: FC<ITestimonial> = memo(({ testimonial }: ITestimonial): JSX.Element => {
	return (
		<li className="text-sm leading-6">
			<figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
				<blockquote className="mt-6 font-normal text-slate-700 dark:text-slate-250">
					<p>{testimonial.message}</p>
				</blockquote>
				<figcaption className="flex items-center space-x-4">
					<img
						src={testimonial.image}
						alt=""
						className="flex-none w-14 h-14 rounded-full object-cover"
						loading="lazy"
					/>
					<div className="flex-auto">
						<div className="text-base font-semibold text-slate-900 dark:text-gray-0">
							<a href="https://twitter.com/ryanflorence/status/1187951799442886656">
								<span className="absolute inset-0"></span>
								{testimonial.name}
							</a>
						</div>
						<div className="mt-0.5 font-semibold text-slate-500 dark:text-slate-400">{testimonial.position}</div>
					</div>
				</figcaption>
			</figure>
		</li>
	)
})

export default Testimonial
