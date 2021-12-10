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


var transaction_pb = require('./transaction_pb.js')

var bot_comm_pb = require('./bot_comm_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./statistics_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.StatisticsServiceCommunicatorClient =
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
proto.StatisticsServiceCommunicatorPromiseClient =
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
 *   !proto.BotsDataRequest,
 *   !proto.TransactionsExtended>}
 */
const methodDescriptor_StatisticsServiceCommunicator_GetAllUserTransactions = new grpc.web.MethodDescriptor(
  '/StatisticsServiceCommunicator/GetAllUserTransactions',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotsDataRequest,
  transaction_pb.TransactionsExtended,
  /**
   * @param {!proto.BotsDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  transaction_pb.TransactionsExtended.deserializeBinary
);


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TransactionsExtended)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TransactionsExtended>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StatisticsServiceCommunicatorClient.prototype.getAllUserTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetAllUserTransactions',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetAllUserTransactions,
      callback);
};


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TransactionsExtended>}
 *     Promise that resolves to the response
 */
proto.StatisticsServiceCommunicatorPromiseClient.prototype.getAllUserTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetAllUserTransactions',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetAllUserTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.TransactionsExtended>}
 */
const methodDescriptor_StatisticsServiceCommunicator_GetBotTransactions = new grpc.web.MethodDescriptor(
  '/StatisticsServiceCommunicator/GetBotTransactions',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotRequest,
  transaction_pb.TransactionsExtended,
  /**
   * @param {!proto.BotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  transaction_pb.TransactionsExtended.deserializeBinary
);


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TransactionsExtended)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TransactionsExtended>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StatisticsServiceCommunicatorClient.prototype.getBotTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetBotTransactions',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetBotTransactions,
      callback);
};


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TransactionsExtended>}
 *     Promise that resolves to the response
 */
proto.StatisticsServiceCommunicatorPromiseClient.prototype.getBotTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetBotTransactions',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetBotTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.BotStatistics>}
 */
const methodDescriptor_StatisticsServiceCommunicator_GetBotStatistics = new grpc.web.MethodDescriptor(
  '/StatisticsServiceCommunicator/GetBotStatistics',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotRequest,
  proto.BotStatistics,
  /**
   * @param {!proto.BotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BotStatistics.deserializeBinary
);


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotStatistics)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotStatistics>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StatisticsServiceCommunicatorClient.prototype.getBotStatistics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetBotStatistics',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetBotStatistics,
      callback);
};


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotStatistics>}
 *     Promise that resolves to the response
 */
proto.StatisticsServiceCommunicatorPromiseClient.prototype.getBotStatistics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetBotStatistics',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetBotStatistics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotsDataRequest,
 *   !proto.OverallStatistics>}
 */
const methodDescriptor_StatisticsServiceCommunicator_GetBotsOverallStatistics = new grpc.web.MethodDescriptor(
  '/StatisticsServiceCommunicator/GetBotsOverallStatistics',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotsDataRequest,
  proto.OverallStatistics,
  /**
   * @param {!proto.BotsDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OverallStatistics.deserializeBinary
);


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.OverallStatistics)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OverallStatistics>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StatisticsServiceCommunicatorClient.prototype.getBotsOverallStatistics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetBotsOverallStatistics',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetBotsOverallStatistics,
      callback);
};


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OverallStatistics>}
 *     Promise that resolves to the response
 */
proto.StatisticsServiceCommunicatorPromiseClient.prototype.getBotsOverallStatistics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetBotsOverallStatistics',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetBotsOverallStatistics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotsDataRequest,
 *   !proto.UserAssets>}
 */
const methodDescriptor_StatisticsServiceCommunicator_GetUserAssets = new grpc.web.MethodDescriptor(
  '/StatisticsServiceCommunicator/GetUserAssets',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotsDataRequest,
  proto.UserAssets,
  /**
   * @param {!proto.BotsDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserAssets.deserializeBinary
);


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UserAssets)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserAssets>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StatisticsServiceCommunicatorClient.prototype.getUserAssets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetUserAssets',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetUserAssets,
      callback);
};


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserAssets>}
 *     Promise that resolves to the response
 */
proto.StatisticsServiceCommunicatorPromiseClient.prototype.getUserAssets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StatisticsServiceCommunicator/GetUserAssets',
      request,
      metadata || {},
      methodDescriptor_StatisticsServiceCommunicator_GetUserAssets);
};


module.exports = proto;

