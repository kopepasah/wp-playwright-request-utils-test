/**
 * External dependencies
 */
import { test, expect, request } from '@playwright/test';

/**
 * WordPress dependencies
 */
import { RequestUtils } from '@wordpress/e2e-test-utils-playwright';

test( 'test get post from RequestUtils on custom port', async ( { page } ) => {
	const requestUtils = await RequestUtils.setup( {
		baseURL: 'http://localhost:8181',
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

test( 'test get post from RequestUtils on custom test port', async ( { page } ) => {
	const requestUtils = await RequestUtils.setup( {
		baseURL: 'http://localhost:8189',
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
