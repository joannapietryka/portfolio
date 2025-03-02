import { SectionId } from "./types";

export const formatSectionHeading = (sectionId:SectionId): string => {
    if (!sectionId) return "";
    return sectionId.includes("-") ? sectionId.replace(/-/g, " ") : sectionId;
  };