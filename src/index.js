'use strict'

const { useMemo, useEffect } = require('react')
const ackeeTracker = require('ackee-tracker')

/**
 * Use Ackee in React.
 * Creates an instance once and a new record every time the pathname changes.
 * @param {?String} pathname - Current path.
 * @param {Object} environment - Object containing the URL of the Ackee server and the domain id.
 * @param {?Object} opts - Ackee options.
 */
const useAckee = function(pathname, environment, opts = {}) {

	const instance = useMemo(() => {

		return ackeeTracker.create(environment.server, opts)

	}, [ environment.server, opts.detailed, opts.ignoreLocalhost, opts.ignoreOwnVisits ])

	useEffect(() => {

		const hasPathname = (
			pathname != null &&
			pathname !== ''
		)

		if (hasPathname === false) return

		const attributes = ackeeTracker.attributes(opts.detailed)
		const url = new URL(pathname, location)

		return instance.record(environment.domainId, {
			...attributes,
			siteLocation: url.href
		}).stop

	}, [ instance, pathname, environment.domainId ])

}

module.exports = useAckee
module.exports.useAckee = useAckee