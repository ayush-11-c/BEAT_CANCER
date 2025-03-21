const string = process.env.NEON_CONEECTING_STRING;
export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: string,
    connectionString: string,
  },
};
