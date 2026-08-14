export class apiResponse {
  static success(message: string, data?: any) {
    return {
      statusCode: 201,
      message,
      data: data || null,
    };
  }

  static conflict(message: string) {
    return {
      statusCode: 409,
      message,
      data: null,
    };
  }

  static error(message: string, data?: any) {
    return {
      statusCode: 500,
      message,
      data: data,
    };
  }

  static badRequest(message: string) {
    return {
      statusCode: 400,
      message,
      data: null,
    };
  }
}
