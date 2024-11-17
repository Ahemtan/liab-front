// Updated reusable error handler with additional info
export const handleApiError = (error) => {
    let errorMessage = "Something went wrong!";
    let statusCode = null;

    if (error.response) {
        const errorData = error.response.data;
        statusCode = error.response.status;
        if (errorData.message && typeof errorData.message === 'object') {
            errorMessage = Object.values(errorData.message).join(', ') || errorMessage;
        } else if (errorData.message) {
            errorMessage = errorData.message;
        }
    } else {
        errorMessage = "Network error or server is down.";
    }

    return { message: errorMessage, statusCode };
};
