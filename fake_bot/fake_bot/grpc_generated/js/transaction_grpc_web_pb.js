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
const proto = require('./transaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TransactionCommunicatorClient =
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
proto.TransactionCommunicatorPromiseClient =
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
 *   !proto.BotRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_TransactionCommunicator_BotStopped = new grpc.web.MethodDescriptor(
  '/TransactionCommunicator/BotStopped',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotRequest,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.BotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TransactionCommunicatorClient.prototype.botStopped =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TransactionCommunicator/BotStopped',
      request,
      metadata || {},
      methodDescriptor_TransactionCommunicator_BotStopped,
      callback);
};


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.TransactionCommunicatorPromiseClient.prototype.botStopped =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TransactionCommunicator/BotStopped',
      request,
      metadata || {},
      methodDescriptor_TransactionCommunicator_BotStopped);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_TransactionCommunicator_BotRemoved = new grpc.web.MethodDescriptor(
  '/TransactionCommunicator/BotRemoved',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotRequest,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.BotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TransactionCommunicatorClient.prototype.botRemoved =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TransactionCommunicator/BotRemoved',
      request,
      metadata || {},
      methodDescriptor_TransactionCommunicator_BotRemoved,
      callback);
};


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.TransactionCommunicatorPromiseClient.prototype.botRemoved =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TransactionCommunicator/BotRemoved',
      request,
      metadata || {},
      methodDescriptor_TransactionCommunicator_BotRemoved);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotAddress,
 *   !proto.BotResponse>}
 */
const methodDescriptor_TransactionCommunicator_OpenTrades = new grpc.web.MethodDescriptor(
  '/TransactionCommunicator/OpenTrades',
  grpc.web.MethodType.UNARY,
  proto.BotAddress,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.BotAddress} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.BotAddress} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TransactionCommunicatorClient.prototype.openTrades =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TransactionCommunicator/OpenTrades',
      request,
      metadata || {},
      methodDescriptor_TransactionCommunicator_OpenTrades,
      callback);
};


/**
 * @param {!proto.BotAddress} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.TransactionCommunicatorPromiseClient.prototype.openTrades =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TransactionCommunicator/OpenTrades',
      request,
      metadata || {},
      methodDescriptor_TransactionCommunicator_OpenTrades);
};


module.exports = proto;

