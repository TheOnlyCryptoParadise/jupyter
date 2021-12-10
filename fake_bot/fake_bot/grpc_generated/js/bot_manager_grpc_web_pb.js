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
const proto = require('./bot_manager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.BotManagerCommunicatorClient =
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
proto.BotManagerCommunicatorPromiseClient =
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
 *   !proto.CreateBotRequest,
 *   !proto.CreateBotResponse>}
 */
const methodDescriptor_BotManagerCommunicator_CreateBot = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/CreateBot',
  grpc.web.MethodType.UNARY,
  proto.CreateBotRequest,
  proto.CreateBotResponse,
  /**
   * @param {!proto.CreateBotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateBotResponse.deserializeBinary
);


/**
 * @param {!proto.CreateBotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CreateBotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateBotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotManagerCommunicatorClient.prototype.createBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/CreateBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_CreateBot,
      callback);
};


/**
 * @param {!proto.CreateBotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateBotResponse>}
 *     Promise that resolves to the response
 */
proto.BotManagerCommunicatorPromiseClient.prototype.createBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/CreateBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_CreateBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotManagerCommunicator_RemoveBot = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/RemoveBot',
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
proto.BotManagerCommunicatorClient.prototype.removeBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/RemoveBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_RemoveBot,
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
proto.BotManagerCommunicatorPromiseClient.prototype.removeBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/RemoveBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_RemoveBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotManagerCommunicator_ResumeBot = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/ResumeBot',
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
proto.BotManagerCommunicatorClient.prototype.resumeBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/ResumeBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_ResumeBot,
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
proto.BotManagerCommunicatorPromiseClient.prototype.resumeBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/ResumeBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_ResumeBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotManagerCommunicator_PauseBot = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/PauseBot',
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
proto.BotManagerCommunicatorClient.prototype.pauseBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/PauseBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_PauseBot,
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
proto.BotManagerCommunicatorPromiseClient.prototype.pauseBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/PauseBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_PauseBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotManagerCommunicator_StopBot = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/StopBot',
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
proto.BotManagerCommunicatorClient.prototype.stopBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/StopBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_StopBot,
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
proto.BotManagerCommunicatorPromiseClient.prototype.stopBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/StopBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_StopBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateStrRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotManagerCommunicator_RenameBot = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/RenameBot',
  grpc.web.MethodType.UNARY,
  proto.UpdateStrRequest,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.UpdateStrRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateStrRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotManagerCommunicatorClient.prototype.renameBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/RenameBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_RenameBot,
      callback);
};


/**
 * @param {!proto.UpdateStrRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotManagerCommunicatorPromiseClient.prototype.renameBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/RenameBot',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_RenameBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateStrRequest,
 *   !proto.BotResponse>}
 */
const methodDescriptor_BotManagerCommunicator_UpdateBotDescription = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/UpdateBotDescription',
  grpc.web.MethodType.UNARY,
  proto.UpdateStrRequest,
  bot_comm_pb.BotResponse,
  /**
   * @param {!proto.UpdateStrRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  bot_comm_pb.BotResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateStrRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotManagerCommunicatorClient.prototype.updateBotDescription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/UpdateBotDescription',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_UpdateBotDescription,
      callback);
};


/**
 * @param {!proto.UpdateStrRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotResponse>}
 *     Promise that resolves to the response
 */
proto.BotManagerCommunicatorPromiseClient.prototype.updateBotDescription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/UpdateBotDescription',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_UpdateBotDescription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotsDataRequest,
 *   !proto.BotsStatusesResponse>}
 */
const methodDescriptor_BotManagerCommunicator_GetBotsStatuses = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/GetBotsStatuses',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotsDataRequest,
  proto.BotsStatusesResponse,
  /**
   * @param {!proto.BotsDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BotsStatusesResponse.deserializeBinary
);


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotsStatusesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotsStatusesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotManagerCommunicatorClient.prototype.getBotsStatuses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/GetBotsStatuses',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetBotsStatuses,
      callback);
};


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotsStatusesResponse>}
 *     Promise that resolves to the response
 */
proto.BotManagerCommunicatorPromiseClient.prototype.getBotsStatuses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/GetBotsStatuses',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetBotsStatuses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotsDataRequest,
 *   !proto.BotsNamesResponse>}
 */
const methodDescriptor_BotManagerCommunicator_GetBotsNames = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/GetBotsNames',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotsDataRequest,
  proto.BotsNamesResponse,
  /**
   * @param {!proto.BotsDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BotsNamesResponse.deserializeBinary
);


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotsNamesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotsNamesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotManagerCommunicatorClient.prototype.getBotsNames =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/GetBotsNames',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetBotsNames,
      callback);
};


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotsNamesResponse>}
 *     Promise that resolves to the response
 */
proto.BotManagerCommunicatorPromiseClient.prototype.getBotsNames =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/GetBotsNames',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetBotsNames);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.BotInfoResponse>}
 */
const methodDescriptor_BotManagerCommunicator_GetBotInfo = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/GetBotInfo',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotRequest,
  proto.BotInfoResponse,
  /**
   * @param {!proto.BotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BotInfoResponse.deserializeBinary
);


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotManagerCommunicatorClient.prototype.getBotInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/GetBotInfo',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetBotInfo,
      callback);
};


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotInfoResponse>}
 *     Promise that resolves to the response
 */
proto.BotManagerCommunicatorPromiseClient.prototype.getBotInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/GetBotInfo',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetBotInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotsDataRequest,
 *   !proto.FullInfoResponse>}
 */
const methodDescriptor_BotManagerCommunicator_GetFullInfo = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/GetFullInfo',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotsDataRequest,
  proto.FullInfoResponse,
  /**
   * @param {!proto.BotsDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FullInfoResponse.deserializeBinary
);


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.FullInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.FullInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotManagerCommunicatorClient.prototype.getFullInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/GetFullInfo',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetFullInfo,
      callback);
};


/**
 * @param {!proto.BotsDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.FullInfoResponse>}
 *     Promise that resolves to the response
 */
proto.BotManagerCommunicatorPromiseClient.prototype.getFullInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/GetFullInfo',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetFullInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.Empty>}
 */
const methodDescriptor_BotManagerCommunicator_Ping = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/Ping',
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
proto.BotManagerCommunicatorClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/Ping',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_Ping,
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
proto.BotManagerCommunicatorPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/Ping',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BotRequest,
 *   !proto.BotStatusAddressResponse>}
 */
const methodDescriptor_BotManagerCommunicator_GetBotAddress = new grpc.web.MethodDescriptor(
  '/BotManagerCommunicator/GetBotAddress',
  grpc.web.MethodType.UNARY,
  bot_comm_pb.BotRequest,
  proto.BotStatusAddressResponse,
  /**
   * @param {!proto.BotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BotStatusAddressResponse.deserializeBinary
);


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.BotStatusAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BotStatusAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BotManagerCommunicatorClient.prototype.getBotAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BotManagerCommunicator/GetBotAddress',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetBotAddress,
      callback);
};


/**
 * @param {!proto.BotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BotStatusAddressResponse>}
 *     Promise that resolves to the response
 */
proto.BotManagerCommunicatorPromiseClient.prototype.getBotAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BotManagerCommunicator/GetBotAddress',
      request,
      metadata || {},
      methodDescriptor_BotManagerCommunicator_GetBotAddress);
};


module.exports = proto;

