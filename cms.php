<?php
variables([
	VARLinkToSectionHome => true,
	VARSectionsHaveFiles => true,
]);

function site_before_render() {
	autosetPageMenu([VARDontOverwriteLogo => true]);
}
