interface IMsg {
  push(arg0: { message: string; date: string; username: string | undefined; }): unknown;
  message?: string;
  date?: string;
  username?: string;
}

export default IMsg;