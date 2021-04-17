import ICard from "./ICard";

export default interface IUser{
  uuid:string | null;
  name:string | null;
  email:string | null;
  photo:string | null;
  balance:number;
  cards: ICard[];
}
