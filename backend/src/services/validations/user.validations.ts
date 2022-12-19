import IReturn from "../../interfaces/returns.interface";

const userValidation = (requestedUsername: string, userUsername: string): IReturn<string> => {
  const isValid = requestedUsername === userUsername;  
  if (!isValid) return { type: 'INVALID_VALUE', message: 'Not authorized' };
  return { type: null, message: '' };
}

export default userValidation;