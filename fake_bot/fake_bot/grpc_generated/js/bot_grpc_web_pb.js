/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var bot_comm_pb = require('./bot_comm_pb.js')

var transaction_pb = require('./transaction_pb.js')
const proto = require('./bot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.BotCommunicatorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.BotCommunicatorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotCommunicator_RemoveBot = new grpc.web.MethodDescriptor(
  '/BotCommunicator/RemoveBot',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.Empty,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotCommunicatorClient.prototype.removeBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotCommunicator/RemoveBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_RemoveBot,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotCommunicatorPromiseClient.prototype.removeBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotCommunicator/RemoveBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_RemoveBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotCommunicator_ResumeBot = new grpc.web.MethodDescriptor(
  '/BotCommunicator/ResumeBot',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.Empty,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotCommunicatorClient.prototype.resumeBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotCommunicator/ResumeBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_ResumeBot,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotCommunicatorPromiseClient.prototype.resumeBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotCommunicator/ResumeBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_ResumeBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotCommunicator_PauseBot = new grpc.web.MethodDescriptor(
  '/BotCommunicator/PauseBot',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.Empty,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotCommunicatorClient.prototype.pauseBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotCommunicator/PauseBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_PauseBot,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotCommunicatorPromiseClient.prototype.pauseBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotCommunicator/PauseBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_PauseBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotCommunicator_StopBot = new grpc.web.MethodDescriptor(
  '/BotCommunicator/StopBot',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.Empty,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotCommunicatorClient.prototype.stopBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotCommunicator/StopBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_StopBot,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotCommunicatorPromiseClient.prototype.stopBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotCommunicator/StopBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_StopBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.Empty>}
 */
const methodDescriptor_BotCommunicator_Ping = new grpc.web.MethodDescriptor(
  '/BotCommunicator/Ping',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.Empty,
  bot_comm_pb.Empty,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotCommunicatorClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotCommunicator/Ping',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_Ping,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.BotCommunicatorPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotCommunicator/Ping',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RenameRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotCommunicator_RenameBot = new grpc.web.MethodDescriptor(
  '/BotCommunicator/RenameBot',
  grpc.web.MethodType.UNARY,
  proto.RenameRequest,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.RenameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.RenameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotCommunicatorClient.prototype.renameBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotCommunicator/RenameBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_RenameBot,
      callback);
};


/**
 * @param {!proto.RenameRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotCommunicatorPromiseClient.prototype.renameBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotCommunicator/RenameBot',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_RenameBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotCommunicator_ResponseForRequestedTrade = new grpc.web.MethodDescriptor(
  '/BotCommunicator/ResponseForRequestedTrade',
  grpc.web.MethodType.UNARY,
  transaction_pb.Transaction,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotCommunicatorClient.prototype.responseForRequestedTrade =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotCommunicator/ResponseForRequestedTrade',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_ResponseForRequestedTrade,
      callback);
};


/**
 * @param {!proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotCommunicatorPromiseClient.prototype.responseForRequestedTrade =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotCommunicator/ResponseForRequestedTrade',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_ResponseForRequestedTrade);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transactions,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotCommunicator_SendOpenTrades = new grpc.web.MethodDescriptor(
  '/BotCommunicator/SendOpenTrades',
  grpc.web.MethodType.UNARY,
  transaction_pb.Transactions,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.Transactions} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.Transactions} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotCommunicatorClient.prototype.sendOpenTrades =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotCommunicator/SendOpenTrades',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_SendOpenTrades,
      callback);
};


/**
 * @param {!proto.Transactions} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotCommunicatorPromiseClient.prototype.sendOpenTrades =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotCommunicator/SendOpenTrades',
      request,
      metadata || {},
      methodDescriptor_BotCommunicator_SendOpenTrades);
};


module.exports = proto;

