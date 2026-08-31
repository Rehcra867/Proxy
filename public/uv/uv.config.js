/* Ultraviolet Configuration */
self.__uv$config = {
  prefix: '/service/',
  bare: '/bare/',
  encodeUrl: Ultraviolet.prototype.encodeUrl,
  decodeUrl: Ultraviolet.prototype.decodeUrl,
  handler: '/uv/uv.handler.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/sw.js',
};
