'use strict'

const { useMemo, useEffect } = require('react')
const ackeeTracker = require('ackee-tracker')

const isBrowser = typeof window !== 'undefined'

/**
 * Use Ackee in React.
 * Creates an instance once and a new record every time the pathname changes.
 * Safely no-ops during server-side rendering.
 * @param {?String} pathname - Current path.
 * @param {Object} environment - Object containing the URL of the Ackee server and the domain id.
 * @param {?Object} options - Ackee options.
 */
const useAckee = function(pathname, environment, options = {}) {
	const instance = useMemo(() => {
		if (isBrowser === false) return

		return ackeeTracker.create(environment.server, options)
	}, [ environment.server, options.detailed, options.ignoreLocalhost, options.ignoreOwnVisits ])

	useEffect(() => {
		if (instance == null) {
			console.warn('Skipped record creation because useAckee has been called in a non-browser environment')
			return
		}

		const hasPathname = (
			pathname != null &&
			pathname !== ''
		)

		if (hasPathname === false) {
			console.warn('Skipped record creation because useAckee has been called without pathname')
			return
		}

		const attributes = ackeeTracker.attributes(options.detailed)
		const url = new URL(pathname, location)

		return instance.record(environment.domainId, {
			...attributes,
			siteLocation: url.href,
		}).stop
	}, [ instance, pathname, environment.domainId ])
}

module.exports = useAckee
module.exports.useAckee = useAckee