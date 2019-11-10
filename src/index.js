'use strict'

const { useRef, useEffect } = require('react')
const ackeeTracker = require('ackee-tracker')

/**
 * Use Ackee in React.
 * Creates an instance once and a new record every time the pathname changes.
 * @param {?String} pathname - Current path.
 * @param {Object} server - Server details.
 * @param {?Object} opts - Ackee options.
 */
const useAckee = function(pathname, server, opts = {}) {

	const instanceRef = useRef()

	useEffect(() => {

		instanceRef.current = ackeeTracker.create(server, opts)

	}, [])

	useEffect(() => {

		const hasPathname = (
			pathname != null &&
			pathname !== ''
		)

		if (hasPathname === false) return

		const attributes = ackeeTracker.attributes(opts.detailed)
		const url = new URL(pathname, location)

		instanceRef.current.record({
			...attributes,
			siteLocation: url.href
		})

	}, [ pathname ])

}

module.exports = useAckee
module.exports.useAckee = useAckee