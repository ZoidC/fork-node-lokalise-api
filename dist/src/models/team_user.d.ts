import { BaseModel } from "./base_model";
import { TeamUser as TeamUserInterface } from "../interfaces/team_user";
export declare class TeamUser extends BaseModel implements TeamUserInterface {
    user_id: number;
    email: string;
    fullname: string;
    created_at: string;
    created_at_timestamp: number;
    role: string;
}
