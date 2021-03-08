import withYup from 'next-yup';
import * as yup from 'yup';

/**
 * Schema to validate the query/headers/body against.
 * By default, next-yup attempts to type cast values to their
 * proper types (e.g. string "boolean" to actual boolean value)
 */
const helloSchema = yup.object().shape({
  name: yup.string().required(),
});

/**
 * Next.js API route documentation: https://nextjs.org/docs/api-routes/introduction
 * next-yup for schema validation: https://github.com/iffa/next-yup
 *
 * Call this example API route with:
 * GET http://localhost:3000/api/hello?name=John%20Doe
 */
export default withYup()({ query: helloSchema }, (req, res, data) => {
  return res.status(200).json({ name: data.query['name'] });
});
