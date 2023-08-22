/* Create Clone by @leograchov */

/* This script creates a clone using Figma API. The following script will clone the selection and add "clone" to it's name. */

/* Whether you want to create copies, or want to clone it for own purpose, it's your choice. */

const page = figma.currentPage
const [selection] = page.selection;

if (selection) {
	const clone = selection.clone();
	clone.name = `${selection.name} - clone`;
	/* Change position */
	clone.x += 120
	clone.y += 120
}
else {
 figma.notify("Nothing's selected")
}

figma.closePlugin();