<?php
define('NODEPATH', __DIR__);

variables([
	assetKey(NODEASSETS) => fileUrl(variable('section') . '/' . variable('node') . '/assets/'),
	'nodeSiteName' => humanize(getPageParameterAt(1, '') . ' ' . variable('node')),
	'nodeSafeName' => variable('node'),
	'submenu-at-node' => getPageParameterAt(1),
	'nodeHumanizeReplaces' => siteHumanize(ATNODE),
	'nodeItemHumanizeReplaces' => getPageParameterAt(1) ? siteHumanize(ATNODEITEM) : [],
]);

addStyle('tree', NODEASSETS);
