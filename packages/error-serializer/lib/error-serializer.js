/**
 * Imports for this file
 *
 * @category Packages/Error Serializer
 * @subcategory Serializer
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

/**
 * @category Packages/Error Serializer
 * @subcategory Serializer
 *
 * @async
 * @function errorSerializer
 *
 * @param {Error} [error] - Error Object to be serialized
 *
 * @returns {object} - serialized error object
 *
 * @description
 * Recursively serializes an error till it reaches the leaf nodes.
 * Leaf nodes are defined as errors that are:
 * - Not AggregateError objects
 * - Do not contain a `cause`
 * - Have a `cause` that is not an Error object
 */
const errorSerializer = function errorSerializer(error) {
	let printFullStack = true;
	const serializedError = {
		code: error?.code,
		message: error?.message,
		location: error?.stack?.split?.('\n')?.[1]?.trim?.()
	};

	if (error instanceof AggregateError) {
		printFullStack = false;
		serializedError['errors'] = [];
		for (const subError of error?.errors ?? []) {
			serializedError?.['errors']?.push?.(errorSerializer?.(subError));
		}
	}

	if (error?.cause) {
		printFullStack = printFullStack && false;

		if (error.cause instanceof Error) {
			serializedError['cause'] = errorSerializer?.(error.cause);
		} else {
			printFullStack = true;
			serializedError['cause'] = safeJsonStringify?.(
				error.cause,
				undefined,
				'\t'
			);
		}
	}

	for (const customProperty in error) {
		if (customProperty === 'code') continue;
		if (customProperty === 'cause') continue;
		if (customProperty === 'errors') continue;
		if (customProperty === 'message') continue;

		if (!Object?.hasOwn?.(error, customProperty)) continue;
		// eslint-disable-next-line security/detect-object-injection
		if (error[customProperty] instanceof Error) {
			printFullStack = false;

			// eslint-disable-next-line security/detect-object-injection
			serializedError[customProperty] = errorSerializer?.(
				// eslint-disable-next-line security/detect-object-injection
				error?.[customProperty]
			);
		} else {
			// eslint-disable-next-line security/detect-object-injection
			serializedError[customProperty] = safeJsonStringify?.(
				// eslint-disable-next-line security/detect-object-injection
				error?.[customProperty],
				undefined,
				'\t'
			);
		}
	}

	if (printFullStack) {
		const stackArray = error?.stack
			?.split?.('\n')
			?.map?.((stackLocation) => {
				return stackLocation?.trim?.();
			});

		// The first line is redundant...
		stackArray?.shift?.();
		serializedError['stack'] = stackArray;
	}

	return serializedError;
};

/**
 * Creates an error suitable for propagating one or more underlying failures.
 *
 * @category Packages/Error Serializer
 * @subcategory Serializer
 *
 * @param {string} message - Message and error code for the propagated error.
 * @param {Error|Error[]} errors - One or more underlying errors to wrap.
 * @returns {Error|AggregateError} The propagated error instance.
 */
const createErrorForPropagation = function createErrorForPropagation(
	message,
	errors
) {
	let propagatedError;

	if (!Array?.isArray?.(errors)) {
		errors = [errors];
	}

	if (errors?.length === 0) {
		propagatedError = new Error(message);
	}

	if (errors?.length === 1) {
		propagatedError = errors[0]
			? new Error(message, {
					cause: errors?.pop?.()
				})
			: new Error(message);
	}

	if (errors?.length > 1) {
		propagatedError = new AggregateError(errors, message);
	}

	propagatedError.code = message;
	return propagatedError;
};

export { createErrorForPropagation, errorSerializer };
