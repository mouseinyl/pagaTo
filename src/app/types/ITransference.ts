import IUser from "./IUser";

export default interface ITransference{
  createdAt:string,
  fromSource:string,
  fromUser:IUser,
  toUser:IUser,
}
