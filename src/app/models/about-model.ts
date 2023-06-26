import { Experience } from "./experience-model";

export interface About {
    name: String,
    description: String,
    currentExperience: Experience,
    notableExperiences: Array<ExperienceAboutPage>,
    skills: Array<String>
};

interface ExperienceAboutPage extends Experience {
    display_text: String,
}