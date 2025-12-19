<?php
autoSetNode(1, __DIR__, [DontOverwriteLogo => true]);

if (hasPageParameter('family') || hasPageParameter('gani')) {
	variable('skip-container-for-this-page', true);
	//addStyle('tree', SECTIONASSETS);
	addStyle('styles', SECTIONASSETS);
	addScript('scripts', SECTIONASSETS);
}
