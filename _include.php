<?php
autoSetNode(1, __DIR__, [
	'nodeSiteName' => humanize(getPageParameterAt(1, '') . ' ' . variable('node')),
	DontOverwriteLogo => true,
]);

function node_before_render() {
	variables([
		'nodeHumanizeReplaces' => siteHumanize(ATNODE),
		'nodeItemHumanizeReplaces' => getPageParameterAt(1) ? siteHumanize(ATNODEITEM) : [],
	]);
}
