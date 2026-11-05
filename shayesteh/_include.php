<?php
autoSetNode(1, __DIR__, [DontOverwriteLogo => true]);

if (hasPageParameter('family') || hasPageParameter('gani')) {
	variable('skip-container-for-this-page', true);
	//addStyle('tree', assetManager::section);
	addStyle('styles');
	addScript('scripts');
}
