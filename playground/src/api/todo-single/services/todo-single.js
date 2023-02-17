'use strict';

/**
 * todo-single service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::todo-single.todo-single');
