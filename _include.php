<?php
define('NODEPATH', __DIR__);

variables([
	assetKey(NODEASSETS) => fileUrl(variable('section') . '/' . variable('node') . '/assets/'),
	'nodeSiteName' => humanize(getPageParameterAt(1, '') . ' ' . variable('node')),
	'nodeSafeName' => variable('safeName') . '-' . variable('node'),
	'submenu-at-node' => true,
	'nodeHumanizeReplaces' => siteHumanize(ATNODE),
	'nodeItemHumanizeReplaces' => getPageParameterAt(1) ? siteHumanize(ATNODEITEM) : [],
]);
