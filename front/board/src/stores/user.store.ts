import { IUser } from "src/interfaces";

interface IUserStore {
    user: IUser;
    setUser: () => void;
    resetUser: () => void;
}