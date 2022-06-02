import { BaseModel } from "./base_model";
import { Contributor as ContributorInterface } from "../interfaces/contributor";
import { Keyable } from "../interfaces/keyable";

export class Contributor extends BaseModel implements ContributorInterface {
  declare user_id: number;
  declare email: string;
  declare fullname: string;
  declare created_at: string;
  declare created_at_timestamp: number;
  declare is_admin: boolean;
  declare is_reviewer: boolean;
  declare languages: Keyable;
  declare admin_rights: string[];
}
