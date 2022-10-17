import * as ackeeTracker from "ackee-tracker";
export declare var ackeeInstance: ackeeTracker.AckeeInstance | undefined;
/**
 * Use Ackee in React.
 * Creates an instance once and a new record every time the pathname changes.
 * Safely no-ops during server-side rendering.
 * @param {String} pathname - Current path.
 * @param {Object} environment - Object containing the URL of the Ackee server and the domain id.
 * @param {ackeeTracker.TrackingOptions} options - Ackee options.
 */
export declare const useAckee: (pathname: string, environment: {
    server: string;
    domainId: string;
}, options?: ackeeTracker.TrackingOptions) => void;
export default useAckee;
