const instance = require("node-cache-redis");
const key = process.env.DATA_VAR || "salesloftApiV2"
const feature_redis = process.env.REDIS_ENABLE || false
module.exports = { instance: instance, key: key,
                   feature_redis: feature_redis }