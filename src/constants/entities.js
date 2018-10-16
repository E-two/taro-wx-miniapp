import { schema } from 'normalizr';

// We use this Normalizr schemas to transform API responses from a nested form
// Read more about Normalizr: https://github.com/paularmstrong/normalizr

export const testSchema = new schema.Entity('tests', {}, {
  idAttribute: tests => `${tests.id}`,
});

// Schemas for API responses.
export const Schemas = {
  TESTS: testSchema,
  TESTS_ARRAY: [testSchema]
};
