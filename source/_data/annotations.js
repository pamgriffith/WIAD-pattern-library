var comments = {
"comments" : [
	{
		"el": "h1",
		"title" : "Heading 1",
		"comment": "heading level 1 becomes the size of heading level 2 in narrow contexts. This happens automatically on small screens with media queries, but narrow panels like the hero area need to do it with extra code."
	},
	{
		"el": "dl.long",
		"title": "Multi-column lists",
		"comment": "Unordered lists and definition lists can span multiple columns if the contents are short and the lists are long. List items will span 3 columns at the widest breakpoint, or drop to 2 or 1 at smaller sizes. In the half-column or column with sidebar elements there will only be 2 columns at most; if other grid sizes are added, you will need to adjust the css for multi-column lists to include them."
	},
	{
		"el": ".photo-list",
		"title": "Photo list",
		"comment": "Shows 6 images side-by-side at full width, or rows of 3 on small screens and in half-column and column with sidebar. You may opt to put only 3 in if the block appears only in the half-column or column with sidebar so there is only one row of images. If other grid sizes are added, you will need to adjust the css for multi-column lists to include them."
	},
	{
		"el": ".team-list",
		"title": "Team List",
		"comment": "The team list can include any number of people. The last row will be centered if there are fewer than fit in the row. This block is meant to span the whole screen, there are no versions of it for narrower containers. At full width, there are 4 columns. On narrow screens there are 2."
	},
	{
		"el": ".content-with-sidebar",
		"title": "Content with Sidebar",
		"comment": "The main content area can contain as many sections as you like. Sidebar sections should be placed inside the aside element. The sidebar will be placed below the content on small screens."
	},
	{
		"el": ".col2",
		"title": "2 Column",
		"comment": "This is meant to contain only 2 sections of roughly equal length. They will be placed next to each other if the screen is wide enough, otherwise the first one will be above the second one."
	}
]
};