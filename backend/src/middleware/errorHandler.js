export function notFound(req, res, next) {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
}

export function errorHandler(error, req, res, next) {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message || "Server error";

  if (error.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(error.errors)
      .map((item) => item.message)
      .join(", ");
  }

  if (error.code === 11000) {
    statusCode = 409;
    message = "Email already exists";
  }

  if (error.name === "CastError") {
    statusCode = 400;
    message = "Invalid resource id";
  }

  res.status(statusCode).json({
    message,
    ...(process.env.NODE_ENV === "production" ? {} : { stack: error.stack })
  });
}
