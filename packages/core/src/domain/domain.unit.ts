import { DomainModel } from "./domain.model";
import { TDomainUnit } from "./domain.types";

export const domain: TDomainUnit = (name) => new DomainModel({ name });
