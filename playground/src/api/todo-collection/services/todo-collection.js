'use strict';

/**
 * todo-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::todo-collection.todo-collection');
