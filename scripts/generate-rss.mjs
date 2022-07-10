import { writeFileSync } from 'fs'
import RSS from 'rss'

async function generate() {
	const feed = new RSS({
		title: 'The Ninja Turtles API',
		site_url: 'https://ninjaturtlesapi.com',
		feed_url: 'https://ninjaturtlesapi.com/feed.xml',
	})

	allSite.map((doc) => {
		feed.item({
			title: doc.title,
			url: `https://ninjaturtlesapi.com/${doc.slug}`,
			date: doc.publishedAt,
			description: doc.description,
		})
	})

	writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
