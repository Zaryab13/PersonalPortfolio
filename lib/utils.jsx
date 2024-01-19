export const validateString = (value, maxLength) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
      return false;  
    }
  
    return true;
  };
  
  
export const getErrorMessage = (error)=>{
  let message;
  if (error instanceof Error) {
    message = error.message;
  }else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if(typeof error === 'string'){
    message = error;
  }else{
    message= 'Unknown Error'
  }
  return message;
}