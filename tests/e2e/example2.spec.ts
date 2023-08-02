/**
 * External dependencies
 */
import { test } from '@playwright/test';

/**
 * WordPress dependencies
 */
import { RequestUtils } from '@wordpress/e2e-test-utils-playwright';

test( 'test get post from RequestUtils multiple requests 2', async ( { page } ) => {
	const requestUtils = await RequestUtils.setup( {
		user: {
			username: 'admin',
			password: 'password',
		},
	} );

	const posts = await requestUtils.rest( {
		path: '/wp/v2/posts',
		params: {
			per_page: 1,
			status: 'publish',
		},
	} );

	console.log( posts );
} );

