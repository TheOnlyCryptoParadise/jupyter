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

const proto = require('./stock_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.StockCommunicatorClient =
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
proto.StockCommunicatorPromiseClient =
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
 *   !proto.Fortune,
 *   !proto.Fortune>}
 */
const methodDescriptor_StockCommunicator_AddFortune = new grpc.web.MethodDescriptor(
  '/StockCommunicator/AddFortune',
  grpc.web.MethodType.UNARY,
  proto.Fortune,
  proto.Fortune,
  /**
   * @param {!proto.Fortune} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Fortune.deserializeBinary
);


/**
 * @param {!proto.Fortune} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Fortune)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Fortune>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StockCommunicatorClient.prototype.addFortune =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StockCommunicator/AddFortune',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_AddFortune,
      callback);
};


/**
 * @param {!proto.Fortune} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Fortune>}
 *     Promise that resolves to the response
 */
proto.StockCommunicatorPromiseClient.prototype.addFortune =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StockCommunicator/AddFortune',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_AddFortune);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.FortuneRequest,
 *   !proto.Fortune>}
 */
const methodDescriptor_StockCommunicator_GetFortune = new grpc.web.MethodDescriptor(
  '/StockCommunicator/GetFortune',
  grpc.web.MethodType.UNARY,
  proto.FortuneRequest,
  proto.Fortune,
  /**
   * @param {!proto.FortuneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Fortune.deserializeBinary
);


/**
 * @param {!proto.FortuneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Fortune)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Fortune>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StockCommunicatorClient.prototype.getFortune =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StockCommunicator/GetFortune',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_GetFortune,
      callback);
};


/**
 * @param {!proto.FortuneRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Fortune>}
 *     Promise that resolves to the response
 */
proto.StockCommunicatorPromiseClient.prototype.getFortune =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StockCommunicator/GetFortune',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_GetFortune);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StockTransaction,
 *   !proto.TransactionAckStatus>}
 */
const methodDescriptor_StockCommunicator_AddTransaction = new grpc.web.MethodDescriptor(
  '/StockCommunicator/AddTransaction',
  grpc.web.MethodType.UNARY,
  proto.StockTransaction,
  proto.TransactionAckStatus,
  /**
   * @param {!proto.StockTransaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TransactionAckStatus.deserializeBinary
);


/**
 * @param {!proto.StockTransaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TransactionAckStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TransactionAckStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StockCommunicatorClient.prototype.addTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StockCommunicator/AddTransaction',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_AddTransaction,
      callback);
};


/**
 * @param {!proto.StockTransaction} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TransactionAckStatus>}
 *     Promise that resolves to the response
 */
proto.StockCommunicatorPromiseClient.prototype.addTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StockCommunicator/AddTransaction',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_AddTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TransactionRequest,
 *   !proto.TransactionAckStatus>}
 */
const methodDescriptor_StockCommunicator_CancelTransaction = new grpc.web.MethodDescriptor(
  '/StockCommunicator/CancelTransaction',
  grpc.web.MethodType.UNARY,
  proto.TransactionRequest,
  proto.TransactionAckStatus,
  /**
   * @param {!proto.TransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TransactionAckStatus.deserializeBinary
);


/**
 * @param {!proto.TransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TransactionAckStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TransactionAckStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StockCommunicatorClient.prototype.cancelTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StockCommunicator/CancelTransaction',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_CancelTransaction,
      callback);
};


/**
 * @param {!proto.TransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TransactionAckStatus>}
 *     Promise that resolves to the response
 */
proto.StockCommunicatorPromiseClient.prototype.cancelTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StockCommunicator/CancelTransaction',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_CancelTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TransactionRequest,
 *   !proto.TransactionAckStatus>}
 */
const methodDescriptor_StockCommunicator_CheckTransactionStatus = new grpc.web.MethodDescriptor(
  '/StockCommunicator/CheckTransactionStatus',
  grpc.web.MethodType.UNARY,
  proto.TransactionRequest,
  proto.TransactionAckStatus,
  /**
   * @param {!proto.TransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TransactionAckStatus.deserializeBinary
);


/**
 * @param {!proto.TransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TransactionAckStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TransactionAckStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StockCommunicatorClient.prototype.checkTransactionStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StockCommunicator/CheckTransactionStatus',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_CheckTransactionStatus,
      callback);
};


/**
 * @param {!proto.TransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TransactionAckStatus>}
 *     Promise that resolves to the response
 */
proto.StockCommunicatorPromiseClient.prototype.checkTransactionStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StockCommunicator/CheckTransactionStatus',
      request,
      metadata || {},
      methodDescriptor_StockCommunicator_CheckTransactionStatus);
};


module.exports = proto;

